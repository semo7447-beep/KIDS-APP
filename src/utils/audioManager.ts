import { createAudioPlayer, setAudioModeAsync, AudioPlayer, AudioSource } from 'expo-audio';

// dB -> linear gain, matching the requested mix levels.
const dbToLinear = (db: number) => Math.pow(10, db / 20);

const MUSIC_VOLUME = dbToLinear(-20);
const SFX_VOLUME = dbToLinear(-10); // midpoint of the requested -8..-12 dB range

let musicPlayer: AudioPlayer | null = null;
let musicEnabled = true;
let soundEnabled = true;
let audioModeReady = false;

async function ensureAudioMode() {
  if (audioModeReady) return;
  audioModeReady = true;
  await setAudioModeAsync({
    playsInSilentMode: true,
    interruptionMode: 'mixWithOthers',
    shouldPlayInBackground: false,
    allowsRecording: false,
  });
}

export function setMusicEnabled(enabled: boolean) {
  musicEnabled = enabled;
  if (!musicPlayer) return;
  if (enabled) musicPlayer.play();
  else musicPlayer.pause();
}

export function setSoundEnabled(enabled: boolean) {
  soundEnabled = enabled;
}

export function isMusicEnabled() {
  return musicEnabled;
}

export function isSoundEnabled() {
  return soundEnabled;
}

export async function playMusic(source: AudioSource) {
  await ensureAudioMode();
  if (musicPlayer) {
    musicPlayer.remove();
    musicPlayer = null;
  }
  musicPlayer = createAudioPlayer(source);
  musicPlayer.loop = true;
  musicPlayer.volume = MUSIC_VOLUME;
  if (musicEnabled) musicPlayer.play();
}

export function stopMusic() {
  musicPlayer?.pause();
}

export async function playSfx(source: AudioSource) {
  if (!soundEnabled) return;
  await ensureAudioMode();
  const player = createAudioPlayer(source);
  player.volume = SFX_VOLUME;
  player.loop = false;
  const sub = player.addListener('playbackStatusUpdate', (status) => {
    if (status.didJustFinish) {
      sub.remove();
      player.remove();
    }
  });
  player.play();
}
