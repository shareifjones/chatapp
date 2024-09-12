import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Start from './components/Start';
import Chat from './components/Chat';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { initializeApp } from "firebase/app";
import { getFirestore, enableNetwork, disableNetwork } from "firebase/firestore";
import { useNetInfo } from "@react-native-community/netinfo";
import { useEffect } from "react";
import { LogBox, Alert } from "react-native";


const Stack = createNativeStackNavigator();

LogBox.ignoreLogs(["AsyncStorage has been extracted from"]);


const App = () => {

  const firebaseConfig = {
    apiKey: "AIzaSyDPYjGvbEzthvhb7PIroPXsI5GFeZ5ybrk",
    authDomain: "meet-app-fb594.firebaseapp.com",
    projectId: "meet-app-fb594",
    storageBucket: "meet-app-fb594.appspot.com",
    messagingSenderId: "134784027532",
    appId: "1:134784027532:web:2882641e01de7f8257e4a9"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  const connectionStatus = useNetInfo();
  useEffect(() => {
    if (connectionStatus.isConnected === false) {
      Alert.alert("Connection Lost!");
      disableNetwork(db);
    } else if (connectionStatus.isConnected === true) {
      enableNetwork(db);
    }
  }, [connectionStatus.isConnected]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start"
      >
        <Stack.Screen
          name="Start"
          component={Start}
        />
        <Stack.Screen
          name="Chat">
          {props => <Chat isConnected={connectionStatus.isConnected} db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;

