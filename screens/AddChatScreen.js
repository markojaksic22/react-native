import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input } from "react-native-elements";
import  Icon  from "react-native-vector-icons/FontAwesome";
import { db } from "../firebase";

const AddChatScreen = ({ navigation }) => {

    const [input, Setinput] = useState("");
    
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Add a new chat",
            headerBackTitle: "Chats",
        })
    },[navigation])


    const createChat = async () => {
        await db
            .collection("chats")
            .add({
            chatName: input,
            })
            .then(() => {
            navigation.goBack();
            })
            .catch((error) => alert(error));
    };
    
    return (
        <View style={styles.container}>
            <Input
                placeholder="Enter chat name"
                value={input}
                onChangeText={(text) => Setinput(text)}
                onSubmitEditing={createChat}
                leftIcon= {
                <Icon color="gray" size={24} name="wechat" type="antidesign"/>
                }
            />
            <Button disabled={!input} backgroundColor="blue" onPress={createChat} title="create new chat"/>
        </View>
    )
}

export default AddChatScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 30,
        height: "100%",
    },
   
})
