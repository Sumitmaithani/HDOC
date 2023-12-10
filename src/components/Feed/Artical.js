import React from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const Artical = ({ navigation, route, image, title, onPress }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <Image source={image} style={styles.img} />
        <View style={styles.headerContainer}>
          <Text style={styles.header}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
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
    marginVertical: 10,
    overflow: "hidden",
  },
  img: {
    width: Dimensions.get("window").width,
    height: 145,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  headerContainer: {
    marginVertical: 18,
    paddingHorizontal: 9,
  },
  header: {
    fontFamily: "ConcertOne",
    fontStyle: "normal",
    fontSize: 20,
    lineHeight: 20,
    color: "#000000CC",
  },
});
