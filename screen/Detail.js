/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { COLORS, SIZES, FONTS } from '../constants'
import { ScrollView } from 'react-native-gesture-handler'

const Detail = ({ route, navigation }) => {
    var { id, name, img, type, price, reviewperson, review, desc } = route.params

    if (price.toString().includes('$')) {
        price = Math.round(price.replace('$', ''))
    } else if (price.toString().includes('₹')) {
        price = Math.round(price.replace('₹', ''))
    }

    return (
        <View
            style={{
                height: '100%',
                width: '100%',
                backgroundColor: '#fafafa',
            }}
        >
            <ScrollView style={{ flex: 1 }}>
                <View style={{ height: 500, padding: 2 }}>
                    <Image
                        source={{ uri: img }}
                        resizeMode="contain"
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </View>
                {/* <View>
                    <Text style={{ marginTop: SIZES.padding, marginHorizontal: SIZES.padding, color: COLORS.black, ...FONTS.body2 }}>{name}</Text>
                    <Text style={{ marginTop: SIZES.base / 2, marginHorizontal: SIZES.padding, color: COLORS.black, ...FONTS.body3 }}>{type}</Text>
                    <Text style={{ marginTop: SIZES.radius, marginHorizontal: SIZES.padding, color: COLORS.black, ...FONTS.h1 }}>{price}</Text>
                    <View style={{ flexDirection: 'row', marginTop: SIZES.radius, marginHorizontal: SIZES.padding }}>
                            <View>
                                <Text style={{ color: COLORS.white, ...FONTS.body3 }}>Select size</Text>
                            </View>
                            <View style={{ flex: 1, flexWrap: 'wrap', flexDirection: 'row', marginLeft: SIZES.radius }}>

                            </View>
                    </View>
                </View> */}
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        margin: 10,
                    }}
                >
                    <View style={{ flex: 1, alignItems: 'flex-start' }}>
                        <Text style={{ ...FONTS.product_title_text }}>
                            {name}
                        </Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <Text style={{ ...FONTS.product_title_text }}>
                            ₹{price}
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        margin: 10,
                    }}
                >
                    <View style={{ flex: 1, alignItems: 'flex-start' }}>
                        <Text style={{ ...FONTS.product_sub_title_text, color: 'red', fontSize: 19 }}>
                            About
                        </Text>
                    </View>
                    <View style={{ flex: 1, }}>
                        <Text

                            style={{ ...FONTS.product_sub_title_text }}

                        >{desc}
                        </Text>
                    </View>
                </View>
                <View style={{ margin: 10 }}>
                    <View style={{ flex: 1, alignItems: 'flex-start' }}>
                        <Text style={{ ...FONTS.product_sub_title_text, color: 'red', fontSize: 19 }}>
                            Reviews
                        </Text>
                        <Text style={{
                            fontFamily: 'Rubik-Italic',
                            fontSize: 17,
                            lineHeight: 22,
                            color: 'black',
                            fontWeight: '800'
                        }}>
                            {reviewperson}</Text>
                        <Text style={{ ...FONTS.product_sub_title_text, color: 'black', fontSize: 16 }}>{review}



                        </Text>
                    </View>

                </View>
            </ScrollView>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
    },
    absolute: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
})
export default Detail
