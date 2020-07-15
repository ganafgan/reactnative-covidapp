import React from 'react'
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native'
import { colors, fonts } from '../../utils'
import { ILResearch, ILPatient, ILCorona, ILFever, ILDroplet, ILCough, ILBat, ILHuman, ILMedicine, ILInfected, ILApps } from '../../assets'
import { AboutCovid } from '../../components'


const Message = (props) => {

    return (
        <View style={styles.container}>
            <ImageBackground source={ILResearch} style={styles.img}>
                <Text style={styles.title}>Frequently Asked Question(FAQ)</Text>
                <Text style={styles.subtitle}>Covid-19</Text>
            </ImageBackground>
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <AboutCovid img={ILCorona} title='Apa itu Covid-19 ?' onPress={()=> props.navigation.navigate('Covid1')}/>
                    <AboutCovid img={ILPatient} title='Bagaimana cara mencegah penularan Covid-19 ?' />
                    <AboutCovid img={ILFever} title='Apa saja gejala Covid-19 ?' />
                    <AboutCovid img={ILDroplet} title='Seberapa bahaya Covid-19 ?' />
                    <AboutCovid img={ILCough} title='Bagaimana manusia bisa terinfeksi Covid-19 ?' />
                    <AboutCovid img={ILBat} title='Bisakah manusia terinfeksi dari hewan ?' />
                    <AboutCovid img={ILHuman} title='Apakah Covid-19 dapat di tularkan antar manusia ?' />
                    <AboutCovid img={ILMedicine} title='Apakah sudah ada vaksin atau obat untuk Covid-19 ?' />
                    <AboutCovid img={ILInfected} title='Sipakah yang beresiko terinfeksi Covid-19 ?' />
                    <AboutCovid img={ILApps} title='Dimana saya bisa mendapatkan informasi tentang Covid-19 ?' />
                </ScrollView>
            </View>
        </View>
        
    )
}

export default Message

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary
    },
    img: {
        height: 300
    },
    content: {
        backgroundColor: colors.white,
        flex: 1,
        marginTop: -120,
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingBottom: 20
    },
    title: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        textAlign: 'right',
        marginRight: 20,
        marginTop: 120
    },
    subtitle: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        textAlign: 'right',
        marginRight: 110
    }
})
