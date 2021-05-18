import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    InputAccessoryView,
    Button
} from 'react-native'


const DepthTest = (props) => {

    return (
        <ScrollView>
            <TextInput
                style={styles.input}
                onChangeText={(e) => {
                    props.setText(e)
                }
                }
                multiline={true}
            >
                {props.text}
            </TextInput>
            <Text style={styles.show_input}>{props.text}</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    input: {
        fontSize: 14,
        textDecorationLine: 'none'
    },
    show_input: {
        marginTop: 20,
        color: '#c4c4c4'
    }
})

export default DepthTest