import React, { useEffect, useRef, useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import * as Speech from 'expo-speech';
import { useLanguage } from '../context/LanguageContext';
import { useProgress } from '../context/ProgressContext';
import { palette } from '../theme/colors';
import BackBar from '../components/BackBar';

const GRID_SIZE = 3;
const CELL = 72;
const TOTAL_ROUNDS = 3;
const MAX_COMMANDS = 6;

type Dir = 'up' | 'down' | 'left' | 'right';
type Pos = { row: number; col: number };

const ARROWS: Record<Dir, string> = { up: '⬆️', down: '⬇️', left: '⬅️', right: '➡️' };
const DELTA: Record<Dir, { row: number; col: number }> = {
  up: { row: -1, col: 0 },
  down: { row: 1, col: 0 },
  left: { row: 0, col: -1 },
  right: { row: 0, col: 1 },
};

function randomPos(): Pos {
  return { row: Math.floor(Math.random() * GRID_SIZE), col: Math.floor(Math.random() * GRID_SIZE) };
}

function buildRound(): { start: Pos; goal: Pos } {
  const start = randomPos();
  let goal = randomPos();
  let guard = 0;
  while ((goal.row === start.row && goal.col === start.col) && guard < 20) {
    goal = randomPos();
    guard++;
  }
  return { start, goal };
}

export default function RobotProgramScreen() {
  const { t, lang } = useLanguage();
  const { markVisited } = useProgress();
  const [roundIndex, setRoundIndex] = useState(0);
  const [round, setRound] = useState(() => buildRound());
  const [robotPos, setRobotPos] = useState<Pos>(round.start);
  const [commands, setCommands] = useState<Dir[]>([]);
  const [running, setRunning] = useState(false);
  const [feedback, setFeedback] = useState<'success' | 'fail' | null>(null);
  const finished = roundIndex >= TOTAL_ROUNDS;
  const runToken = useRef(0);

  useEffect(() => {
    markVisited('robot');
  }, []);

  useEffect(() => {
    setRobotPos(round.start);
    setCommands([]);
    setFeedback(null);
  }, [round]);

  const speak = (text: string) => {
    Speech.stop();
    Speech.speak(text, { language: lang === 'ar' ? 'ar-SA' : 'en-US', pitch: 1.1, rate: 0.9 });
  };

  useEffect(() => {
    if (finished) speak(t.wellDone);
  }, [finished]);

  const addCommand = (dir: Dir) => {
    if (running || commands.length >= MAX_COMMANDS) return;
    setCommands((prev) => [...prev, dir]);
  };

  const clearCommands = () => {
    if (running) return;
    setCommands([]);
    setRobotPos(round.start);
    setFeedback(null);
  };

  const run = () => {
    if (running || commands.length === 0) return;
    setRunning(true);
    setFeedback(null);
    const token = ++runToken.current;
    let pos = { ...round.start };
    let step = 0;
    let failed = false;

    const stepFn = () => {
      if (runToken.current !== token) return;
      if (step >= commands.length) {
        setRunning(false);
        if (!failed && pos.row === round.goal.row && pos.col === round.goal.col) {
          setFeedback('success');
          speak(lang === 'ar' ? 'أحسنت!' : 'Great!');
          setTimeout(() => setRoundIndex((r) => r + 1), 900);
        } else {
          setFeedback('fail');
          speak(t.timeUp);
          setTimeout(() => {
            setRobotPos(round.start);
            setCommands([]);
            setFeedback(null);
          }, 900);
        }
        return;
      }
      const dir = commands[step];
      const delta = DELTA[dir];
      const next = { row: pos.row + delta.row, col: pos.col + delta.col };
      if (next.row < 0 || next.row >= GRID_SIZE || next.col < 0 || next.col >= GRID_SIZE) {
        failed = true;
        setRunning(false);
        setFeedback('fail');
        speak(t.timeUp);
        setTimeout(() => {
          setRobotPos(round.start);
          setCommands([]);
          setFeedback(null);
        }, 900);
        return;
      }
      pos = next;
      setRobotPos(pos);
      step++;
      setTimeout(stepFn, 450);
    };
    stepFn();
  };

  const restart = () => {
    setRoundIndex(0);
    setRound(buildRound());
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackBar title={t.robotProgram} />
      {finished ? (
        <View style={styles.center}>
          <Text style={styles.wellDone}>{t.wellDone}</Text>
          <Pressable style={styles.playAgainBtn} onPress={restart}>
            <Text style={styles.playAgainText}>{t.playAgain}</Text>
          </Pressable>
        </View>
      ) : (
        <View style={styles.center}>
          <Text style={styles.progress}>{roundIndex + 1} / {TOTAL_ROUNDS}</Text>
          <View style={[styles.grid, { width: CELL * GRID_SIZE, height: CELL * GRID_SIZE }]}>
            {Array.from({ length: GRID_SIZE }).map((_, r) => (
              <View key={r} style={{ flexDirection: 'row' }}>
                {Array.from({ length: GRID_SIZE }).map((__, c) => {
                  const isRobot = robotPos.row === r && robotPos.col === c;
                  const isGoal = round.goal.row === r && round.goal.col === c;
                  return (
                    <View key={c} style={[styles.cell, { width: CELL, height: CELL }]}>
                      {isGoal ? <Text style={styles.goalStar}>⭐</Text> : null}
                      {isRobot ? <Text style={styles.robot}>🤖</Text> : null}
                    </View>
                  );
                })}
              </View>
            ))}
          </View>

          <View style={styles.commandsRow}>
            {Array.from({ length: MAX_COMMANDS }).map((_, i) => (
              <View key={i} style={styles.commandSlot}>
                <Text style={styles.commandText}>{commands[i] ? ARROWS[commands[i]] : ''}</Text>
              </View>
            ))}
          </View>

          {feedback === 'fail' ? <Text style={styles.feedbackText}>{t.timeUp}</Text> : null}

          <View style={styles.arrowPad}>
            <Pressable style={styles.arrowBtn} onPress={() => addCommand('up')}>
              <Text style={styles.arrowText}>⬆️</Text>
            </Pressable>
            <View style={{ flexDirection: 'row' }}>
              <Pressable style={styles.arrowBtn} onPress={() => addCommand('left')}>
                <Text style={styles.arrowText}>⬅️</Text>
              </Pressable>
              <Pressable style={styles.arrowBtn} onPress={() => addCommand('right')}>
                <Text style={styles.arrowText}>➡️</Text>
              </Pressable>
            </View>
            <Pressable style={styles.arrowBtn} onPress={() => addCommand('down')}>
              <Text style={styles.arrowText}>⬇️</Text>
            </Pressable>
          </View>

          <View style={styles.actionsRow}>
            <Pressable style={styles.clearBtn} onPress={clearCommands}>
              <Text style={styles.actionText}>{t.clear}</Text>
            </Pressable>
            <Pressable style={styles.runBtn} onPress={run}>
              <Text style={styles.actionText}>▶ {t.startRobot}</Text>
            </Pressable>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: palette.bgSky },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  progress: { fontSize: 16, fontWeight: '700', color: palette.dark, marginBottom: 8 },
  grid: {
    borderWidth: 3,
    borderColor: palette.dark,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 12,
  },
  cell: {
    borderWidth: 1,
    borderColor: '#DDD',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.white,
  },
  goalStar: { fontSize: 32, position: 'absolute' },
  robot: { fontSize: 34 },
  commandsRow: { flexDirection: 'row', marginVertical: 10 },
  commandSlot: {
    width: 32,
    height: 32,
    marginHorizontal: 2,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: palette.purple,
    alignItems: 'center',
    justifyContent: 'center',
  },
  commandText: { fontSize: 16 },
  feedbackText: { fontSize: 16, fontWeight: '800', color: palette.red, marginBottom: 6 },
  arrowPad: { alignItems: 'center', marginVertical: 8 },
  arrowBtn: {
    width: 56,
    height: 56,
    borderRadius: 14,
    backgroundColor: palette.blue,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
  },
  arrowText: { fontSize: 26 },
  actionsRow: { flexDirection: 'row', marginTop: 10 },
  clearBtn: {
    backgroundColor: palette.red,
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 18,
    marginHorizontal: 8,
  },
  runBtn: {
    backgroundColor: palette.green,
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 18,
    marginHorizontal: 8,
  },
  actionText: { color: palette.white, fontWeight: '800', fontSize: 15 },
  wellDone: { fontSize: 32, fontWeight: '900', color: palette.dark, marginBottom: 20 },
  playAgainBtn: { backgroundColor: palette.green, paddingHorizontal: 24, paddingVertical: 14, borderRadius: 24 },
  playAgainText: { color: palette.white, fontSize: 18, fontWeight: '800' },
});
