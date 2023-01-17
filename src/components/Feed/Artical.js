import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";

import { Shadow } from "react-native-shadow-2";

import article1 from "../../../assets/images/Feed/fanng.png";

const Artical = () => {
  return (
    <Shadow>
      <View style={styles.container}>
        <Image source={article1} style={styles.img} />
        <View style={styles.headerContainer}>
          <Text style={styles.header}>
            How To Get Into FAANG Companies As A Fresher
          </Text>
        </View>
      </View>
    </Shadow>
  );
};

export default Artical;

const styles = StyleSheet.create({
  container: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderWidth: 1,
    borderColor: "#808080",
    borderRadius: 20,
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center"
  },
  img: {
    width: 338,
    height: 145,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20
  },
  headerContainer: {
    marginVertical: 18,
    paddingHorizontal: 9
  },
  header: {
    fontFamily: "ConcertOne",
    fontStyle: "normal",
    fontSize: 20,
    lineHeight: 20,
    color: "#000000CC"
    //marginVertical: 18,
    //marginHorizontal: 9
  }
});
