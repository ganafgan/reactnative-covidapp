import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, View, RefreshControl } from 'react-native'
import { ILDoctor, JsonAboutCovid } from '../../assets'
import { AboutCovid, BoxItemBig, ListNews, Loading } from '../../components'
import { colors, fonts } from '../../utils'
import moment from 'moment';


const Home = (props) => {
    
    const [dataCovid, setDataCovid] = useState(null)
    const [dataNews, setDataNews] = useState(null)
    const [refreshing, setRefreshing] = useState(false)
    console.log(dataCovid)
    console.log(dataNews)


    useEffect(()=>{
        getData()
        getDataNews()
    },[])



    const getData = () => {
            axios.get('https://api.kawalcorona.com/indonesia')
            .then((res)=>{
                setDataCovid(res.data)
                setRefreshing(false)
            })
            .catch((err)=>{
                console.log(err)
            })
    }

    const getDataNews = () => {
        const API_KEY = 'ae88de4fa148465f8f3d91c0ad3a77bd'
        axios.get(`http://newsapi.org/v2/top-headlines?country=id&apiKey=${API_KEY}`)
        .then((res)=>{
            setDataNews(res.data.articles)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const renderDataNews = () => {

       let kata = 'corona'

        let filtered = dataNews.filter((val)=>{
            return val.title.toLowerCase().includes(kata.toLowerCase())
        })
       
        if(filtered === null){
            return <h4>Berita Kosong</h4>
        }
        return dataNews.map((val, index)=>{
            return(
                <ListNews
                    key={index}
                    title={val.title.length > 70 ? val.title.slice(0,55) + '. . .' : val.title}
                    img={{uri: val.urlToImage}}
                    desc={moment(val.publishedAt).startOf('hour').fromNow() }
                    onPress={() => props.navigation.navigate('LinkPage', {url: val.url})}
                />
            )
        })

    }

    const renderAboutCovid = () => {

        let aboutCovid = JsonAboutCovid.data.slice(0,3)

        return aboutCovid.map((val)=>{
            return <AboutCovid
                    key={val.id}
                    img={{uri: val.img}}
                    title={val.title}
                    onPress={() => props.navigation.navigate('Descriptions', {desc: val.desc, title: val.title})}
                />
        })
    }

    if( dataCovid === null || dataCovid.length === 0){
        return <Loading />
    }
    return (
        <View style={styles.container}>
            <View style={styles.page}>
                <View style={styles.banner}>
                    <View style={styles.textcontent}>
                        <Text style={styles.text}>Fight Covid-19</Text>
                        <Text style={styles.text}>Starting</Text>
                        <Text style={styles.text}>With You</Text>
                    </View>
                    <Image source={ILDoctor} style={styles.img}/>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} 
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => {
                        setRefreshing(true)
                        getData()
                        getDataNews()

                    }} />}
                >
                    <View style={styles.content}>
                        <Text style={styles.title}>Covid-19 Update</Text>
                        <View style={styles.boxItem2}>
                            <BoxItemBig count={dataCovid[0].positif} status='Positive'/>
                            <BoxItemBig count={dataCovid[0].dirawat} status='Active'/>
                        </View>
                        <View style={styles.boxItem2}>
                            <BoxItemBig count={dataCovid[0].sembuh} status='Recovered'/>
                            <BoxItemBig count={dataCovid[0].meninggal} status='Death'/>
                        </View>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.title}>About Covid-19</Text>
                        {renderAboutCovid()}
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.title}>Covid-19 News</Text>
                        {renderDataNews()}
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
    },
    page: {
        flex: 1,
        backgroundColor: colors.white,
        borderRadius: 20
    },
    img: {
        height: 200,
        width: 270,
        
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: fonts.primary[600]
    },
    banner: {
        flexDirection: 'row',
        backgroundColor: colors.white
    },
    textcontent: {
        marginLeft: 30,
        marginTop: 70
    },
    title: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        marginTop: 20
    },
    content: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    boxItem: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    boxItem2: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
