import React from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  StyleSheet
} from "react-native";

import result from "../../../assets/images/Result/result.jpg";

const Result = ({ navigation, route }) => {
  const { data, score, totalQues } = route.params;
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={"#663199"}
        style="dark"
        barStyle="dark-content"
      />
      <Image style={styles.img} source={result} />
      <View
        style={{
          alignItems: "center",
          alignContent: "center",
          textAlign: "center",
          justifyContent: "center"
        }}
      >
        <Text style={styles.yourscore}>YOUR SCORE</Text>
        <View style={styles.scoreContainer}>
          <Text style={styles.score}>{score}</Text>
          <Text style={styles.totalQues}>/{totalQues}</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Quiz", { data: data })}
          style={styles.btnContainer}
        >
          <Text style={styles.btnText}>Try Again</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Room", { data: data })}
        >
          <Text style={styles.back}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#663199",
    height: "100%"
  },
  img: {
    width: "100%",
    height: "70%"
  },
  yourscore: {
    fontFamily: "ConcertOne",
    fontStyle: "normal",
    fontSize: 20,
    lineHeight: 16,
    textAlign: "center",
    color: "#FFFFFF"
  },
  scoreContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    textAlign: "center",
    justifyContent: "center",
    marginTop: 11
  },
  score: {
    fontFamily: "ConcertOne",
    fontStyle: "normal",
    fontSize: 64,
    lineHeight: 50,
    textAlign: "center",
    color: "#FD821C"
  },
  totalQues: {
    fontFamily: "ConcertOne",
    fontStyle: "normal",
    fontSize: 64,
    lineHeight: 50,
    textAlign: "center",
    color: "#FFFFFF"
  },
  btnContainer: {
    marginTop: 21,
    marginBottom: 19,
    paddingVertical: 7,
    paddingHorizontal: 60,
    backgroundColor: "#FD821C",
    borderRadius: 10,
    width: 236
  },
  btnText: {
    fontFamily: "ConcertOne",
    fontStyle: "normal",
    fontSize: 24,
    //lineHeight: 19,
    textAlign: "center",
    color: "#FFFFFF"
  },
  back: {
    fontFamily: "ConcertOne",
    fontStyle: "normal",
    fontSize: 20,
    lineHeight: 16,
    textAlign: "center",
    color: "#FFFFFF"
  }
});
