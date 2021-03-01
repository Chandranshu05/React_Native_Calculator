import HomeScreen from 'src/Screens/Home/HomeScreen';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CalculatorScreen from 'src/Screens/Calculator/CalculatorScreen';

const AuthStack = createStackNavigator();

function AuthStackNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Calculator"
        component={CalculatorScreen}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
}

export default AuthStackNavigator;
