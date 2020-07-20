import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fonts } from '../../../utils'

const ListNews = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <View style={styles.content}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.desc}>{props.desc}</Text>
            </View>
            <Image source={props.img} style={styles.img} />
        </TouchableOpacity>
    )
}

export default ListNews

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 10,
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderBottomColor: colors.border
    },
    content: {
        flex: 1
    },
    title: {
        flex: 1,
        fontSize: 16,
        fontFamily: fonts.primary[600],
        textAlign: 'justify',
        marginRight: 20
    
    },
    desc: {
        fontSize: 12,
        fontFamily: fonts.primary[600],
        color: colors.text.secondary,
        marginTop: 5
    },
    img: {
        width: 80,
        height: 70,
        borderRadius: 10,
    }
})
