import { UserScreen } from "../screen/index.js";

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function UserStack () {
  return (
    <Stack.Navigator screenOptions={{
      headerShown : false
    }}>
      <Stack.Screen name="User" component={UserScreen} />
    </Stack.Navigator>
  );
}