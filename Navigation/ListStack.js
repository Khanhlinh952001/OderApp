import { ListScreen,BuyScreen } from "../screen/index.js";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function ListStack () {
  return (
    <Stack.Navigator screenOptions={{
      headerShown : false
    }}>
      <Stack.Screen name="List" component={ListScreen} />
      <Stack.Screen name="BuyScreen" component={BuyScreen} />

    </Stack.Navigator>
  );
}