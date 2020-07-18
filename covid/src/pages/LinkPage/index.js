import React from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const LinkPage = (props) => {


    const url = props.route.params.url
    console.log(url)

    return (
        <WebView
        source={{uri: url }}
        />
    )
}

export default LinkPage

const styles = StyleSheet.create({})
