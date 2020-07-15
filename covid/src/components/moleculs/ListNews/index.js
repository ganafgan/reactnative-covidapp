import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { colors, fonts } from '../../../utils'

const ListNews = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Text style={styles.title}>{props.title}</Text>
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
    title: {
        flex: 1,
        fontSize: 16,
        fontFamily: fonts.primary[600],
        textAlign: 'justify',
        marginRight: 20
    
    },
    img: {
        width: 80,
        height: 60,
        borderRadius: 10
    }
})
