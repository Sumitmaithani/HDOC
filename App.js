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

import Tour from "./src/screens/Tour";
import Auth from "./src/screens/Auth";
import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";
import Feed from "./src/screens/Feed";

import home from "./assets/images/Common/BottomNav/home.png";
import profile from "./assets/images/Common/BottomNav/profile.png";
import feed from "./assets/images/Common/BottomNav/feed.png";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const [appIsReady, setAppIsReady] = useState(false);

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
            headerShown: false,
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
      <Stack.Navigator initialRouteName="Tour">
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