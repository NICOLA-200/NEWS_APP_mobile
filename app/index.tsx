import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Text, Image , SafeAreaView ,TouchableOpacity, StyleSheet } from 'react-native';
import { Stack, Link, router } from 'expo-router';

import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
       <SafeAreaView  style={styles.container}>
      
      <TouchableOpacity onPress={() => router.push("/signup")} style={{marginTop:200}}>
     <Image   source={require('../assets/d-images/Vector.png')} />       
     </TouchableOpacity>
    
     
      </SafeAreaView>
  );

 
}

const styles = StyleSheet.create(
  {
    container : {
      display: "flex",
      
      flex:1,
      alignItems:"center",
      backgroundColor:"white"

     
    }
  }
)