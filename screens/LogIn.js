import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  Button,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { FIREBASE_AUTH } from "../FirebaseConfig";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await auth.signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
      Alert("Check your email");
    } catch (error) {
      console.log(error);
      Alert("Sign in failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
        <KeyboardAvoidingView behavior="padding">
      <Text>Email</Text>
      <TextInput
        value={email}
        style={styles.input}
        placeholder="safeplate@email.com"
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
      ></TextInput>
      <Text>Password</Text>
      <TextInput
        value={password}
        style={styles.input}
        placeholder="password"
        autoCapitalize="none"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      ></TextInput>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <Button title="Log in" onPress={() => signIn()} />
          <Button title="Create account" onPress={() => signUp()} />
        </>
      )}
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    justifyContent: "center",
  },
  input: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#fff",
  },
});
