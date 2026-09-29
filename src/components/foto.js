import { useState } from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import { Card, Avatar, IconButton, Text } from 'react-native-paper';

export default function Foto({ usuario, avatar, imagem, curtidoPor, curtidas, legenda }) {
  const { width } = useWindowDimensions();
  const [curtido, setCurtido] = useState(false);
  const [salvo, setSalvo] = useState(false);

  const totalCurtidas = curtidas + (curtido ? 1 : 0);

  return (
    <Card mode="contained" style={styles.container}>
      <Card.Title
        title={usuario}
        titleStyle={styles.negrito}
        left={(props) => <Avatar.Image {...props} size={34} source={{ uri: avatar }} />}
        leftStyle={styles.avatar}
        right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
      />

      <Card.Cover source={{ uri: imagem }} style={{ width, height: width, borderRadius: 0 }} />

      <Card.Actions style={styles.acoes}>
        <View style={styles.acoesEsquerda}>
          <IconButton
            icon={curtido ? 'heart' : 'heart-outline'}
            iconColor={curtido ? '#ed4956' : '#262626'}
            onPress={() => setCurtido(!curtido)}
          />
          <IconButton icon="chat-outline" onPress={() => {}} />
          <IconButton icon="send-outline" onPress={() => {}} />
        </View>
        <IconButton
          icon={salvo ? 'bookmark' : 'bookmark-outline'}
          onPress={() => setSalvo(!salvo)}
        />
      </Card.Actions>

      <Card.Content>
        <Text variant="bodyMedium" style={styles.texto}>
          Curtido por <Text style={styles.negrito}>{curtidoPor}</Text> e{' '}
          <Text style={styles.negrito}>outras {totalCurtidas} pessoas</Text>
        </Text>
        <Text variant="bodyMedium" style={styles.texto}>
          <Text style={styles.negrito}>{usuario}</Text> {legenda}
        </Text>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    borderRadius: 0,
    backgroundColor: '#fff',
  },
  avatar: {
    marginRight: 10,
  },
  acoes: {
    justifyContent: 'space-between',
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  acoesEsquerda: {
    flexDirection: 'row',
  },
  texto: {
    marginBottom: 4,
  },
  negrito: {
    fontWeight: 'bold',
  },
});
