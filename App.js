import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome } from "@expo/vector-icons";
import HomeScreen from "./Component/Home/HomeScreen.js";
import CartScreen from "./Component/Cart/CartScreen.js";
import UserScreen from "./Component/User/UserScreen.js";
import ListScreen from "./Component/List/ListScreen.js";
import SearchScreen from "./Component/Home/Search/SearchScreen.js";
import BellScreen from "./Component/Home/Bell/BellScreen.js";
import BuyScreen from "./Component/Home/Buy/BuyScreen.js";
import AllScreen from "./Component/Home/SeeAll/AllScreen.js";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";

          } else if (route.name === "Cart") {
            iconName = focused ? "cart-plus" : "cart-plus";

          } else if (route.name === "List") {
            iconName = focused ? "list-ul" : "list-ul";

          } else if (route.name === "User") {
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
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="List"
        component={ListScreen}
    options={{ headerTintColor:"green" ,headerTitle:'Interested' }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="User"
        component={UserScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShow: false }}>
        <Stack.Screen
          name="HomeStack"
          component={HomeTabs}
          options={{ headerShown: false }}
        />

<Stack.Screen
          name="User"
          component={UserScreen}
          options={{ headerShown: false }}
        />

<Stack.Screen
          name="List"
          component={ListScreen}
          options={{  headerTitle:'Notification',headerTintColor:'black'  }}
        />

       <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ headerShown: false }}
        />

<Stack.Screen
          name="bell"
          component={BellScreen}
          options={{ headerTitle:'Notification',headerTintColor:'black' }}
        />

<Stack.Screen
          name="buy"
          component={BuyScreen}
          options={{  headerTitle:'Buy',headerTintColor:"black" }}
        />

<Stack.Screen
          name="All"
          component={AllScreen}
          options={{ headerTitle:'All',headerTintColor:"black" }}
        />

<Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{ headerTitle:'Cart',headerTintColor:"black" }}
        />



        {/* <Stack.Screen name="Ok" component={Ok} options={{ headerTitle: "" }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
