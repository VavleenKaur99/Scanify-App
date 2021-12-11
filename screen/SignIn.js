// import React, { useEffect, useState } from 'react'

// import {
//     StyleSheet,
//     View,
//     Text,
//     Image,
//     TouchableOpacity,
//     TextInput,
//     Alert,
// } from 'react-native'
// import { COLORS, SIZES, FONTS } from '../../constants'
// import { ScrollView } from 'react-native-gesture-handler'

// const Login = ({ navigation }) => {
//     const [formState, setFormState] = useState([])
//     const onAlertTriggered = (message) => {
//         return Alert.alert('Add Address', message, [
//             { text: 'OK', onPress: () => console.log('OK Pressed') },
//         ])
//     }
//     const onHandleChange = (label, value) => {
//         setFormState({
//             ...formState,
//             [label]: value,
//         })
//         console.log('form phone number : ', formState.phone_number)
//     }
//     const onSubmit = () => {
//         if (
//             formState.phone_number !== undefined &&
//             formState.phone_number.length == 10
//         ) {
//             console.log(formState)
//         } else onAlertTriggered(JSON.stringify(formState))
//     }
//     return (
//         <View style={styles.container}>
//             <View style={styles.sub_container}>
//                 <ScrollView>
//                     <Text
//                         style={{
//                             ...FONTS.checkout_btn_text,
//                             fontWeight: 'bold',
//                             marginLeft: 6,
//                         }}
//                     >
//                         Welcome to Cliq App
//                     </Text>
//                     <Text style={{ ...FONTS.home_btm_text, marginLeft: 6 }}>
//                         Please enter your mobile number
//                     </Text>
//                     <View style={styles.input_container}>
//                         <View style={{ flexDirection: 'row' }}>
//                             <Text
//                                 style={{
//                                     justifyContent: 'center',
//                                     padding: 6,
//                                     margin: 2,
//                                     alignContent: 'center',
//                                     alignSelf: 'center',
//                                 }}
//                             >
//                                 +91
//                             </Text>
//                             <TextInput
//                                 placeholder={'Mobile Number*'}
//                                 keyboardType={'numeric'}
//                                 maxLength={12}
//                                 returnKeyType={'done'}
//                                 onChangeText={(phone) =>
//                                     onHandleChange('phone_number', phone)
//                                 }
//                                 style={styles.input_box}
//                                 placeholderTextColor={'#212121'}
//                             ></TextInput>
//                         </View>
//                     </View>

//                     <Text
//                         style={{
//                             ...FONTS.home_btm_text,
//                             marginLeft: 6,
//                             marginTop: 10,
//                         }}
//                     >
//                         Please enter OTP received on your mobile number
//                     </Text>
//                     <View style={{ flexDirection: 'row' }}>
//                         <View style={styles.input_otp_container}>
//                             <TextInput
//                                 numberOfLines={1}
//                                 maxLength={1}
//                                 keyboardType={'numeric'}
//                             ></TextInput>
//                         </View>
//                         <View style={styles.input_otp_container}>
//                             <TextInput
//                                 numberOfLines={1}
//                                 maxLength={1}
//                                 keyboardType={'numeric'}
//                             ></TextInput>
//                         </View>
//                         <View style={styles.input_otp_container}>
//                             <TextInput
//                                 numberOfLines={1}
//                                 maxLength={1}
//                                 keyboardType={'numeric'}
//                             ></TextInput>
//                         </View>
//                         <View style={styles.input_otp_container}>
//                             <TextInput
//                                 numberOfLines={1}
//                                 maxLength={1}
//                                 keyboardType={'numeric'}
//                             ></TextInput>
//                         </View>
//                         <View style={styles.input_otp_container}>
//                             <TextInput
//                                 numberOfLines={1}
//                                 maxLength={1}
//                                 keyboardType={'numeric'}
//                             ></TextInput>
//                         </View>
//                         <View style={styles.input_otp_container}>
//                             <TextInput
//                                 numberOfLines={1}
//                                 maxLength={1}
//                                 keyboardType={'numeric'}
//                             ></TextInput>
//                         </View>
//                     </View>
//                     <Text
//                         style={{
//                             ...FONTS.big_button_text,
//                             marginLeft: 0,
//                             alignSelf: 'center',
//                             color: '#0077b6',
//                         }}
//                     >
//                         Resend OTP
//                     </Text>
//                 </ScrollView>
//             </View>
//             <View style={styles.submit_btn_container}>
//                 <TouchableOpacity onPress={onSubmit}>
//                     <Text style={styles.submit_box}>Continue</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         height: '100%',
//         width: '100%',
//         backgroundColor: '#ececec',
//     },
//     sub_container: {
//         height: '85%',
//         width: '96%',
//         margin: 8,
//         backgroundColor: '#fafafa',
//         display: 'flex',
//         flexDirection: 'column',
//     },
//     input_container: {
//         width: '96%',
//         height: 40,
//         position: 'relative',
//         margin: 5,
//         paddingLeft: 4,
//         paddingRight: 4,
//         borderWidth: 1,
//         borderColor: '#d2d2d2',
//         borderRadius: 2,
//         borderStyle: 'solid',
//     },
//     input_box: {
//         backgroundColor: '#00000000',
//         color: '#212121',
//         ...FONTS.home_btm_text,
//     },
//     submit_btn_container: {
//         backgroundColor: '#DA1C4C',
//         height: 50,
//         width: '60%',
//         bottom: 0,
//         position: 'absolute',
//         marginBottom: 10,
//         alignSelf: 'center',
//         alignItems: 'center',
//         borderRadius: 5,
//         justifyContent: 'center',
//     },
//     submit_box: {
//         color: COLORS.white,
//         ...FONTS.box_shadow,
//         ...FONTS.h2,
//         fontWeight: 'bold',
//     },
//     input_otp_container: {
//         minWidth: '10%',
//         flex: 1,
//         justifyContent: 'center',
//         alignSelf: 'center',
//         alignItems: 'center',
//         height: 40,
//         position: 'relative',
//         margin: 6,
//         paddingLeft: 4,
//         paddingRight: 4,
//         borderWidth: 2,
//         borderColor: '#d2d2d2',
//         borderRadius: 2,
//         borderStyle: 'solid',
//     },
// })

// export default Login
import React, { useState, useEffect, useMemo, useRef } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
    Image,
    DeviceEventEmitter,
    ActivityIndicator,
    ImageBackground,
    BackHandler
} from 'react-native'
import { useFocusEffect } from '@react-navigation/native';

import { moderateScale } from 'react-native-size-matters'
function SignIn() {
    const navigation = useNavigation()
    const [value, setValue] = useState('')
    const [formattedValue, setFormattedValue] = useState('')
    const [valid, setValid] = useState(false)
    const [showMessage, setShowMessage] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loader, setLoader] = useState(false)

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/beautiful-color-gradient-hues-backgrounds-ee9ae5-5961f9.png')}
                style={styles.container}
            >
                <View style={{ flex: 0.3, justifyContent: 'center' }}>
                    <Image source={require('../assets/logo.png')}
                        style={{
                            fontSize: 30,
                            fontWeight: 'bold',
                            color: '#4E4EFF',
                            textAlign: 'center',
                            width: 160,
                            height: 180,
                            justifyContent: 'center',
                            alignSelf: 'center'
                        }}
                    />
                </View>

                <View
                    style={{
                        backgroundColor: '#F8F8F8',
                        flex: 0.8,
                        borderTopLeftRadius: moderateScale(30),
                        borderTopRightRadius: moderateScale(30),
                        paddingHorizontal: '5%',
                        shadowColor: 'black',
                        elevation: 5,

                    }}
                >
                    <ScrollView showsHorizontalScrollIndicator={false}>

                        <TextInput
                            placeholder={'Enter Email Id'}
                            placeholderTextColor={'grey'}
                            onChangeText={(value) => setEmail(value)}
                            value={email}
                            style={{
                                backgroundColor: '#E5D5F5',
                                padding: moderateScale(10),
                                shadowColor: 'black',
                                shadowOffset: {
                                    width: 5,
                                    height: 10,
                                },
                                shadowOpacity: 1,
                                fontSize: moderateScale(15),
                                shadowRadius: 5,
                                elevation: 4,
                                marginTop: moderateScale(70),
                                borderRadius: 10,
                                color: 'black'
                            }}
                            selectionColor="black"
                        />

                        <TextInput
                            placeholder={'Enter Password'}
                            placeholderTextColor={'grey'}
                            onChangeText={(value) => setPassword(value)}
                            secureTextEntry={true}
                            style={{
                                backgroundColor: '#E5D5F5',
                                padding: moderateScale(10),
                                shadowColor: 'black',
                                shadowOffset: {
                                    width: 5,
                                    height: 10,
                                },
                                shadowOpacity: 1,
                                fontSize: moderateScale(15),
                                shadowRadius: 5,
                                elevation: 4,
                                marginTop: moderateScale(15),
                                borderRadius: 10,
                                color: 'black'
                            }}
                            selectionColor="black"
                        />

                    </ScrollView>
                    <TouchableOpacity
                        style={{
                            width: '100%',
                            backgroundColor: '#9D3FFF',
                            borderWidth: 1,
                            bottom: moderateScale(20),
                            alignSelf: 'center',
                            position: 'absolute',
                            shadowColor: 'grey',
                            elevation: 5,
                        }}
                        onPress={() => navigation.navigate('scan')}
                    >
                        <Text
                            style={{
                                paddingVertical: moderateScale(10),
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: moderateScale(20),
                                textAlign: 'center',
                            }}
                        >
                            SIGN IN
                        </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
export default SignIn
