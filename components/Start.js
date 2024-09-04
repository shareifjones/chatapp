import { useState } from "react";
import { StyleSheet, View, Text, Button, TextInput, ImageBackground, TouchableOpacity } from "react-native";

const Start = ({ navigation }) => {
    const [name, setName] = useState('');
    const colors = ['#FF0000', '#0000FF', '#008000', '#808080'];
    const [background, setBackground] = useState('');
    return (

        <View style={styles.container}>
            <ImageBackground source={require("../assets/BgImage.png")}
                style={styles.imageBackground}
            />
            <Text>Welcome to Chat App</Text>
            <TextInput
                style={styles.textInput}
                value={name}
                onChangeText={setName}
                placeholder="Enter your name here"
            />
            <Button
                title="Enter chatroom"
                onPress={() => navigation.navigate('Chat', { name: name, background: background })}
            />
            <Text>Choose a Chat Background Color: </Text>
            <TouchableOpacity
                style={[
                    styles.chooseColor,
                    { backgroundColor: "#FF0000" },
                    background === "#FF0000" && styles.selectedColor,
                ]}
                onPress={() => setBackground("#FF0000")}
            />
            <TouchableOpacity
                style={[
                    styles.chooseColor,
                    { backgroundColor: "#0000FF" },
                    background === "#0000FF" && styles.selectedColor,
                ]}
                onPress={() => setBackground("#0000FF")}
            />
            <TouchableOpacity
                style={[
                    styles.chooseColor,
                    { backgroundColor: "#008000" },
                    background === "#008000" && styles.selectedColor,
                ]}
                onPress={() => setBackground("#008000")}
            />
            <TouchableOpacity
                style={[
                    styles.chooseColor,
                    { backgroundColor: "#808080" },
                    background === "#808080" && styles.selectedColor,
                ]}
                onPress={() => setBackground("#808080")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        width: "88%",
        padding: 15,
        borderWidth: 1,
        marginTop: 15,
        marginBottom: 15
    },
    imageBackground: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
    },
    chooseColor: {
        width: 30,
        height: 30,
        borderRadius: 15,
        border: 3,
        marginRight: 15,
        borderColor: "white",
    },
    selectedColor: {
        borderColor: "#FCD95B",
        borderWidth: 3,
    }
});

export default Start;
