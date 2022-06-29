import React from "react";
import { Button, useTheme } from "react-native-paper";

export default ButtonDefault = (props) => {
  const { colors } = useTheme();
  return (
    <Button
      onPress={props.login}
      icon=""
      mode="contained"
      loading={props.loading}
      style={{ width: "80%", marginTop: 20 }}
      labelStyle={{
        fontSize: 20,
        color: colors.background,
        fontWeight: "bold",
      }}
    >
      {props.loading ? "" : props.text}
    </Button>
  );
};
