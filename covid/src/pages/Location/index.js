import React from 'react'
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import { ILHospitals } from '../../assets'
import { ListHospital } from '../../components'
import { colors } from '../../utils'
import {JsonHospitals} from '../../assets'

const Location = (props) => {

    return (
        <View style={styles.page}>
            <ImageBackground source={ILHospitals} style={styles.background}>
            <Text style={styles.title}>Hospital</Text>
            <Text style={styles.subtitle}>List</Text>
            </ImageBackground>
            <View style={styles.content}>
                <ScrollView  showsVerticalScrollIndicator={false}>
                    {
                        JsonHospitals.data.map((val)=>{
                           return  <ListHospital
                                        key={val.id}
                                        nama={val.nama}
                                        alamat={val.alamat}
                                        img={{uri: val.img}}
                                        onPress={() => props.navigation.navigate('test', {url: val.url})}
                                    />
                        })
                    }
                    
                </ScrollView>
            </View>
        </View>
    )
}

export default Location

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.primary,
        flex: 1
    },
    background: {
        height: 200
    },
    title: {
        fontSize: 18,
        textAlign: 'right',
        marginTop: 100,
        color: colors.black,
        marginRight: 140
    },
    subtitle: {
        fontSize: 18,
        textAlign: 'right',
        marginRight: 160,
        color: colors.black

    },
    content: {
        backgroundColor: colors.white,
        borderRadius: 20,
        flex: 1,
        marginTop: -20
        
    }
})
