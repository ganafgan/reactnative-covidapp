import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { ImgHasanSadikin } from '../../../assets'
import { colors, fonts } from '../../../utils'

const ListHospital = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Image source={props.img} style={styles.img} />
            <View>
                <Text style={styles.title}>Rumah Sakit</Text>
                <Text style={styles.title}>{props.nama}</Text>
                <Text style={styles.address}>{props.alamat}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ListHospital

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    img: {
        width: 80,
        height: 60,
        borderRadius: 11,
        marginRight: 16
    },
    title: {
        fontSize: 16,
        fontFamily: fonts.primary.normal,
        color: colors.text.primary
    },
    address: {
        fontSize: 12,
        fontFamily: fonts.primary[600],
        color: colors.text.secondary,
        marginTop: 6
    }
})
