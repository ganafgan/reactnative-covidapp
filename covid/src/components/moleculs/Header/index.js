import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils'
import { Button, Gap } from '../../atoms'

const Header = (props) => {
    return (
        <View style={styles.container}>
            <Button type='icon-only' icon='back-dark' onPress={props.onPress} />
            <Text style={styles.text}>{props.title}</Text>
            <Gap width={24} />
        </View>
    )
}
 
export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        paddingVertical: 30,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: colors.black,
        borderBottomWidth: 0.5
    },
    text: {
        textAlign: 'center',
        flex: 1,
        fontSize: 18,
        fontFamily: fonts.primary[600]
    }
})
