import React from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const TestPage = (props) => {


    const url = props.route.params.url
    console.log(url)

    return (
        <WebView
        source={{uri: url }}
        style={{marginTop: 20}}
        />
    )
}

export default TestPage

const styles = StyleSheet.create({})
