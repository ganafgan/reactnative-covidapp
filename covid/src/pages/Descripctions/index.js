import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { ILReseacrh } from '../../assets'
import { colors, fonts } from '../../utils'

const Descriptions = (props) => {

    const desc = props.route.params.desc
    const title = props.route.params.title

    return (
        <View style={styles.container}> 
            <ImageBackground source={ILReseacrh} style={styles.img}>
                <Text style={styles.title}>Frequently Asked Question(FAQ)</Text>
                <Text style={styles.subtitle}>Covid-19</Text>
            </ImageBackground>
            <View style={styles.page}>
                <Text style={styles.titlePage}>{title}</Text>
                <Text style={styles.subtitlePage}>{desc}</Text>
            </View>
        </View>
    )
}

export default Descriptions

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
        marginTop: 50,
        textAlign: 'left',
    },
    subtitlePage: {
        paddingHorizontal: 20,
        fontSize: 14,
        fontFamily: fonts.primary[600],
        marginTop: 20,
        textAlign: 'justify'
    },
})
