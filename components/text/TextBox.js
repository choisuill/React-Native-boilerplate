import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native'

import DepthTest from './DepthTest.js'

const TextBox = (props) => {
    return (
        <View style={styles.textBox}>
            <DepthTest text={props.text} setText={props.setText} />
        </View>
    )
}

const styles = StyleSheet.create({
    textBox: {
        backgroundColor: '#ececec',
        width: 300,
        padding: 8,
        height: 'auto'
    }
})

export default TextBox