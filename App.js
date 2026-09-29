import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts, GrandHotel_400Regular } from '@expo-google-fonts/grand-hotel';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';

import { tema } from './src/tema';
import Login from './src/screens/Login';
import Home from './src/screens/Home';

export default function App() {
  const [fontsLoaded] = useFonts({ GrandHotel_400Regular });
  const [logado, setLogado] = useState(false);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <PaperProvider
        theme={tema}
        settings={{ icon: (props) => <MaterialCommunityIcons {...props} /> }}
      >
        <StatusBar style="dark" />
        {logado ? <Home /> : <Login onEntrar={() => setLogado(true)} />}
      </PaperProvider>
    </SafeAreaProvider>
  );
}
