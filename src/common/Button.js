import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const Button = ({ onPress, text, backgroundColor }) => {
  return (
    <View style={styles.center}>
      <TouchableOpacity
        style={[styles.container, { backgroundColor: backgroundColor }]}
        onPress={onPress}
      >
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex"
  },
  container: {
    borderRadius: 50,
    paddingHorizontal: 31,
    paddingVertical: 5,
    maxWidth: 132
  },
  text: {
    fontFamily: "DMSerifText",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center",
    color: "#FFFFFF"
  }
});
