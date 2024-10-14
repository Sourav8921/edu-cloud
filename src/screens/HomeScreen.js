import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import EvilIcons from '@expo/vector-icons/EvilIcons';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1">
        <StatusBar style='light'/>
        <View className="bg-blue-400 h-56 p-4">
            <View className="flex-row mt-6 justify-between ">
                <View>
                  <EvilIcons name="navicon" size={28} color="white" />
                </View>
                <Text className="text-white flex-1 ml-4 font-medium text-lg">CMI</Text>
                <TouchableOpacity className="bg-white p-2 rounded-lg">
                  <Text className="text-blue-400 font-medium">Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}