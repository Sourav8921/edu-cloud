import { View, Text,  StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from '@expo/vector-icons/Feather';
import colors from '../styles/colors';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
    const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={colors.primary} style='light'/>
        <View style={styles.headerContainer}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={28} color="white" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>PROFILE</Text>
                <TouchableOpacity>
                    <Feather name="edit" size={22} color="white" />
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.profileCard}>
            <Image source={require('../../assets/images/profile.jpg')} alt='profile' style={styles.profileImage}/>
            <Text style={styles.name}>Sourav Ramesh</Text>
            <Text style={styles.std}>STD - 12 (B)</Text>
            <View style={styles.separator}/>
            <Text style={styles.description}>It is a long established fact that a reader will be distracted by the readable.</Text>
        </View>
        <View style={styles.bottomContainer}>
            <View style={styles.detailsCard}>
                <View style={styles.detailsRow}>
                    <Feather name="phone" size={24} color="gray"/>
                    <Text style={styles.detailsText}>+91 9999900000</Text>
                </View>
                <View style={styles.detailsRow}>
                    <Feather name="mail" size={24} color="gray" />
                    <Text style={styles.detailsText}>souravramesh@gmail.com</Text>
                </View>
            </View>
            <View style={styles.bottom}>
                <TouchableOpacity style={styles.bottomCard}>
                    <Text style={styles.bottomText}>Personal Detail</Text>
                    <Ionicons name="arrow-forward" size={24} color={colors.primary} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomCard}>
                    <Text style={styles.bottomText}>Friends List</Text>
                    <Ionicons name="arrow-forward" size={24} color={colors.primary} />
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    headerContainer: {
        backgroundColor: colors.primary,
        padding: 20,
        height: 200,
        borderBottomEndRadius: 40,
        borderBottomStartRadius: 40,    
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerTitle: {
        color: colors.white,
        fontWeight: '600',
        fontSize: 18
    },
    profileCard: {
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        margin: 20,
        backgroundColor: colors.white,
        padding: 35,
        borderRadius: 16,
        marginTop: -110,
        alignItems: 'center',
        gap: 5,
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 50,
    },
    name: {
        fontSize: 16,
        fontWeight: '500'
    },
    std: {
        color: 'gray',
        fontSize: 16,
        fontWeight: '500'
    },
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: '#CED0CE', 
        marginVertical: 5, 
      },
    description: {
        color: 'gray',
        textAlign: 'center',
        lineHeight: 22,
    },
    bottomContainer: {
        padding: 20,
        flex: 1,
    },
    detailsCard: {
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        backgroundColor: colors.white,
        padding: 20,
        borderRadius: 16,
        gap: 15,
    },
    detailsRow: {
        flexDirection: 'row',
    },
    detailsText: {
        fontWeight: '500',
        fontSize: 15,
        marginLeft: 15,
    },
    bottom: {
        gap: 20,
        marginTop: 60,
    },
    bottomCard: {
        borderRadius: 16,
        backgroundColor: '#ECECEC',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    bottomText: {
        color: colors.primary,
        fontWeight: "500",
    }
})