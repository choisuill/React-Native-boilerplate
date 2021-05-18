import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, SafeAreaView, TouchableOpacity, ScrollView, Button} from 'react-native'

const SaveButton = (props) => {
    return (
        <View>
            <Button style={styles.save} title={'Save'} />
        </View>
    )
}

const styles = StyleSheet.create({
    save: {
        marginTop: 10,
    }
})

export default SaveButton