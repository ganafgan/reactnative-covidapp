import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { ILResearch } from '../../assets'
import { colors, fonts } from '../../utils'
import { Header } from '../../components'

const PageCovid1 = () => {
    return (
        <View style={styles.container}> 
            <ImageBackground source={ILResearch} style={styles.img}>
                <Text style={styles.title}>Frequently Asked Question(FAQ)</Text>
                <Text style={styles.subtitle}>Covid-19</Text>
            </ImageBackground>
            <View style={styles.page}>
                <Text style={styles.titlePage}>Apa itu Covid-19 ?</Text>
                <Text style={styles.subtitlePage}>      Novel coronavierus (2019-nCov) adalah jenis baru coronavirus yang belum pernah
                    diidentifikasi sebelumnya pada manusia. Coronavirus merupakan keluarga besar virus
                    yang menyebabkan penyakit pada manusia dan hewan. Pada manusia menyebabkan penyakit
                    mulai flu biasa hingga penyakit yang serius seperti Middle East Respiratory Syndrome (MERS)
                    dan Sindrom Pernapasan Akut Berat/ Severe Acute Respiratory Syndrome (SARS)
                </Text>
            </View>
        </View>
    )
}

export default PageCovid1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    page: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.white,
        marginTop: -120
    },
    img: {
        height: 300
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
    },
    titlePage: {
        paddingHorizontal: 20,
        fontSize: 18,
        fontFamily: fonts.primary[600],
        marginTop: 50

    },
    subtitlePage: {
        paddingHorizontal: 20,
        fontSize: 14,
        fontFamily: fonts.primary[600],
        marginTop: 20,
        textAlign: 'justify'
    },
})
