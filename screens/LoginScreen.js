import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input, Image } from "react-native-elements";

const LoginScreen = () => {
    return (
        <View>
            <StatusBar style="light" />
            <Image source={{
                uri: "https://logowik.com/content/uploads/images/signal-messenger-icon9117.jpg",
            }}
                style={{ width: 200, height: 200 }} />
            <View style={styles.inputContainer}>
            <Input placeholder='Email' autoFocus type="Email"/>
            <Input placeholder='Password' secureTextEntry type="Password"/>

            </View>
        </View>
       
    )
}

export default LoginScreen

const styles = StyleSheet.create({

    inputContainer: {
        
    }
})
