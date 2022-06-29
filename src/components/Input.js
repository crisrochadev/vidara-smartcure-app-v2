import React, { useState } from "react";
import { Text, TextInput, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default Input = (props) => {
  const [segurity, setSegurity] = useState(props.segurity);
  const { colors } = useTheme();
  return (
    <TextInput
      style={{
        height: 40,
        width: "80%",
        fontSize: 20,
        color: colors.primary,
        marginTop: 10,
      }}
      mode="outlined"
      placeholder={props.placeText}
      placeholderTextColor={colors.primary}
      value={props.value}
      outlineColor={props.colorInput
        ? props.colorInput
        :  colors.primary}
        activeOutlineColor={props.colorInput
          ? props.colorInput
          :  colors.primary}
      secureTextEntry={segurity}
      onChangeText={(text) => props.onChangeText(text)}
      left={
        <TextInput.Icon
          name={props.iconName ? props.iconName : "email"}
          color={colors.primary}
          size={30}
          style={{ paddingTop: 7 }}
        />
      }
      right={
        props.pass ? (
          <TextInput.Icon
            onPress={() => setSegurity(!segurity)}
            name={segurity ? "eye" : "eye-off"}
            color={colors.primary}
            size={30}
            style={{ paddingTop: 7 }}
          />
        ) : (
          ""
        )
      }
    />
  );
};
