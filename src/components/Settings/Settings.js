import React, { useState, useEffect } from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ScrollView
} from "react-native";
import { Shadow } from "react-native-shadow-2";
import AsyncStorage from "@react-native-async-storage/async-storage";

import logout from "../../../assets/images/Settings/power-off.png";

const Settings = ({ navigation, route }) => {
  const removeAppKeys = async () => {
    let keys = [];
    try {
      keys = await AsyncStorage.getAllKeys();
      console.log(`Keys: ${keys}`); // Just to see what's going on
      await AsyncStorage.multiRemove(keys);
    } catch (e) {
      console.log(e);
    }
    console.log("Done");
    navigation.reset({
      index: 0,
      routes: [{ name: "Tour" }]
    });
  };
  return (
    <View>
      <Shadow>
        <View style={styles.header}>
          <Text style={styles.headerText}>Settings</Text>
        </View>
      </Shadow>
      <TouchableOpacity onPress={removeAppKeys} style={styles.button}>
        <Image style={styles.buttonLogo} source={logout} />
        <Text style={styles.buttonText}>LOG OUT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {},
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 0,
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "#808080",
    paddingBottom: 12,
    width: Dimensions.get("window").width,
    backgroundColor: "#ffffff"
  },
  headerText: {
    fontFamily: "ConcertOne",
    fontStyle: "normal",
    fontSize: 28,
    //lineHeight: 22,
    color: "#808080",
    textAlign: "center",
    marginTop: 15
  },

  button: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 13,
    width: Dimensions.get("window").width - 200,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#C0C0C0",
    marginVertical: 20,
    marginHorizontal: 20
  },
  buttonText: {
    fontFamily: "ConcertOne",
    fontStyle: "normal",
    fontSize: 20,
    color: "red"
  },
  buttonLogo: {
    width: 30,
    height: 30,
    marginRight: 8
  }
});
