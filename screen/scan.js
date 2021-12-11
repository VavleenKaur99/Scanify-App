import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Linking, Image, ImageBackground, View, DeviceEventEmitter } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import Database from '../service/dbService'
import { NavigationContainer } from '@react-navigation/native';

import { useNavigation } from "@react-navigation/native";
const scan = () => {
    const navigation = useNavigation();
    let data = new Database()
    const onSuccess = e => {
        //alert(e.data)

        navigation.navigate('ProductList')
        // let qrdata = { shopid: "xJzKEPTAnMLVfaUJXwcz", category: "dairy" }
        // data.getScanData(qrdata.shopid, qrdata.category)
        // DeviceEventEmitter.addListener("avtaradded", (event) => {
        //     if (event) {

        //         alert(event)
        //     }

        //     else {
        //         alert("invalid qr code")
        //     }

        // })

    };
    return (

        <View style={styles.container}>
            <View style={{ backgroundColor: 'purple', flex: 0.15, justifyContent: 'center' }}>
                <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 20 }}>
                    Scan QR Code
                </Text>
            </View>
            <View style={{ flex: 0.75 }}>
                <QRCodeScanner
                    cameraStyle={{ width: '90%', alignSelf: 'center' }}
                    onRead={(e) => onSuccess(e)} />

            </View>
            <View style={{ flex: 0.1, backgroundColor: 'purple' }}>

            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});

export default scan;
//flashMode={RNCamera.Constants.FlashMode.torch}