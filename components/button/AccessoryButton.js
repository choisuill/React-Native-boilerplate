import React, {useEffect, useState} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, ScrollView, View, TextInput, TouchableOpacity} from 'react-native'


const AccessoryButton = () => {

    return (
        <View style={styles.accessory_container}>
            <Text style={styles.accessory_box}>
                <TouchableOpacity style={styles.accessory_button}><Text> 1 </Text></TouchableOpacity>
                <TouchableOpacity style={styles.accessory_button}><Text> 2 </Text></TouchableOpacity>
                <TouchableOpacity style={styles.accessory_button}><Text> 3 </Text></TouchableOpacity>
                <TouchableOpacity style={styles.accessory_button}><Text> 4 </Text></TouchableOpacity>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    accessory_container: {
    },
    accessory_box: {
        height: 50
    },
    accessory_button: {
        display: 'flex',
        backgroundColor: '#d4d4d4',
        height: 50,
        paddingHorizontal: 20,
        textAlign: 'center',
        justifyContent: 'center'
    }
})
export default AccessoryButton