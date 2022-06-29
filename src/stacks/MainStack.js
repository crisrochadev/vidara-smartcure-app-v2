import React,{useEffect,useState} from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Preload from "../screens/Preload"
import Login from "../screens/Login"
import Register from "../screens/Register"




const Stack = createNativeStackNavigator()


export default MainStack = () =>{
    
    return(
        <Stack.Navigator
            initialRouteName = "Login"
            screenOptions={{
                headerShown:false
            }}
        >
            <Stack.Screen name="Preload" component={Preload} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    )
}