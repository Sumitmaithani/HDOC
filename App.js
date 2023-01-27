import React, { useCallback, useEffect, useState } from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Tour from "./src/screens/Tour";
import Auth from "./src/screens/Auth";
import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";
import Feed from "./src/screens/Feed";
import Room from "./src/screens/Room";
import Quiz from "./src/screens/Quiz";
import Result from "./src/screens/Result";
import Article from "./src/screens/Article";
import Theory from "./src/screens/Theory";
import Question from "./src/screens/Question";
import Settings from "./src/screens/Settings";

import home from "./assets/images/Common/BottomNav/home.png";
import profile from "./assets/images/Common/BottomNav/profile.png";
import feed from "./assets/images/Common/BottomNav/feed.png";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const [appIsReady, setAppIsReady] = useState(false);
  const [initialRouteName, setInitialRouteName] = useState("Tour");

  const [fontsLoaded] = useFonts({
    ConcertOne: require("./assets/fonts/ConcertOne-Regular.ttf"),
    DMSerifText: require("./assets/fonts/DMSerifText-Regular.ttf"),
    RobotoRegular: require("./assets/fonts/Roboto-Regular.ttf")
  });

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(Entypo.font);
        fontsLoaded;
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    const fetchData = async () => {
      let userData = await AsyncStorage.getItem("user");
      let user = JSON.parse(userData);
      console.log("user data ", user);
      // if (user != null || user != "") {
      //   setInitialRouteName("MainTab");
      // }
      if (user?.length > 0) {
        setInitialRouteName("MainTab");
      }
    };
    fetchData();

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  function MainTab() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "Home") {
              return (
                <TouchableOpacity
                  disabled={route.name == "Home" ? true : false}
                  style={focused ? styles.imgContainer : null}
                >
                  <Image style={styles.img} source={home} />
                </TouchableOpacity>
              );
            } else if (route.name === "Profile") {
              return (
                <TouchableOpacity
                  disabled={route.name == "Profile" ? true : false}
                  style={focused ? styles.imgContainer : null}
                >
                  <Image style={styles.img} source={profile} />
                </TouchableOpacity>
              );
            } else {
              return (
                <TouchableOpacity
                  disabled={route.name == "Feed" ? true : false}
                  style={focused ? styles.imgContainer : null}
                >
                  <Image style={styles.img} source={feed} />
                </TouchableOpacity>
              );
            }
          },
          tabBarActiveTintColor: styles.imgContainer,
          tabBarInactiveTintColor: "gray"
        })}
      >
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: { height: 80 }
          }}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: { height: 80 }
          }}
          name="Profile"
          component={Profile}
        />
        <Tab.Screen
          options={{
            title: "Feed",
            headerStyle: {
              backgroundColor: "#ffffff",
              borderBottomWidth: 0.5,
              borderBottomColor: "#808080"
            },
            headerTintColor: "#808080",
            headerTitleStyle: {
              fontWeight: "bold",
              textAlign: "center",
              justifyContent: "center",
              fontSize: 28
            },
            headerTitleAlign: "center",
            tabBarShowLabel: false,
            tabBarStyle: { height: 80 }
          }}
          name="Feed"
          component={Feed}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Stack.Navigator initialRouteName={initialRouteName}>
        <Stack.Screen
          name="Tour"
          component={Tour}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainTab"
          component={MainTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Room"
          component={Room}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Quiz"
          component={Quiz}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Result"
          component={Result}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Article"
          component={Article}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Theory"
          component={Theory}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Question"
          component={Question}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  imgContainer: {
    borderWidth: 2,
    borderColor: "#104FC1C9",
    borderRadius: 10,
    backgroundColor: "#4F8DFF",
    padding: 4
  },
  img: {
    width: 45,
    height: 45
  }
});
