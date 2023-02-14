import React, { useState, useEffect } from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity
} from "react-native";

import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { makeRedirectUri } from "expo-auth-session";
import { googleClientId, googleAndroidId } from "@env";

import auth from "../../../assets/images/Auth/auth.png";
import google from "../../../assets/images/Auth/google.png";

WebBrowser.maybeCompleteAuthSession();

const Auth = ({ navigation, route }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [user, setUser] = useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    //clientId: googleClientId,
    //androidClientId: googleAndroidId,
    clientId:
      "699707913730-217h5htjgsouv6go4nut0nl21d53v2jh.apps.googleusercontent.com",
    androidClientId:
      "699707913730-5k49g8frkodf86931u0ulate53gkqdbo.apps.googleusercontent.com",
    //redirectUri: makeRedirectUri() //for production we have to uncomment this
  });

  useEffect(() => {
    if (response?.type === "success") {
      setAccessToken(response.authentication.accessToken);
      accessToken && fetchUserInfo();
    }
  }, [response, accessToken]);

  async function fetchUserInfo() {
    let response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    const useInfo = await response.json();

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    var month = new Date().getMonth();
    var year = new Date().getFullYear();

    const dateData = {
      month: monthNames[month],
      year: year
    };

    AsyncStorage.setItem("user", JSON.stringify(useInfo));
    AsyncStorage.setItem("date", JSON.stringify(dateData));
    setUser(useInfo);
    console.log(useInfo);
    navigation.reset({
      index: 0,
      routes: [{ name: "MainTab" }]
    });
  }

  return (
    <>
      <StatusBar backgroundColor="#550A67" style="light" />
      <View style={styles.container}>
        <Text style={styles.text}>Get yourself organized today</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              promptAsync({ showInRecents: true });
            }}
          >
            <Image style={styles.google} source={google} />
            <Text style={styles.btnText}>Continue with Google</Text>
          </TouchableOpacity>
        </View>
        <Image style={styles.img} source={auth} />
      </View>
    </>
  );
};

export default Auth;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#550A67",
    width: "100%",
    height: "100%"
  },
  text: {
    fontFamily: "DMSerifText",
    fontStyle: "normal",
    fontSize: 37.5309,
    lineHeight: 51,
    textAlign: "center",
    color: "#FFFFFF",
    paddingHorizontal: 54,
    paddingVertical: 40,
    paddingTop: 55
  },
  btnContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  btn: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#104FC1",
    borderRadius: 9,
    width: 285,
    paddingVertical: 6,
    paddingHorizontal: 6
  },
  google: {
    width: 45,
    height: 45,
    borderRadius: 9
  },
  btnText: {
    fontFamily: "ConcertOne",
    fontStyle: "normal",
    fontSize: 19.5309,
    textAlign: "center",
    color: "#FFFFFF",
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  img: {
    width: "120%",
    height: "70%",
    resizeMode: "cover",
    overflow: "hidden",
    marginTop: 8,
    marginLeft: 30
  }
});
