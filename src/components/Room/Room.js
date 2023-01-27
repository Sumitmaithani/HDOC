import React, { useState, useEffect } from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  StatusBar,
  TouchableOpacity
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import house from "../../../assets/images/Room/house.jpg";
import theory from "../../../assets/images/Room/theory.png";
import question from "../../../assets/images/Room/question.png";
import quiz from "../../../assets/images/Room/quiz.png";

const Room = ({ navigation, route }) => {
  const [data, setData] = useState(
    route.params?.data ? route.params?.data : null
  );

  const [name, setName] = useState(null);

  useEffect(() => {
    const fetchImg = async () => {
      let userData = await AsyncStorage.getItem("user");
      let UserImage = JSON.parse(userData);
      setName(UserImage?.given_name);
    };
    fetchImg();
  }, []);

  //console.log(data);
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <StatusBar
        backgroundColor={"#fff"}
        style="dark"
        barStyle="dark-content"
      />
      <View style={styles.heyConatiner}>
        <Text style={styles.hey}>Hey, </Text>
        <Text style={styles.name}>{name}</Text>
      </View>
      <Image style={styles.house} source={house} />
      <View>
        <Text style={styles.day}>{data?.day}</Text>
        <View style={styles.theoryQuesContainer}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Theory", {
                data: data.theory,
                name: data.name
              })
            }
            style={styles.theoryContainer}
          >
            <Image style={styles.theoryImg} source={theory} />
            <Text style={styles.theory}>Theory</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Question", {
                data: data.question,
                name: data.name
              })
            }
            style={styles.questionContainer}
          >
            <Image style={styles.questionImg} source={question} />
            <Text style={styles.question}>Questions</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Quiz", { data: data });
          }}
          style={styles.quizContainer}
        >
          <Text style={styles.quiz}>Quiz</Text>
          <Image style={styles.quizImg} source={quiz} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Room;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 17,
    paddingTop: 15
  },
  heyConatiner: {
    display: "flex",
    flexDirection: "row"
  },
  hey: {
    fontFamily: "ConcertOne",
    fontStyle: "normal",
    fontSize: 32,
    color: "#000000D4"
  },
  name: {
    fontFamily: "ConcertOne",
    fontStyle: "normal",
    fontSize: 32,
    color: "#6B45BC"
  },
  house: {
    borderRadius: 20,
    width: Dimensions.get("window").width - 34,
    height: 206,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "column",
    alignContent: "center",
    marginTop: 12,
    marginBottom: 27
  },
  day: {
    fontFamily: "ConcertOne",
    fontStyle: "normal",
    fontSize: 24,
    color: "#000000D4",
    marginBottom: 12
  },
  theoryQuesContainer: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 12
  },
  theoryContainer: {
    backgroundColor: "#875DAF",
    borderRadius: 20,
    width: 152,
    height: 142,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    alignContent: "center",
    marginRight: 10
  },
  theoryImg: {
    width: 90,
    height: 90
  },
  theory: {
    fontFamily: "ConcertOne",
    fontStyle: "normal",
    fontSize: 24,
    color: "#FFFFFF",
    marginTop: 6
  },
  questionContainer: {
    backgroundColor: "#F98FDB",
    borderRadius: 20,
    width: 152,
    height: 142,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    alignContent: "center",
    marginLeft: 10
  },
  questionImg: {
    width: 90,
    height: 90
  },
  question: {
    fontFamily: "ConcertOne",
    fontStyle: "normal",
    fontSize: 24,
    color: "#FFFFFF",
    marginTop: 6
  },
  quizContainer: {
    backgroundColor: "#FF9518",
    borderRadius: 20,
    height: 122,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    alignContent: "center",
    paddingHorizontal: 45
  },
  quizImg: {
    width: 90,
    height: 90
  },
  quiz: {
    fontFamily: "ConcertOne",
    fontStyle: "normal",
    fontSize: 36,
    lineHeight: 28,
    color: "#FFFFFF"
  }
});
