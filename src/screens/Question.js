import React from "react";
import Question from "../components/Question/Question";

const QuestionScreen = ({ navigation, route }) => {
  return <Question navigation={navigation} route={route} />;
};

export default QuestionScreen;
