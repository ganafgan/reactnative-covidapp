import React from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { colors, fonts } from '../../../utils'
import { ICArrow } from '../../../assets'

const AboutCovid = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
                <Image source={props.img} style={styles.img} />
                <View style={styles.textContent}>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.subtitle}>Cek disini</Text>        
                </View>
                <ICArrow />
        </TouchableOpacity>
    )
}

export default AboutCovid

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop:20,
        padding: 10,
        backgroundColor: colors.border,
        borderRadius: 10,
        height: 75,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    img: {
        height: 50,
        width: 50
    },
    content: {
        flexDirection: 'row'
    },
    textContent: {
        flex: 1,
        marginLeft: 10
    },
    title: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.black,
    },
    subtitle: {
        fontSize: 11,
        fontFamily: fonts.primary[300],
        color: colors.text.secondary,
        maxWidth: 50
    }
})
