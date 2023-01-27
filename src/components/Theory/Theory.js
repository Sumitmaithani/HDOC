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
  Linking
} from "react-native";

const Theory = ({ navigation, route }) => {
  const [data, setData] = useState(
    route.params?.data ? route.params?.data : null
  );
  const [name, setName] = useState(
    route.params?.name ? route.params?.name : null
  );
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <StatusBar
        backgroundColor={"#fff"}
        style="dark"
        barStyle="dark-content"
      />
      <View style={styles.heyConatiner}>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.paraContainer}>
        {data.map((item, index) => {
          return (
            <View key={index}>
              {item.type == "text" ? (
                <Text style={styles.paraText}>{item.content}</Text>
              ) : item.type == "img" ? (
                <View>
                  <Image source={item.img} />
                </View>
              ) : (
                <View style={styles.paraSubContainer}>
                  <Text style={styles.paraSubhead}>{item.head}</Text>
                  <Text style={styles.para}>{item.content}</Text>
                </View>
              )}
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Theory;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 17,
    paddingTop: 11
  },
  heyConatiner: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    textAlign: "center",
    justifyContent: "center"
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
  paraContainer: {
    paddingTop: 10,
    paddingBottom: 50
  },
  paraText: {
    fontFamily: "RobotoRegular",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 24,
    color: "#3c3c3c",
    marginBottom: 20
  },
  paraSubContainer: {
    paddingBottom: 15
  },
  paraSubhead: {
    fontFamily: "ConcertOne",
    fontStyle: "normal",
    fontSize: 18,
    //lineHeight: 24,
    color: "#3c3c3c"
  },
  para: {
    paddingLeft: 0,
    fontFamily: "RobotoRegular",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 24,
    color: "#3c3c3c"
  }
});
