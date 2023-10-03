/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}                                                                                                                                                                   >
            <Button title="call" onPress={()=>navigation.navigate('VoiceCallPage')} />
        </View>
    );
}

const styles = StyleSheet.create({});
