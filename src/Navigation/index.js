import React from 'react'
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import IndexScreen from '../screens/indexScreen';


const Stack = createNativeStackNavigator();

const Navigation =()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          title:"Blog"
        }}
      >
        <Stack.Screen name="Index" component={IndexScreen}/>
      </Stack.Navigator>
      </NavigationContainer>
  )
}

export default Navigation;