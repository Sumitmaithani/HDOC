import React, { useEffect, useState, useMemo } from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  View,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  FlatList,
  Pressable,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Lottie from "lottie-react-native";

import logo from "../../../assets/images/Home/logo.jpg";

import { data } from "../../common/data/data";

import Day from "./Day";

const Home = ({ navigation, route }) => {
  const [userImg, setUserImg] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState("#F9851C");

  const renderItem = ({ item }) => (
    <View>
      <View key={item.id}>
        <View
          style={{
            ...styles.textContainer,
            backgroundColor: item.backgroundColor,
          }}
        >
          <Text style={styles.heading}>{item.unit}</Text>
          <Text style={styles.subHeading}>{item.topic}</Text>
        </View>
        <View style={styles.dayContainer}>
          {item.data.map((item) => {
            return (
              <Pressable
                key={item.key}
                style={{
                  ...styles.circleContainer,
                  marginLeft: item.left,
                  marginRight: item.right,
                  zIndex: 10000000,
                }}
                onPress={() => navigation.navigate("Room", { data: item.room })}
                android_disableSound={true}
              >
                <Pressable
                  onPress={() =>
                    navigation.navigate("Room", { data: item.room })
                  }
                  style={styles.circle1}
                  android_disableSound={true}
                >
                  <Pressable
                    onPress={() =>
                      navigation.navigate("Room", { data: item.room })
                    }
                    style={{
                      ...styles.circle2,
                      backgroundColor: item.color,
                      zIndex: 10000,
                    }}
                    android_ripple={{ color: "white", borderless: false }}
                    android_disableSound={true}
                  >
                    <Image source={item.image} style={styles.face} />
                  </Pressable>
                </Pressable>
              </Pressable>
            );
          })}
        </View>
      </View>
      <Lottie style={styles.animation} source={item.animation1} autoPlay loop />
      <Lottie
        style={styles.animation2}
        source={item.animation2}
        autoPlay
        loop
      />
      <Lottie
        style={styles.animation3}
        source={item.animation3}
        autoPlay
        loop
      />
    </View>
  );

  const memoizedValue = useMemo(() => renderItem, [data]);

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
    // console.log(scrollY);
    if (scrollY <= 1409) {
      setBackgroundColor("#F9851C");
    } else if (scrollY >= 1409 && scrollY <= 2838) {
      setBackgroundColor("#14AF6C");
    } else if (scrollY >= 2838 && scrollY <= 4264) {
      setBackgroundColor("#1cb0f6");
    } else if (scrollY >= 4264 && scrollY <= 5673) {
      setBackgroundColor("#8549ba");
    } else if (scrollY >= 5673 && scrollY <= 7081) {
      setBackgroundColor("#ffc202");
    } else if (scrollY >= 7081 && scrollY <= 8488) {
      setBackgroundColor("#ED82DE");
    } else if (scrollY >= 8488 && scrollY <= 9897) {
      setBackgroundColor("#B697FF");
    } else if (scrollY >= 9897 && scrollY <= 11325) {
      setBackgroundColor("#007cbd");
    } else if (scrollY >= 11325 && scrollY <= 12733) {
      setBackgroundColor("#fbb13c");
    } else {
      setBackgroundColor("#00954a");
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={backgroundColor} style="light" />
      <View
        style={{
          ...styles.logoAvatarContainer,
          backgroundColor: backgroundColor,
        }}
      >
        <Image source={logo} style={styles.logo} />
        <Image source={{ uri: userImg }} style={styles.logo} />
      </View>
      <FlatList
        data={data}
        renderItem={memoizedValue}
        keyExtractor={(item) => item.id}
        initialNumToRender={1}
        showsVerticalScrollIndicator={false}
        onScroll={changeColor}
        bounces={false}
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
        vertical={true}
        maxToRenderPerBatch={1}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  textContainer: {
    paddingHorizontal: 12,
    paddingVertical: 20,
    borderTopColor: "#808080",
    borderTopWidth: 1,
  },
  heading: {
    fontFamily: "ConcertOne",
    fontStyle: "normal",
    fontSize: 37.5309,
    color: "#FFFFFF",
  },
  subHeading: {
    fontFamily: "ConcertOne",
    fontStyle: "normal",
    fontSize: 17.5309,
    color: "#FFFFFF",
    paddingRight: 20,
    paddingTop: 7,
    lineHeight: 22,
  },
  dayContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    //marginBottom: 200,
    zIndex: 1000,
  },
  circleContainer: {
    width: 100,
    height: 100,
    backgroundColor: "#D9D9D9",
    borderRadius: 100,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15,
    zIndex: 1,
  },
  circle1: {
    width: 90,
    height: 90,
    backgroundColor: "#ffffff",
    borderRadius: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "column",
    alignContent: "center",
    zIndex: 1,
    overflow: "hidden",
  },
  circle2: {
    width: 80,
    height: 80,
    borderRadius: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "column",
    alignContent: "center",
    zIndex: 1,
  },
  face: {
    width: 65,
    height: 65,
    zIndex: 1,
  },
  animation: {
    position: "absolute",
    top: -350,
    left: 90,
  },
  animation2: {
    position: "absolute",
    top: 100,
    right: 82,
  },
  animation3: {
    position: "absolute",
    top: 500,
    left: 90,
  },
  container: {
    paddingBottom: 85,
  },
  logoAvatarContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingTop: 15,
    paddingBottom: 15,
  },
  logo: {
    width: 55,
    height: 55,
    borderRadius: 100,
  },
});
