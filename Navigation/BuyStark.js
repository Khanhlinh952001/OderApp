import { CartScreen ,BuyScreen} from "../screen/index.js";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function BuyStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown : false
    }}>
      <Stack.Screen name="BuyScreen" component={BuyScreen} />
        
      <Stack.Screen name="CartScreen" component={CartScreen} />
    </Stack.Navigator>
  );
}