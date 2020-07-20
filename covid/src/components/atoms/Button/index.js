import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import IconOnly from './IconOnly'
import { colors, fonts } from '../../../utils'

const Button = (props) => {
    if(props.type === 'icon-only'){
        return <IconOnly icon={props.icon} onPress={props.onPress} />
    }
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.container}>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        borderRadius: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 18,
        fontFamily: fonts.primary[600],
        color: colors.white,
        marginVertical: 10
    }
})
