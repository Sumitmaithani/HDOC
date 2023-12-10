import React, { useState } from "react";
import {
  Image,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
} from "react-native";

import article from "../../../assets/images/Feed/article1.png";

const Art = ({ navigation, route, data }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <StatusBar
        backgroundColor={data.color}
        style="dark"
        barStyle="light-content"
      />
      <View
        style={{
          ...styles.headerQuestionContainer,
          backgroundColor: data.color,
        }}
      >
        <View style={styles.headerContainer}>
          <View style={styles.headerLeft}>
            <Text style={styles.headerHead}>HDOC</Text>
            <Text style={styles.headerSubHead}> Feed</Text>
          </View>
        </View>
        <View style={styles.QuestionContainer}>
          <Text style={styles.Question}>{data.title}</Text>
          <View style={styles.QuestionCounterContainer}>
            <Image
              style={{
                ...styles.questionCounterImg,
                width: data.width,
                height: data.height,
              }}
              source={data.image}
            />
          </View>
        </View>
      </View>
      <View style={styles.paraContainer}>
        {data.article.map((item, index) => {
          return (
            <View key={index}>
              {item.substring(0, 2) == "/h" ? (
                <Text style={styles.paraSubhead}>{item.replace("/h", "")}</Text>
              ) : (
                <View style={styles.paraSubContainer}>
                  <Text style={styles.para}>{item}</Text>
                </View>
              )}
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Art;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "1000%",
  },
  headerQuestionContainer: {
    paddingHorizontal: 17,
    paddingTop: 11,
    width: "100%",
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerLeft: {
    alignItems: "center",
    alignContent: "center",
    display: "flex",
    flexDirection: "row",
  },
  headerLeftImg: {
    width: 25,
    height: 25,
  },
  headerHead: {
    fontFamily: "ConcertOne",
    fontStyle: "normal",
    fontSize: 32,
    //lineHeight: 19,
    color: "#E2DB06",
    marginLeft: 10,
  },
  headerSubHead: {
    fontFamily: "ConcertOne",
    fontStyle: "normal",
    fontSize: 22,
    //lineHeight: 19,
    color: "#ffffff",
    marginLeft: 0,
    opacity: 0.8,
  },
  headerRight: {
    width: 30,
    height: 30,
  },
  QuestionContainer: {
    paddingTop: 80,
    paddingBottom: 27,
  },
  QuestionCounterContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    paddingBottom: 28,
  },
  QuestionCounter: {
    fontFamily: "DMSerifText",
    fontStyle: "normal",
    fontSize: 24,
    lineHeight: 33,
    textAlign: "center",
    color: "#808080",
  },
  questionCounterImg: {
    // width: 150,
    // height: 40,
    marginHorizontal: 20,
    marginTop: 40,
  },
  Question: {
    fontFamily: "DMSerifText",
    fontStyle: "normal",
    fontSize: 38,
    //lineHeight: 33,
    textAlign: "center",
    color: "#ffffff",
    paddingHorizontal: "5%",
  },
  paraContainer: {
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  paraText: {
    fontFamily: "RobotoRegular",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 24,
    color: "#3c3c3c",
    marginBottom: 20,
    // marginLeft: 3,
    // opacity: 0.8
  },
  paraSubContainer: {
    // paddingLeft: 15,
    // paddingRight: 10,
    paddingBottom: 15,
  },
  paraSubhead: {
    fontFamily: "ConcertOne",
    fontStyle: "normal",
    fontSize: 18,
    //lineHeight: 24,
    color: "#3c3c3c",
  },
  para: {
    paddingLeft: 0,
    fontFamily: "RobotoRegular",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 24,
    color: "#3c3c3c",
  },
});
