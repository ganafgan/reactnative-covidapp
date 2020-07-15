import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { ICArrowBack } from '../../../assets'

const IconOnly = (props) => {
    const Icon = () => {
        if(props.icon === 'back-dark'){
            return <ICArrowBack />
        }
        return <ICArrowBack />
    }
    return (
        <TouchableOpacity onPress={props.onPress} >
            <Icon />
        </TouchableOpacity>
    )
}

export default IconOnly

const styles = StyleSheet.create({})
