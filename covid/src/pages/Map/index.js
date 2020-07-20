import React from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const Map = () => {
    return (
        <WebView 
            source={{uri: 'https://www.google.co.id/maps'}}
        />
    )
}

export default Map

const styles = StyleSheet.create({})
