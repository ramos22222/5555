import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Login from "./Paginas/Login";
import Cadastro from "./Paginas/Cadastro";
import Principal from "./Paginas/Principal";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Principal" component={Principal} />
        <Stack.Screen name="Cadastro" component={Cadastro} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

