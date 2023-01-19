import React, { useState } from "react";
import {
  Image,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  StatusBar
} from "react-native";

import user from "../../../assets/images/Quiz/user1.png";
import back from "../../../assets/images/Quiz/back.png";
import line from "../../../assets/images/Quiz/line.png";

const Question = ({
  navigation,
  route,
  no,
  question,
  totalQues,
  optionA,
  optionB,
  optionC,
  optionD,
  answer,
  onPress,
  color,
  score,
  setScore,
  data
}) => {
  const [slectedOp, setSelectedOp] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState({
    a: null,
    b: null,
    c: null,
    d: null
  });

  const [backgroundColor2, setBackgroundColor2] = useState({
    a: null,
    b: null,
    c: null,
    d: null
  });

  const handleOptionPress = (selectedOption) => {
    setSelectedOp(selectedOption);
    if (selectedOption == answer) {
      setBackgroundColor({ ...backgroundColor, [selectedOption]: "green" });
      setScore(score + 1);
    } else {
      setBackgroundColor({ ...backgroundColor, [selectedOption]: "red" });
      if (answer === "a") {
        setBackgroundColor2({ ...backgroundColor, a: "green" });
      } else if (answer === "b") {
        setBackgroundColor2({ ...backgroundColor, b: "green" });
      } else if (answer === "c") {
        setBackgroundColor2({ ...backgroundColor, c: "green" });
      } else if (answer === "d") {
        setBackgroundColor2({ ...backgroundColor, d: "green" });
      }
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={color} style="dark" barStyle="dark-content" />
      <View
        style={{ ...styles.headerQuestionContainer, backgroundColor: color }}
      >
        <View style={styles.headerContainer}>
          <View style={styles.headerLeft}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Room", { data: data })}
            >
              <Image style={styles.headerLeftImg} source={back} />
            </TouchableOpacity>
            <Text style={styles.headerHead}>QQQ</Text>
          </View>
          <View>
            <Image style={styles.headerRight} source={user} />
          </View>
        </View>

        <View style={styles.QuestionContainer}>
          <View style={styles.QuestionCounterContainer}>
            <Text style={styles.QuestionCounter}>{no}</Text>
            <Image style={styles.questionCounterImg} source={line} />
            <Text style={styles.QuestionCounter}>{totalQues}</Text>
          </View>
          <Text style={styles.Question}>{question}</Text>
        </View>
      </View>
      <View style={styles.optionBtnContainer}>
        <View>
          <TouchableOpacity
            disabled={slectedOp ? true : false}
            onPress={() => {
              setSelectedOp("a");
              handleOptionPress("a");
            }}
            style={
              slectedOp == "a"
                ? {
                    ...styles.selected,
                    //borderColor: color,
                    backgroundColor: backgroundColor.a
                  }
                : {
                    ...styles.optionContainer,
                    backgroundColor:
                      backgroundColor2.a != null
                        ? backgroundColor2.a
                        : "#1B1E22"
                  }
            }
          >
            <Text style={styles.optionText}>{optionA}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={slectedOp ? true : false}
            onPress={() => {
              setSelectedOp("b");
              handleOptionPress("b");
            }}
            style={
              slectedOp == "b"
                ? {
                    ...styles.selected,
                    //borderColor: color,
                    backgroundColor: backgroundColor.b
                  }
                : {
                    ...styles.optionContainer,
                    backgroundColor:
                      backgroundColor2.b != null
                        ? backgroundColor2.b
                        : "#1B1E22"
                  }
            }
          >
            <Text style={styles.optionText}>{optionB}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={slectedOp ? true : false}
            onPress={() => {
              setSelectedOp("c");
              handleOptionPress("c");
            }}
            style={
              slectedOp == "c"
                ? {
                    ...styles.selected,
                    //borderColor: color,
                    backgroundColor: backgroundColor.c
                  }
                : {
                    ...styles.optionContainer,
                    backgroundColor:
                      backgroundColor2.c != null
                        ? backgroundColor2.c
                        : "#1B1E22"
                  }
            }
          >
            <Text style={styles.optionText}>{optionC}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={slectedOp ? true : false}
            onPress={() => {
              setSelectedOp("d");
              handleOptionPress("d");
            }}
            style={
              slectedOp == "d"
                ? {
                    ...styles.selected,
                    //borderColor: color,
                    backgroundColor: backgroundColor.d
                  }
                : {
                    ...styles.optionContainer,
                    backgroundColor:
                      backgroundColor2.d != null
                        ? backgroundColor2.d
                        : "#1B1E22"
                  }
            }
          >
            <Text style={styles.optionText}>{optionD}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.center}>
          <TouchableOpacity
            disabled={slectedOp ? false : true}
            onPress={() => {
              onPress();
              setSelectedOp(null);
              setBackgroundColor({ a: null, b: null, c: null, d: null });
              setBackgroundColor2({ a: null, b: null, c: null, d: null });
            }}
            style={{
              ...styles.btnContainer,
              backgroundColor: slectedOp ? color : "grey"
            }}
          >
            <Text style={styles.btnText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Question;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    height: "1000%"
  },
  headerQuestionContainer: {
    paddingHorizontal: 17,
    paddingTop: 51,
    width: "100%"
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  headerLeft: {
    alignItems: "center",
    alignContent: "center",
    display: "flex",
    flexDirection: "row"
  },
  headerLeftImg: {
    width: 25,
    height: 25
  },
  headerHead: {
    fontFamily: "ConcertOne",
    fontStyle: "normal",
    fontSize: 24,
    lineHeight: 19,
    color: "#000000E5",
    marginLeft: 10
  },
  headerRight: {
    width: 30,
    height: 30
  },
  QuestionContainer: {
    paddingTop: 50,
    paddingBottom: 37
  },
  QuestionCounterContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    paddingBottom: 28
  },
  QuestionCounter: {
    fontFamily: "DMSerifText",
    fontStyle: "normal",
    fontSize: 24,
    lineHeight: 33,
    textAlign: "center",
    color: "#808080"
  },
  questionCounterImg: {
    width: 25,
    height: 2,
    marginHorizontal: 5
  },
  Question: {
    fontFamily: "DMSerifText",
    fontStyle: "normal",
    fontSize: 24,
    lineHeight: 33,
    textAlign: "center",
    color: "#000000E5",
    paddingHorizontal: "5%"
  },
  optionBtnContainer: {
    backgroundColor: "#030305",
    paddingHorizontal: 17,
    paddingVertical: 28
  },
  optionContainer: {
    backgroundColor: "#1B1E22",
    borderRadius: 20,
    paddingVertical: 11,
    paddingLeft: 28,
    marginVertical: 10,
    paddingRight: 10
  },
  selected: {
    borderWidth: 3,

    borderRadius: 20,
    paddingVertical: 11,
    paddingLeft: 28,
    marginVertical: 10,
    paddingRight: 10
  },
  optionText: {
    fontFamily: "ConcertOne",
    fontStyle: "normal",
    fontSize: 20,
    //lineHeight: 16,
    color: "#3A3C3C"
  },
  btnContainer: {
    paddingVertical: 8,
    paddingHorizontal: 28,
    width: 136,
    height: 44,
    borderRadius: 10,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    display: "flex",
    marginTop: 28
  },
  btnText: {
    fontFamily: "ConcertOne",
    fontStyle: "normal",
    fontSize: 24,
    //lineHeight: 16,
    color: "#ffffff",
    textAlign: "center"
  },
  center: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center"
  }
});
