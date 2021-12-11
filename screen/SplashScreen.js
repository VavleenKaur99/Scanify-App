import React, { Component } from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'

import { FONTS } from '../constants/';
import { icons } from '../constants/'
class Splashscreen extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('LoginScreen')
        }, 2000)
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={icons.launcher_image}
                    style={styles.image}
                >

                    <ImageBackground
                        source={require('../assets/beautiful-color-gradient-hues-backgrounds-ee9ae5-5961f9.png')}
                        style={{

                            width: '100%',
                            height: 240,
                            justifyContent: 'center',
                            alignSelf: 'center',
                            alignContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <View >
                            <Image source={icons.scan_icon}
                                style={{
                                    fontSize: 30,
                                    fontWeight: 'bold',
                                    color: '#4E4EFF',
                                    textAlign: 'center',
                                    width: 200,
                                    height: 220,
                                    justifyContent: 'center',
                                    alignSelf: 'center',
                                    alignContent: 'center',
                                    alignItems: 'center'
                                }}
                            />
                        </View>
                    </ImageBackground>
                    <Text style={styles.text}>SCANIFY</Text>

                </ImageBackground>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',

    },
    image: {
        flex: 10,
        resizeMode: 'cover',
        height: '68%',
        justifyContent: 'flex-end',
    },
    text: {
        color: 'white',
        fontSize: 60,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#1d3557',
        fontFamily: 'Rubik-Bold',
        ...FONTS.body1,
    },
})
export default Splashscreen
