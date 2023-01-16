import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  View,
  StyleSheet,
  Dimensions
} from "react-native";

import logo from "../../../assets/images/Home/logo.jpg";

import Day from "./Day";

const Home = ({ navigation, route }) => {
  const [backgroundColor, setBackgroundColor] = useState("#F9851C");

  const changeColor = (event) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    console.log(scrollY);
    if (scrollY <= 1423) {
      setBackgroundColor("#F9851C");
    } else if (scrollY >= 1423) {
      setBackgroundColor("#14AF6C");
    } else {
      setBackgroundColor("#14AF6C");
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={backgroundColor} style="light" />
      <View
        style={{
          ...styles.logoAvatarContainer,
          backgroundColor: backgroundColor
        }}
      >
        <Image source={logo} style={styles.logo} />
        <Image source={logo} style={styles.logo} />
      </View>
      <ScrollView onScroll={changeColor} bounces={false}>
        <Day />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {},
  logoAvatarContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingTop: 45,
    paddingBottom: 15
  },
  logo: {
    width: 55,
    height: 55,
    borderRadius: 100
  }
});
