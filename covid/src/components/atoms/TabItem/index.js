import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { ICHomeInactive, ICLocationInactive, ICMessageInactive, ICHomeActive, ICMessageActive, ICLocationActive } from '../../../assets'
import { colors, fonts } from '../../../utils'

const TabItem = ({title, active, onPress, onLongPress}) => {
    const Icon = () => {
        if(title === 'Home'){
            return active ? <ICHomeActive/> : <ICHomeInactive />
        }
        if(title === 'FAQ'){
            return active ? <ICMessageActive/> : <ICMessageInactive />
        }
        if(title === 'Location'){
            return active ? <ICLocationActive/> : <ICLocationInactive />
        }
        return <ICMessageInactive />
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
            <Icon />
            <Text style={styles.text(active)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    text: (active)=>({
        fontSize: 15,
        color: active ? colors.text.menuActive : colors.text.menuInactive,
        fontFamily: fonts.primary[600],
        marginTop: 4
    })
})
