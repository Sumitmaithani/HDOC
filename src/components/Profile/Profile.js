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

import settings from "../../../assets/images/Profile/settings.png";
import edit from "../../../assets/images/Profile/edit.png";
import adduser from "../../../assets/images/Profile/add-user.png";
import cup from "../../../assets/images/Profile/cup.png";
import thunder from "../../../assets/images/Profile/thunder.png";
import fire from "../../../assets/images/Profile/fire.png";
import medal from "../../../assets/images/Profile/bronze-medal.png";

import avatar from "../../../assets/images/Home/logo.jpg";
import Statistics from "./Statistics";

const Profile = ({ navigation, route }) => {
  return (
    <ScrollView>
      <View style={styles.header}>
        <Text style={styles.headerText}>Profile</Text>
        <Image style={styles.headerLogo} source={settings} />
      </View>
      <View style={styles.userDetails}>
        <View style={styles.userContainer}>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Sumit Maithani</Text>
            <Text style={styles.userSubname}>@sumitmaithani</Text>
            <Text style={styles.userSubname}>Joined October 2022</Text>
          </View>
          <View style={styles.userAvatar}>
            <Image style={styles.userAvatarPhoto} source={avatar} />
            <Image style={styles.userAvatarEdit} source={edit} />
          </View>
        </View>
        <View style={styles.userFollower}>
          <Text style={styles.userFollowerText}>0 Following</Text>
          <Text style={{ ...styles.userFollowerText, paddingLeft: 15 }}>
            0 Followers
          </Text>
        </View>
        <Shadow>
          <TouchableOpacity style={styles.button}>
            <Image style={styles.buttonLogo} source={adduser} />
            <Text style={styles.buttonText}>ADD FRIENDS</Text>
          </TouchableOpacity>
        </Shadow>
      </View>
      <View style={styles.statisticsContainer}>
        <Text style={styles.heading}>Statistics</Text>
        <View style={styles.grid}>
          <View style={styles.grid12}>
            <Statistics
              style={styles.grid1}
              img={fire}
              text1="0"
              text2="Day streak    "
            />
            <Statistics
              style={styles.grid2}
              img={thunder}
              text1="0"
              text2="Total XP      "
            />
          </View>
          <View style={styles.grid34}>
            <Statistics
              style={styles.grid3}
              img={medal}
              text1="Bronze"
              text2="Current League"
            />
            <Statistics
              style={styles.grid4}
              img={cup}
              text1="0"
              text2="Top 3 Finishes"
            />
          </View>
        </View>
        <Text style={styles.heading1}>Achievements</Text>
        <Text style={styles.heading2}>No Achievements</Text>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {},
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 35,
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "#808080",
    paddingBottom: 21
  },
  headerText: {
    fontFamily: "ConcertOne",
    fontStyle: "normal",
    fontSize: 28,
    lineHeight: 22,
    color: "#808080",
    textAlign: "center",
    marginTop: 15
  },
  headerLogo: {
    width: 42,
    height: 42,
    left: Dimensions.get("window").width - 50,
    top: 3,
    position: "absolute"
  },
  userDetails: {
    paddingHorizontal: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: "#808080",
    paddingBottom: 29
  },
  userContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20
  },
  userInfo: {},
  userName: {
    fontFamily: "ConcertOne",
    fontStyle: "normal",
    fontSize: 24,
    lineHeight: 19,
    color: "#000000",
    paddingVertical: 5
  },
  userSubname: {
    fontFamily: "ConcertOne",
    fontStyle: "normal",
    fontSize: 19,
    lineHeight: 17.5,
    color: "#808080",
    paddingVertical: 5
  },
  userAvatar: {},
  userAvatarPhoto: {
    width: 90,
    height: 90,
    borderRadius: 100
  },
  userAvatarEdit: {
    width: 30,
    height: 30,
    position: "absolute",
    right: 0
  },
  userFollower: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20
  },
  userFollowerText: {
    fontFamily: "ConcertOne",
    fontStyle: "normal",
    fontSize: 16,
    color: "#3474E8",
    marginTop: 20
  },
  button: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 13,
    width: Dimensions.get("window").width - 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#808080"
  },
  buttonText: {
    fontFamily: "ConcertOne",
    fontStyle: "normal",
    fontSize: 20,
    lineHeight: 16,
    color: "#3474E8"
  },
  buttonLogo: {
    width: 30,
    height: 30,
    marginRight: 8
  },
  statisticsContainer: {
    paddingHorizontal: 12,
    paddingTop: 21,
    paddingBottom: 16
  },
  heading: {
    fontFamily: "ConcertOne",
    fontStyle: "normal",
    fontSize: 24,
    lineHeight: 19,
    color: "#000000D4"
  },
  grid: {
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingTop: 5
  },
  grid12: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 15
  },
  grid34: {
    display: "flex",
    flexDirection: "row"
  },
  heading1: {
    fontFamily: "ConcertOne",
    fontStyle: "normal",
    fontSize: 24,
    lineHeight: 19,
    color: "#000000D4",
    marginTop: 20
  },
  heading2: {
    fontFamily: "ConcertOne",
    fontStyle: "normal",
    fontSize: 17,
    lineHeight: 20,
    color: "#808080",
    textAlign: "center",
    marginTop: 40
  }
});
