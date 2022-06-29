import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./src/stacks/MainStack";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

const theme = {
  ...DefaultTheme,
  roundness: 5,
  colors: {
    background: "#FFFBDB",
    primary: "#BDB2FF",
    accent: "#FFC6FF",
    danger: "#F30A5E",
    sucess: "#A0C4FF",
    surface :"#3B5998",
    onSurface :"#FA3913"
  }
};
export default () => {
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <MainStack />
      </PaperProvider>
    </NavigationContainer>
  );
};
