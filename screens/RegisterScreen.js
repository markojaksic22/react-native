import React, { useState, useLayoutEffect } from 'react'
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { Input, Button, Text } from 'react-native-elements';
import { auth } from '../firebase';


const RegisterScreen = ({ navigation }) => {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "Back to loggin",
        });
    }, [navigation]);

    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .then(authUser => {
                authUser.user.update({
                    displayName: name,
                    photoURL: imageUrl ||
                    "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png"
                });
            })
            .catch(error => alert(error.message));
    };


    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light" />
            <Text h3 style={{ marginBottom: 50 }}>
                Create an account
            </Text>

            <View style={styles.inputContainer}>
                <Input placeholder="Full name"
                    autofocus type="text" value={name}
                    onChangeText={(text) => setName(text)} />
                
                <Input placeholder="Email"
                     type="email" value={name}
                    onChangeText={(text) => setEmail(text)} />
                
                <Input placeholder="Password"
                     type="password" secureTextEntry value={password}
                    onChangeText={(text) => setPassword(text)} />
                
                <Input placeholder="Profile picture url (optional)"
                     type="text" value={imageUrl}
                    onChangeText={(text) => setImageUrl(text)}
                    onSubmitEditing={register}
                />
            </View>

            <Button containerStyle={styles.button} title="Register" raised onPress={register} />
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 10,
        backgroundColor: "white",
        justifyContent: "center"
    },
    button: {
        width: 200,
        marginTop: 10,
        backgroundColor: 'blue',
        text: 'white'
    },
    inputContainer: {
        width: 300,
    },
})
