import { DMSans_400Regular, DMSans_700Bold } from '@expo-google-fonts/dm-sans';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { AuthProvider } from './src/hooks/useAuth';
import { Routes } from './src/routes';
import { Home } from './src/screens/Home';
import theme from './src/styles/theme';

export default function App() {
  const [isLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_700Bold,
  });

  if (!isLoaded) {
    return <AppLoading />;
  }

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <StatusBar style="light" backgroundColor="transparent" translucent />
        {/* <Home /> */}
        <Routes />
      </ThemeProvider>
    </AuthProvider>
  );
}
