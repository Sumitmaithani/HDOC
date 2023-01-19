import React from "react";
import { View, StyleSheet, Image, Text, Dimensions } from "react-native";

import { Shadow } from "react-native-shadow-2";

const Statistics = ({ img, text1, text2 }) => {
  return (
    // <Shadow style={{ marginRight: 10, marginLeftt: 10 }}>
      <View style={{...styles.container, marginRight: 10, marginLeftt: 10 }}>
        <View>
          <Image source={img} style={styles.containerImg} />
        </View>
        <View>
          <Text style={styles.containerText1}>{text1}</Text>
          <Text style={styles.containerText2}>{text2}</Text>
        </View>
      </View>
    // </Shadow>
  );
};

export default Statistics;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    display: "flex",
    flexDirection: "row",
    width: Dimensions.get("window").width / 2 - 25,
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "#C0C0C0",
    borderRadius: 20,
    height: 70
    // margin: 10
  },
  containerImg: {
    width: 25,
    height: 24,
    marginRight: 6
  },
  containerText1: {
    fontFamily: "ConcertOne",
    fontStyle: "normal",
    fontSize: 20,
    lineHeight: 16,
    color: "#000000D4"
  },
  containerText2: {
    fontFamily: "ConcertOne",
    fontStyle: "normal",
    fontSize: 12,
    lineHeight: 20,
    color: "#808080"
  }
});
