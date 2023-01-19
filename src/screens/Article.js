import React from "react";
import Article from "../components/Article/Article";

const ArticleScreen = ({ navigation, route }) => {
  return <Article navigation={navigation} route={route} />;
};

export default ArticleScreen;
