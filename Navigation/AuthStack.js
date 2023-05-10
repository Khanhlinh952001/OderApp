import { SignUp,Login } from "../screen/index.js";

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function AuthStack () {
  return (
    <Stack.Navigator screenOptions={{
      headerShown : false
    }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />   
    </Stack.Navigator>
  );
}