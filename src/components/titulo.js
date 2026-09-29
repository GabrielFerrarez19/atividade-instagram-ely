import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

export default function Titulo() {
  return (
    <Appbar.Header style={styles.container}>
      <Appbar.Content title="Instagram" titleStyle={styles.logo} />
      <Appbar.Action icon="plus-box-outline" onPress={() => {}} />
      <Appbar.Action icon="heart-outline" onPress={() => {}} />
      <Appbar.Action icon="facebook-messenger" onPress={() => {}} />
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  logo: {
    fontFamily: 'GrandHotel_400Regular',
    fontSize: 34,
    lineHeight: 44,
  },
});
