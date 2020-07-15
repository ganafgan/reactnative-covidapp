import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import IconOnly from './IconOnly'

const Button = (props) => {
    if(props.type === 'icon-only'){
        return <IconOnly icon={props.icon} onPress={props.onPress} />
    }
    return (
        <TouchableOpacity onPress={props.onPress}>
            <Text>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({})
