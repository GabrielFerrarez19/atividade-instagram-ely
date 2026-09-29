import { View, StyleSheet } from 'react-native';
import { Avatar, Text } from 'react-native-paper';

export default function Story({ usuario, avatar, visto }) {
  return (
    <View style={styles.container}>
      <View style={[styles.borda, visto && styles.bordaVisto]}>
        <Avatar.Image size={62} source={{ uri: avatar }} />
      </View>
      <Text
        variant="labelSmall"
        style={[styles.nome, visto && styles.nomeVisto]}
        numberOfLines={1}
      >
        {usuario}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  borda: {
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 2.5,
    borderColor: '#d62976',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bordaVisto: {
    borderColor: '#dbdbdb',
  },
  nome: {
    marginTop: 4,
    color: '#262626',
  },
  nomeVisto: {
    color: '#8e8e8e',
  },
});
