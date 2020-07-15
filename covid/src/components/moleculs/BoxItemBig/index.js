import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ILCorona } from '../../../assets'
import { colors, fonts } from '../../../utils'

const BoxItemBig = (props) => {
    return (
        <View style={styles.container}>
            <Image source={ILCorona} style={styles.img} />
            <Text style={styles.count}>{props.count}</Text>
            <Text style={styles.text}>{props.status}</Text>
        </View>
    )
}

export default BoxItemBig

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.border,
        height: 100,
        width: 175,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        marginTop: 20
    },
    img: {
        height: 25,
        width: 25
    },
    count: {
        fontSize: 18,
        fontFamily: fonts.primary[600],
        marginTop: 5,
        color: colors.black
        
    },
    text: {
        fontSize: 12,
        marginTop: 10,
        color: colors.black
    }
})
