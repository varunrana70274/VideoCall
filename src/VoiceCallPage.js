/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import ZegoUIKitPrebuiltCall, { GROUP_VOICE_CALL_CONFIG } from '@zegocloud/zego-uikit-prebuilt-call-rn';
import {
    View,
    StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function VoiceCallPage() {
    const randomNumber = String(Math.floor(Math.random() * 10000000000));
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ZegoUIKitPrebuiltCall
                appID={1129029379}
                appSign={'799e08977c9da74bf58627513138395113bcb9877f7bc44766feee11eaa7b6de'}
                userID={randomNumber} // userID can be something like a phone number or the user id on your own user system.
                userName={"user_" + randomNumber}
                callID={"testcallid"} // callID can be any unique string.
                config={{
                    // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
                    ...GROUP_VOICE_CALL_CONFIG,
                    onOnlySelfInRoom: () => {
                        navigation.navigate('HomePage');
                    },
                    onHangUp: () => {
                        navigation.navigate('HomePage');
                    },
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});
