import { FlatList } from 'react-native';

import Stories from './stories';
import Foto from './foto';
import { posts } from '../data/dados';

export default function Feed() {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Foto {...item} />}
      ListHeaderComponent={Stories}
      showsVerticalScrollIndicator={false}
    />
  );
}
