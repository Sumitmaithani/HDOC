import { StatusBar } from "expo-status-bar";
import React, { useRef } from "react";
import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

import img1 from "../../../assets/images/Tour/Tour-1.jpg";
import img2 from "../../../assets/images/Tour/Tour-2.jpg";
import img3 from "../../../assets/images/Tour/Tour-3.jpg";
import Button from "../../common/Button";

const Tour = ({ navigation, route }) => {
  let slider = useRef();

  // the list of items in different slides
  const slideItemList = [
    {
      key: 1,
      image: img1,
      title: "Code every day, improve every way!",
      para: "Join the 100 days of coding challenge and watch your skills evolve. With each day of coding, you'll grow more confident and capable as a developer.",
      btnColor: "#875DAF"
    },
    {
      key: 2,
      image: img2,
      title: "A hundred days of coding, a world of possibility!",
      para: "Take the first step towards a successful career in tech with 100 days of code. Learn to code like a pro and unlock endless opportunities.",
      btnColor: "#FD821C"
    },
    {
      key: 3,
      image: img3,
      title: "100 days of coding for a lifetime of innovation",
      para: "Embrace the power of code with 100 days of dedicated learning. Master the language of the future and open doors to endless possibilities.",
      btnColor: "#875DAF"
    }
  ];

  const renderItem = ({ item }) => {
    return (
      <>
        <StatusBar backgroundColor="#663199" style="light" />
        <View>
          <Image source={item?.image} style={styles.image} />
          <View style={styles.container}>
            <Text style={styles.heading}>{item.title}</Text>
            <Text style={styles.para}>{item.para}</Text>
            <View style={styles.button}>
              <Button
                text={"Get Started"}
                onPress={() => {
                  item.key === 3
                    ? navigation.navigate("Auth")
                    : slider?.goToSlide(item.key);
                }}
                backgroundColor={item.btnColor}
              />
            </View>
          </View>
        </View>
      </>
    );
  };

  const renderNextButton = () => {
    return (
      <View>
        <Text style={styles.next}>Next</Text>
      </View>
    );
  };

  const renderPrevButton = () => {
    return (
      <View>
        <Text style={styles.next}>Prev</Text>
      </View>
    );
  };

  const renderDoneButton = () => {
    return (
      <View>
        <Text style={styles.next}>Next</Text>
      </View>
    );
  };

  const onDone = () => {
    navigation.navigate("Auth");
  };

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={slideItemList}
      showPrevButton={true}
      renderPrevButton={renderPrevButton}
      renderDoneButton={renderDoneButton}
      renderNextButton={renderNextButton}
      onDone={onDone}
      dotStyle={styles.paginationDots}
      activeDotStyle={{
        marginTop: 2000,
        backgroundColor: "#ffffff"
      }}
      ref={(ref) => (slider = ref)}
    />
  );
};

export default Tour;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "69%",
    resizeMode: "cover",
    overflow: "hidden"
  },
  container: {
    marginTop: 12,
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    padding: 14,
    width: "100%",
    height: "25%"
  },
  heading: {
    fontFamily: "DMSerifText",
    fontStyle: "normal",
    fontSize: 26,
    textAlign: "center",
    color: "#000000"
  },
  para: {
    fontFamily: "RobotoRegular",
    fontStyle: "normal",
    fontSize: 13,
    lineHeight: 18,
    textAlign: "center",
    color: "#808080",
    marginTop: 18
  },
  button: {
    marginTop: 16
  },
  next: {
    fontFamily: "ConcertOne",
    fontStyle: "normal",
    fontSize: 18,
    textAlign: "center",
    color: "#875DAF",
    marginTop: 25
  },
  paginationDots: {
    display: "none"
  }
});
