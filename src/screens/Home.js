import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Titulo from '../components/titulo';
import Feed from '../components/feed';
import Menu from '../components/menu';

export default function Home() {
  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
      <Titulo />
      <Feed />
      <Menu />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
