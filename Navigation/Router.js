import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import HomeStack from "./HomeNavigation";
import AuthStack from "./AuthStack";
import CartStack from "./CartStack";
import ListStack from "./ListStack";
import UserStack from "./UserStack";
import { useState } from "react";

function Router() {
  const [user, setUser] = useState(true);
  const Tab = createBottomTabNavigator();

  return user ? (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home1") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Cart1") {
            iconName = focused ? "cart-plus" : "cart-plus";
          } else if (route.name === "List1") {
            iconName = focused ? "list-ul" : "list-ul";
          } else if (route.name === "User1") {
            iconName = focused ? "user" : "user";
          }

          // You can return any component that you like here!

          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Home1"
        component={HomeStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="List1"
        component={ListStack}
        options={{ headerTintColor: "green", headerTitle: "Interested" }}
      />
      <Tab.Screen
        name="Cart1"
        component={CartStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="User1"
        component={UserStack}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  ) : (
    <AuthStack />
  );
}

export default Router;
