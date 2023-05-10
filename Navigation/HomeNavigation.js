import { HomeScreen ,BellScreen,UserScreen,AllScreen,BuyScreen,ListScreen,CartScreen} from "../screen/index.js";

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function HomeStack () {
  return (
    <Stack.Navigator screenOptions={{
      headerShown : false
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Bell" component={BellScreen} />
      <Stack.Screen name="All" component={AllScreen} />
      <Stack.Screen name="BuyScreen" component={BuyScreen} />
      <Stack.Screen name="User" component={UserScreen} />
      <Stack.Screen name="CartScreen"  component={CartScreen} />

    </Stack.Navigator>
  );
}