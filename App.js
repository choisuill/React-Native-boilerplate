/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, ScrollView, View, TextInput} from 'react-native'
import axios from 'axios'
// component import
import TextBox from './components/text/TextBox.js'
import SaveButton from './components/button/SaveButton.js'
import AccessoryButton from "./components/button/AccessoryButton.js";
// react-native-keyboard-accessory library
import {KeyboardAccessoryView} from "react-native-keyboard-accessory"


const App = () => {
    const [item, setItem] = useState([])
    const [text, setText] = useState('')
    const [test, setTest] = useState('')

    async function request() {
        const DATA = await axios.get('http://10.0.2.2:8000/react/')
        return DATA.data.results
    }

    useEffect(() => {
        request().then((item) => {
            setItem(item)
            setText(item[0].text)
        })
    }, [])

    return (
        <>
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <ScrollView>
                        <Text style={styles.hello}>Text</Text>
                        <TextBox text={text} setText={setText}/>
                        <SaveButton data={text} setData={setText}/>
                        <Text>
                            {item.map(a => a.text)}
                        </Text>
                    </ScrollView>
                    <Text>{test}</Text>
                    <Button onPress={() => {
                        setTest('click Button!')
                    }} title={'test'}/>
                </ScrollView>
            </SafeAreaView>
            <KeyboardAccessoryView style={styles.accessory} androidAdjustResize hideBorder={true}>
                <View>
                    <View>
                        <AccessoryButton />
                    </View>
                </View>
            </KeyboardAccessoryView>
        </ >
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginVertical: 20
    },
    hello: {
        fontSize: 32,
        fontWeight: '700',
        textAlign: 'center',
        marginVertical: 20
    },
    accessory: {},
    accessory_text: {
        backgroundColor: 'blue'
    }
})

export default App;
