import { StyleSheet } from 'react-native';
import { Appbar, Avatar } from 'react-native-paper';

import { usuarioLogado } from '../data/dados';

export default function Menu() {
  return (
    <Appbar style={styles.container} safeAreaInsets={{ bottom: 0 }}>
      <Appbar.Action icon="home" onPress={() => {}} />
      <Appbar.Action icon="magnify" onPress={() => {}} />
      <Appbar.Action icon="play-box-outline" onPress={() => {}} />
      <Appbar.Action icon="shopping-outline" onPress={() => {}} />
      <Avatar.Image size={28} source={{ uri: usuarioLogado.avatar }} />
    </Appbar>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#dbdbdb',
  },
});
