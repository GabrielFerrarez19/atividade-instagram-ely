import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, TextInput, Button, Divider } from 'react-native-paper';

export default function Login({ onEntrar }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaVisivel, setSenhaVisivel] = useState(false);

  const podeEntrar = usuario.length > 0 && senha.length > 0;

  return (
    <SafeAreaView style={styles.container}>
      <Text variant="bodyMedium" style={styles.idioma}>
        Português (Brasil) ▾
      </Text>

      <View style={styles.conteudo}>
        <Text style={styles.logo}>Instagram</Text>

        <TextInput
          mode="outlined"
          label="Telefone, e-mail ou nome de usuário"
          autoCapitalize="none"
          value={usuario}
          onChangeText={setUsuario}
          style={styles.input}
        />
        <TextInput
          mode="outlined"
          label="Senha"
          secureTextEntry={!senhaVisivel}
          value={senha}
          onChangeText={setSenha}
          style={styles.input}
          right={
            <TextInput.Icon
              icon={senhaVisivel ? 'eye-off' : 'eye'}
              onPress={() => setSenhaVisivel(!senhaVisivel)}
            />
          }
        />

        <Button
          mode="contained"
          disabled={!podeEntrar}
          onPress={onEntrar}
          style={styles.botao}
          labelStyle={styles.negrito}
        >
          Entrar
        </Button>

        <Text variant="bodySmall" style={styles.ajuda}>
          Esqueceu seus dados de login? <Text style={styles.destaque}>Obtenha ajuda.</Text>
        </Text>

        <View style={styles.separador}>
          <Divider style={styles.linha} />
          <Text variant="labelMedium" style={styles.ou}>
            OU
          </Text>
          <Divider style={styles.linha} />
        </View>

        <Button
          mode="text"
          icon="facebook"
          textColor="#1877F2"
          onPress={onEntrar}
          labelStyle={styles.negrito}
        >
          Entrar com o Facebook
        </Button>
      </View>

      <Divider />
      <Text variant="bodySmall" style={[styles.ajuda, styles.rodape]}>
        Não tem uma conta? <Text style={styles.destaque}>Cadastre-se.</Text>
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  idioma: {
    textAlign: 'center',
    color: '#8e8e8e',
    marginTop: 16,
  },
  conteudo: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  logo: {
    fontFamily: 'GrandHotel_400Regular',
    fontSize: 56,
    lineHeight: 72,
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    marginBottom: 12,
    backgroundColor: '#fafafa',
  },
  botao: {
    marginTop: 4,
  },
  negrito: {
    fontWeight: 'bold',
  },
  ajuda: {
    textAlign: 'center',
    color: '#8e8e8e',
    marginTop: 16,
  },
  destaque: {
    fontWeight: 'bold',
    color: '#262626',
  },
  separador: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  linha: {
    flex: 1,
  },
  ou: {
    marginHorizontal: 16,
    color: '#8e8e8e',
  },
  rodape: {
    marginTop: 0,
    paddingVertical: 16,
  },
});
