import React from 'react';
import { FlatList, Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useLanguage } from '../context/LanguageContext';
import { useCharacter } from '../context/CharacterContext';
import { palette } from '../theme/colors';
import { CHARACTERS, CharacterItem } from '../data/characters';
import BackBar from '../components/BackBar';

export default function CharacterSelectScreen({ navigation }: NativeStackScreenProps<any>) {
  const { t } = useLanguage();
  const { selectedId, setSelectedId } = useCharacter();

  const onSelect = (item: CharacterItem) => {
    setSelectedId(item.id);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackBar title={t.chooseCharacter} />
      <FlatList
        data={CHARACTERS}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => {
          const isSelected = item.id === selectedId;
          return (
            <Pressable onPress={() => onSelect(item)}>
              <View style={[styles.card, isSelected ? styles.cardSelected : null]}>
                <Image source={item.image} style={styles.avatar} resizeMode="cover" />
                {isSelected ? (
                  <View style={styles.checkBadge}>
                    <Text style={styles.checkmark}>✓</Text>
                  </View>
                ) : null}
              </View>
            </Pressable>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: palette.bgSky },
  list: { alignItems: 'center', paddingVertical: 10 },
  card: {
    width: 190,
    height: 190,
    margin: 6,
    borderRadius: 18,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: 'transparent',
  },
  cardSelected: { borderColor: palette.green },
  avatar: { width: '100%', height: '100%' },
  checkBadge: {
    position: 'absolute',
    top: 6,
    right: 6,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: palette.green,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkmark: { color: palette.white, fontWeight: '900', fontSize: 16 },
});
