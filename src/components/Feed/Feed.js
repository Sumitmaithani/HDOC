import React from "react";
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
import Artical from "./Artical";

const Feed = ({ navigation, route }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Feed</Text>
      </View>
      <View style={styles.container}>
        <Artical />
      </View>
    </ScrollView>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 28
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 35,
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "#808080",
    paddingBottom: 21
  },
  headerText: {
    fontFamily: "ConcertOne",
    fontStyle: "normal",
    fontSize: 28,
    lineHeight: 22,
    color: "#808080",
    textAlign: "center",
    marginTop: 15
  }
});
