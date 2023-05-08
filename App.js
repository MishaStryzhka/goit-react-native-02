import React, { useState } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Button,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";

export default function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [loadFonts] = useFonts({
    // "Roboto-Regulat": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
    "BebasNeue-Regular": require("./assets/fonts/Roboto/BebasNeue-Regular.ttf"),
    "Lobster-Regular": require("./assets/fonts/Lobster/Lobster-Regular.ttf"),
    "BrunoAceSC-Regular": require("./assets/fonts/Bruno/BrunoAceSC-Regular.ttf")
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
  }, [])


  if (!loadFonts) {
    return undefined
  }

  const nameHandler = (text) => setName(text);
  const passwordHandler = (text) => setPassword(text);

  const onLogin = () => {
    Alert.alert("Credentials", `${name} + ${password}`);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground source={require('./assets/PhotoBG.png')} resizeMode="cover" style={styles.image}>
          <RegistrationScreen>

          </RegistrationScreen>


          {/* <Text style={styles.textTitle}> MyTransfer</Text>
          <View style={styles.section}>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
              style={styles.sectionLogin}
            >
              <TextInput
                value={name}
                onChangeText={nameHandler}
                placeholder="Username"
                style={styles.input}
              />
              <TextInput
                value={password}
                onChangeText={passwordHandler}
                placeholder="Password"
                secureTextEntry={true}
                style={styles.input}
              />
              <TouchableOpacity style={styles.btnLogIn} onPress={onLogin}>
                <Text>Přihlásit se</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={onLogin}>
                <Text style={styles.text1}>Zaregistrovat se</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </View> */}
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  section: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  sectionLogin: {
    alignItems: "center",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
  },
  btnLogIn: {
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 30,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#ff8000",
    color: "red",
    marginBottom: 10,
    marginTop: 20,
  },
  textTitle: {
    position: "absolute",
    top: 10,
    left: 10,
    fontSize: 35,
    marginBottom: 20,
    fontFamily: "BrunoAceSC-Regular",
    color: "#ff8000",
  },
  text1: {
    fontSize: 18,
    fontFamily: "Roboto-Bold",
    color: "#ff8000",
  },
});