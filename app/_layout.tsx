import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { Slot, Stack } from 'expo-router';

const RootLayout = () => {
  return (
    <Stack>
         <Stack.Screen  name="(tabs)" options={{ headerShown:false }}/>
        <Stack.Screen  name="index" options={{ headerShown:false }}/>
        <Stack.Screen  name="(auth)" options={{ headerShown:false }}/>
        {/* <Stack.Screen  name="home" options={{ headerShown:false }}/> */}
        {/* <Stack.Screen  name="login" options={{ headerShown:false }}/>  */}
        {/* <Stack.Screen  name="(tabs)/profile"  options={{
          headerShown: true,
          title: "Fill your profile",
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStyle: {
            borderWidth: 0, // Removes the bottom line
            shadowOpacity: 0, // Removes shadow on iOS
            elevation: 0, // Removes shadow on Android
          },
        }}/>  */}
        
    </Stack>
  )
}

export default RootLayout

const styles = StyleSheet.create({})