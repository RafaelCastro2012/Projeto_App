import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import MorangodoAmor from "./src/screens/MorangodoAmor";
import { View, Text } from 'react-native';
import MainNavigation from './src/navigator/MainNavigation';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainNavigation} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
    //   <Text>Hello World</Text>
    // </View>
  )
};