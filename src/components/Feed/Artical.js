import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";

const Artical = ({ navigation, route, image, title,onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={image} style={styles.img} />
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{title}</Text>
      </View>
    </TouchableOpacity>
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
    textAlign: "center",
    marginVertical: 14
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
  }
});
