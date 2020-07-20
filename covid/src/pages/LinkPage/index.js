import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const LinkPage = (props) => {

    // const url = props.route.params.url
    // console.log(url)

    useEffect(()=>{
        ClickLink()
    },[])

    const [linkUrl, setLinkUrl] = useState('')
    console.log(linkUrl)

    const ClickLink = () => {
        setLinkUrl(props.route.params.url)
    }

    return (
        <WebView
        source={{uri: linkUrl}}
        />
    )
}

export default LinkPage

const styles = StyleSheet.create({})
