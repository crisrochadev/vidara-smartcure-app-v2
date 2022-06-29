import React from "react";
import {View,Text} from "react-native"
import LogoIcon from "../assets/images/logo.svg"
import {Button,useTheme,ActivityIndicator} from "react-native-paper"

export default Preload = () =>{
    const {colors} = useTheme()
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <LogoIcon width="50%" height="160px"/>
            <ActivityIndicator animating={true} size="larger" color={colors.primary} />
        </View>
    )
}