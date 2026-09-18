import React, { useRef } from 'react';
import { Animated, FlatList, Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useLanguage } from '../context/LanguageContext';
import { useCharacter } from '../context/CharacterContext';
import { palette } from '../theme/colors';
import { GAME_CARDS, GameCard } from '../data/games';
import { CHARACTERS } from '../data/characters';

function GameCardButton({ card, onPress }: { card: GameCard; onPress: () => void }) {
  const scale = useRef(new Animated.Value(1)).current;
  const pressIn = () => Animated.spring(scale, { toValue: 0.96, useNativeDriver: true }).start();
  const pressOut = () => Animated.spring(scale, { toValue: 1, friction: 3, useNativeDriver: true }).start();

  return (
    <Pressable onPress={onPress} onPressIn={pressIn} onPressOut={pressOut}>
      <Animated.View style={[styles.card, { transform: [{ scale }] }]}>
        <Image source={card.cardImage} style={styles.cardImage} resizeMode="cover" />
      </Animated.View>
    </Pressable>
  );
}

export default function HomeScreen({ navigation }: NativeStackScreenProps<any>) {
  const { t, isRTL, toggleLang } = useLanguage();
  const { selectedId } = useCharacter();
  const selectedCharacter = CHARACTERS.find((c) => c.id === selectedId) ?? CHARACTERS[0];

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.header, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
        <View>
          <Text style={styles.title}>{t.appName}</Text>
          <Text style={styles.tagline}>{t.tagline}</Text>
        </View>
        <View style={[styles.headerRight, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
          <Pressable onPress={() => navigation.navigate('CharacterSelect')}>
            <Image source={selectedCharacter.image} style={styles.avatarBtn} resizeMode="cover" />
          </Pressable>
          <Pressable style={styles.langBtn} onPress={toggleLang}>
            <Text style={styles.langBtnText}>{t.langToggle}</Text>
          </Pressable>
        </View>
      </View>
      <FlatList
        data={GAME_CARDS}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <GameCardButton card={item} onPress={() => navigation.navigate(item.screen)} />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: palette.bgSky },
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 6,
  },
  title: { fontSize: 20, fontWeight: '900', color: palette.dark },
  tagline: { fontSize: 11, color: palette.dark, opacity: 0.7 },
  headerRight: { alignItems: 'center' },
  avatarBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: palette.white,
    marginHorizontal: 8,
  },
  langBtn: {
    backgroundColor: palette.purple,
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 18,
  },
  langBtnText: { color: palette.white, fontWeight: '700', fontSize: 12 },
  list: { alignItems: 'center', paddingVertical: 8, paddingBottom: 24 },
  card: {
    width: 172,
    height: 240,
    margin: 6,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  cardImage: { width: '100%', height: '100%' },
});
