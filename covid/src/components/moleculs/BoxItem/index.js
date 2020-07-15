import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ILCorona } from '../../../assets'
import { colors, fonts } from '../../../utils'

const BoxItem = (props) => {
    return (
        <View style={styles.container}>
            <Image source={ILCorona} style={styles.img} />
            <Text style={styles.count}>{props.count}</Text>
            <Text style={styles.text}>{props.status}</Text>
        </View>
    )
}

export default BoxItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.border,
        height: 100,
        width: 75,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        marginTop: 10
    },
    img: {
        height: 25,
        width: 25
    },
    count: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        marginTop: 10,
        color: colors.black
        
    },
    text: {
        fontSize: 10,
        marginTop: 10,
        color: colors.black
    }
})
