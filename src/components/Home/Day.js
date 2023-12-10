import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  Pressable,
  FlatList,
  ScrollView,
} from "react-native";
import Lottie from "lottie-react-native";

import { data } from "../../common/data/data";

const Day = ({ navigation, route }) => {
  return (
    <ScrollView>
      {data.map((item) => {
        return (
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
                    }}
                  >
                    <Pressable
                      onPress={() =>
                        navigation.navigate("Room", { data: item.room })
                      }
                      style={styles.circle1}
                    >
                      <Pressable
                        onPress={() =>
                          navigation.navigate("Room", { data: item.room })
                        }
                        style={{
                          ...styles.circle2,
                          backgroundColor: item.color,
                        }}
                        android_ripple={{ color: "white", borderless: false }}
                      >
                        <Image source={item.image} style={styles.face} />
                      </Pressable>
                    </Pressable>
                  </Pressable>
                );
              })}
              <Lottie
                style={styles.animation}
                source={item.animation1}
                autoPlay
                loop
              />
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
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Day;

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
    paddingRight: 30,
    paddingTop: 7,
  },
  dayContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
    top: -10,
    right: 82,
  },
  animation3: {
    position: "absolute",
    top: 450,
    left: 90,
  },
});
