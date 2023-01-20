import React,{useState} from "react";
import { Text } from "react-native";
import Art from "./Art";

const Article = ({ navigation, route }) => {
  const [data, setData] = useState(
    route.params?.data ? route.params?.data : null
  );

  return <Art navigation={navigation} route={route} data={data} />;
};

export default Article;
