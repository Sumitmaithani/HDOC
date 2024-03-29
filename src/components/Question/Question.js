import React, { useState } from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Linking,
  SafeAreaView,
} from "react-native";

const Question = ({ navigation, route }) => {
  const [data, setData] = useState(
    route.params?.data ? route.params?.data : null
  );

  const [name, setName] = useState(
    route.params?.name ? route.params?.name : null
  );

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <StatusBar
          backgroundColor={"#fff"}
          style="dark"
          barStyle="dark-content"
        />
        <View style={styles.heyConatiner}>
          <Text style={styles.hey}>Important Questions</Text>
          <Text style={styles.name}>Of {name}</Text>
        </View>
        <View style={styles.heyConatiner}></View>
        <View style={{ paddingBottom: 30 }}>
          {data.map((item) => {
            return (
              <TouchableOpacity
                key={item.no}
                onPress={() => {
                  Linking.openURL(item.link);
                }}
                style={styles.quesConatiner}
              >
                <Text style={styles.para}>
                  {item.no}
                  {". "}
                </Text>
                <Text style={styles.paraText}>{item.question}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Question;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 17,
    paddingTop: 25,
  },
  heyConatiner: {
    display: "flex",
    //flexDirection: "row",
    paddingRight: 17,
    //alignItems: "center",
    //alignContent: "center",
    //marginHorizontal: 10
  },
  quesConatiner: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    paddingRight: 17,
    marginBottom: 10,
  },
  hey: {
    fontFamily: "ConcertOne",
    fontStyle: "normal",
    fontSize: 32,
    color: "#000000D4",
  },
  name: {
    fontFamily: "ConcertOne",
    fontStyle: "normal",
    fontSize: 32,
    color: "#6B45BC",
  },
  para: {
    fontFamily: "RobotoRegular",
    fontStyle: "normal",
    fontSize: 16,
    color: "#3c3c3c",
  },
  paraText: {
    fontFamily: "RobotoRegular",
    fontStyle: "normal",
    fontSize: 16,
    textDecorationLine: "underline",
    marginLeft: 3,
    color: "#6B45BC",
  },
});
