import React from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ScrollView
} from "react-native";
import { Shadow } from "react-native-shadow-2";
import { feed } from "../../common/data/feed";
import Artical from "./Artical";

const Feed = ({ navigation, route }) => {
  const onPress = () => {
    navigation.navigate("Article");
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {feed.map((artical) => {
          return (
            <Artical
              key={artical.id}
              image={artical.image}
              title={artical.title}
              navigation={navigation}
              route={route}
              onPress={onPress}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  headerText: {
    fontFamily: "ConcertOne",
    fontStyle: "normal",
    fontSize: 28,
    lineHeight: 22,
    color: "#808080",
    textAlign: "center"
  }
});
