import React from "react";
import Quiz from "../components/Quiz/Quiz";

const QuizScreen = ({ navigation, route }) => {
  return <Quiz navigation={navigation} route={route} />;
};

export default QuizScreen;
