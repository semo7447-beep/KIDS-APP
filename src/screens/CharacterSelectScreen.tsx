import React from 'react';
import { FlatList, Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useLanguage } from '../context/LanguageContext';
import { useCharacter } from '../context/CharacterContext';
import { palette } from '../theme/colors';
import { CHARACTERS, CharacterItem } from '../data/characters';
import BackBar from '../components/BackBar';

export default function CharacterSelectScreen({ navigation }: NativeStackScreenProps<any>) {
  const { t, lang } = useLanguage();
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
        numColumns={3}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => {
          const isSelected = item.id === selectedId;
          return (
            <Pressable onPress={() => onSelect(item)}>
              <View style={[styles.card, { borderColor: item.color }, isSelected ? styles.cardSelected : null]}>
                <Image source={item.image} style={styles.avatar} resizeMode="cover" />
                <Text style={styles.name}>{lang === 'ar' ? item.nameAr : item.nameEn}</Text>
                <Text style={styles.desc} numberOfLines={2}>
                  {lang === 'ar' ? item.descAr : item.descEn}
                </Text>
                {isSelected ? <Text style={styles.checkmark}>✓</Text> : null}
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
  list: { alignItems: 'center', paddingVertical: 12 },
  card: {
    width: 112,
    margin: 6,
    borderRadius: 18,
    backgroundColor: palette.white,
    borderWidth: 3,
    alignItems: 'center',
    padding: 6,
  },
  cardSelected: { backgroundColor: '#FFF3D0' },
  avatar: { width: 90, height: 90, borderRadius: 12 },
  name: { marginTop: 4, fontSize: 14, fontWeight: '900', color: palette.dark },
  desc: { fontSize: 10, color: palette.dark, textAlign: 'center', marginTop: 2 },
  checkmark: {
    position: 'absolute',
    top: 4,
    right: 4,
    fontSize: 18,
    fontWeight: '900',
    color: palette.green,
  },
});
