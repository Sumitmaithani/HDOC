import React, { useState, useCallback, useEffect } from "react";
import { View, ScrollView } from "react-native";
import Question from "./Question";

const Quiz = ({ navigation, route }) => {
  const [data, setData] = useState(
    route.params?.data ? route.params?.data?.quiz : null
  );

  const totalQues = data?.length;
  const [index, setIndex] = useState(0);
  const [no, setNo] = useState(data[index]?.no);
  const [question, setQuestion] = useState(data[index]?.question);
  const [optionA, setOptionA] = useState(data[index]?.optionA);
  const [optionB, setOptionB] = useState(data[index]?.optionB);
  const [optionC, setOptionC] = useState(data[index]?.optionC);
  const [optionD, setOptionD] = useState(data[index]?.optionD);
  const [answer, setAnswer] = useState(data[index]?.answer);
  const [color, setColor] = useState(data[index]?.color);
  const [score, setScore] = useState(0);

  const handleNext = () => {
    if (index + 1 == totalQues) {
      navigation.navigate("Result", {
        data: data,
        score: score,
        totalQues: totalQues
      });
      setIndex(0);
      setScore(0);
    } else {
      setIndex(index + 1);
    }
  };

  useEffect(() => {
    setNo(data[index]?.no);
    setQuestion(data[index]?.question);
    setOptionA(data[index]?.optionA);
    setOptionB(data[index]?.optionB);
    setOptionC(data[index]?.optionC);
    setOptionD(data[index]?.optionD);
    setAnswer(data[index]?.answer);
    setColor(data[index]?.color);
  }, [index]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "#000000" }}
    >
      <Question
        navigation={navigation}
        no={no}
        question={question}
        optionA={optionA}
        optionB={optionB}
        optionC={optionC}
        optionD={optionD}
        answer={answer}
        color={color}
        totalQues={totalQues}
        score={score}
        setScore={setScore}
        onPress={handleNext}
        data={data}
      />
    </ScrollView>
  );
};

export default Quiz;
