import { CartScreen } from "../screen/index.js";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function CartStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown : false
    }}>
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
}
