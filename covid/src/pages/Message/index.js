import React from 'react'
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import { ILResearch, JsonAboutCovid } from '../../assets'
import { AboutCovid } from '../../components'
import { colors, fonts } from '../../utils'


const Message = (props) => {

    return (
        <View style={styles.container}>
            <ImageBackground source={ILResearch} style={styles.img}>
                <Text style={styles.title}>Frequently Asked Question(FAQ)</Text>
                <Text style={styles.subtitle}>Covid-19</Text>
            </ImageBackground>
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        JsonAboutCovid.data.map((val)=>{
                            return <AboutCovid 
                                key={val.id}
                                img={{uri: val.img}}
                                title={val.title}
                                onPress={() => props.navigation.navigate('Descriptions', {desc: val.desc, title: val.title})}
                            />
                        })
                    }
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
