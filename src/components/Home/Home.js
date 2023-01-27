import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  View,
  StyleSheet,
  Dimensions,
  SafeAreaView
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import logo from "../../../assets/images/Home/logo.jpg";

import Day from "./Day";

const Home = ({ navigation, route }) => {
  const [userImg, setUserImg] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState("#F9851C");

  useEffect(() => {
    const fetchImg = async () => {
      let userData = await AsyncStorage.getItem("user");
      let UserImage = JSON.parse(userData);
      console.log(UserImage);
      setUserImg(UserImage?.picture);
    };
    fetchImg();
  }, []);

  const changeColor = (event) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    //console.log(scrollY);
    if (scrollY <= 1423) {
      setBackgroundColor("#F9851C");
    } else if (scrollY >= 1423) {
      setBackgroundColor("#14AF6C");
    } else {
      setBackgroundColor("#14AF6C");
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={backgroundColor} style="light" />
      <View
        style={{
          ...styles.logoAvatarContainer,
          backgroundColor: backgroundColor
        }}
      >
        <Image source={logo} style={styles.logo} />
        <Image source={{ uri: userImg }} style={styles.logo} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={changeColor}
        bounces={false}
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
        vertical={true}
      >
        <Day navigation={navigation} route={route} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    //paddingTop: 25
  },
  logoAvatarContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingTop: 15,
    paddingBottom: 15
  },
  logo: {
    width: 55,
    height: 55,
    borderRadius: 100
  }
});
