import React, { useEffect, useRef, useState } from 'react';
import { Animated, Easing, LayoutChangeEvent, PanResponder, StyleSheet, Text, View } from 'react-native';
import { palette } from '../theme/colors';

const HANDLE_SIZE = 44;

function Bolt({ solved, onOpen }: { solved: boolean; onOpen: () => void }) {
  const [trackWidth, setTrackWidth] = useState(0);
  const dragX = useRef(new Animated.Value(0)).current;
  const dragXRef = useRef(0);
  const openedRef = useRef(false);
  const trackWidthRef = useRef(0);

  useEffect(() => {
    trackWidthRef.current = trackWidth;
  }, [trackWidth]);

  useEffect(() => {
    const id = dragX.addListener(({ value }) => {
      dragXRef.current = value;
    });
    return () => dragX.removeListener(id);
  }, [dragX]);

  const moveTo = (locationX: number) => {
    const maxX = Math.max(trackWidthRef.current - HANDLE_SIZE, 1);
    const next = Math.max(0, Math.min(maxX, locationX - HANDLE_SIZE / 2));
    dragX.setValue(next);
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => !openedRef.current,
      onMoveShouldSetPanResponder: () => !openedRef.current,
      onPanResponderGrant: (evt) => {
        moveTo(evt.nativeEvent.locationX);
      },
      onPanResponderMove: (evt) => {
        moveTo(evt.nativeEvent.locationX);
      },
      onPanResponderRelease: () => {
        const maxX = Math.max(trackWidthRef.current - HANDLE_SIZE, 1);
        if (dragXRef.current > maxX * 0.5) {
          openedRef.current = true;
          Animated.timing(dragX, { toValue: maxX, duration: 220, easing: Easing.out(Easing.cubic), useNativeDriver: false }).start(() => {
            onOpen();
          });
        } else {
          Animated.spring(dragX, { toValue: 0, useNativeDriver: false }).start();
        }
      },
    })
  ).current;

  return (
    <View
      style={styles.track}
      onLayout={(e: LayoutChangeEvent) => setTrackWidth(e.nativeEvent.layout.width)}
      {...(solved ? {} : panResponder.panHandlers)}
    >
      <View style={styles.trackFill} />
      <Text style={styles.arrowHint}>➜</Text>
      <Animated.View style={[styles.handle, solved ? styles.handleLocked : null, { transform: [{ translateX: dragX }] }]}>
        <Text style={styles.handleEmoji}>{solved ? '🔓' : '🔒'}</Text>
      </Animated.View>
    </View>
  );
}

export default function SliderLock({ bolts, onSolved }: { bolts: number; onSolved: () => void }) {
  const [openedCount, setOpenedCount] = useState(0);
  const solvedRef = useRef(false);

  const onBoltOpened = () => {
    setOpenedCount((c) => {
      const next = c + 1;
      if (next >= bolts && !solvedRef.current) {
        solvedRef.current = true;
        setTimeout(onSolved, 500);
      }
      return next;
    });
  };

  return (
    <View style={styles.col}>
      {Array.from({ length: bolts }, (_, i) => (
        <Bolt key={i} solved={i < openedCount} onOpen={onBoltOpened} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  col: { gap: 16, width: '100%', alignItems: 'stretch' },
  track: {
    height: HANDLE_SIZE,
    borderRadius: HANDLE_SIZE / 2,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.4)',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  trackFill: { ...StyleSheet.absoluteFill },
  arrowHint: { position: 'absolute', right: 14, fontSize: 20, color: 'rgba(255,255,255,0.6)', fontWeight: '900' },
  handle: {
    width: HANDLE_SIZE,
    height: HANDLE_SIZE,
    borderRadius: HANDLE_SIZE / 2,
    backgroundColor: palette.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
  handleLocked: { backgroundColor: palette.green },
  handleEmoji: { fontSize: 20 },
});
