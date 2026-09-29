import { FlatList, StyleSheet } from 'react-native';

import Story from './story';
import { stories } from '../data/dados';

export default function Stories() {
  return (
    <FlatList
      data={stories}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Story {...item} />}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.lista}
      contentContainerStyle={styles.conteudo}
    />
  );
}

const styles = StyleSheet.create({
  lista: {
    borderBottomWidth: 1,
    borderBottomColor: '#dbdbdb',
  },
  conteudo: {
    paddingVertical: 10,
    paddingHorizontal: 4,
  },
});
