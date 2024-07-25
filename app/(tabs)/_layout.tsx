import { View, Text } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import { Foundation } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
   <>
      <Tabs>
         <Tabs.Screen name='home' options={{
          title: "home",
          headerShown: false,
          tabBarIcon: ({color, focused, size}) => 
               <Foundation name="home"  size={24} color="#4E4B66" />
          
         
   
         }} /> 

        <Tabs.Screen name='Explore' options={{
          title: "Explore",
          headerShown: false,
          tabBarIcon: ({color, focused, size}) => 
               <FontAwesome6 name="compass" size={24} color="#4E4B66" />
   
         }} />

        <Tabs.Screen name='Bookmark' options={{
          title: "Bookmark",
          headerShown: false,
          tabBarIcon: ({color, focused, size}) => 
               <MaterialIcons name="bookmark-border" size={24} color="#4E4B66" />
   
         }} />

         <Tabs.Screen name='profile' options={{
          title: "profile",
          headerShown: false,
          tabBarIcon: ({color, focused, size}) => 
               <FontAwesome5 name="user-circle" size={24} color="#4E4B66" />
   
         }} />
        </Tabs>
   </>
  )
}