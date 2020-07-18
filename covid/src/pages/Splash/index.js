import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ILCovid } from '../../assets'
import {fonts, colors} from './../../utils'
import {Gap} from './../../components'

const Splash = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('MainApp')
        }, 1000)
    },[])

    return (
        <View style={styles.container}>
            <Image source={ILCovid} style={styles.img} />
            <Gap height={10} />
            <Text style={styles.text}>Fight Covid-19</Text>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.white ,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        height: 200,
        width: 200
    },
    text: {
        fontSize:20,
        fontFamily: fonts.primary[600]
    }
})
