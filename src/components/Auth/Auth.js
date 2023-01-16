import React from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity
} from "react-native";

import auth from "../../../assets/images/Auth/auth.png";
import google from "../../../assets/images/Auth/google.png";

const Auth = ({ navigation, route }) => {
  return (
    <>
      <StatusBar backgroundColor="#550A67" style="light" />
      <View style={styles.container}>
        <Text style={styles.text}>Get yourself organized today</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              //navigation.navigate("Home");
              navigation.navigate('MainTab', { screen: 'Home' });
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
