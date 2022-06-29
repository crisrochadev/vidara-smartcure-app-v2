import React from "react";
import { IconButton, Text, useTheme, Avatar } from "react-native-paper";
import { View } from "react-native";

const Message = (props) => {
  const { colors } = useTheme();
  return (
    <View>
      {props.component == "password" ? (
        <View style={{ width: "80%" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Avatar.Icon
              icon={props.message.icons.passNumberIcon}
              size={35}
              color={
                props.message.icons.passNumberIcon != "check-outline"
                  ? colors.danger
                  : colors.sucess
              }
              style={{ backgroundColor: "transparent" }}
            />
            <Text
              style={{
                marginLeft: 20,
                color: colors.primary,
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              {props.message.passNumber}
            </Text>
          </View>
          {props.message.passLength ? (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Avatar.Icon
                icon={props.message.icons.passLengthIcon}
                size={35}
                color={
                  props.message.icons.passLengthIcon != "check-outline"
                    ? colors.danger
                    : colors.sucess
                }
                style={{ backgroundColor: "transparent" }}
              />
              <Text
                style={{
                  marginLeft: 20,
                  color: colors.primary,
                  textTransform: "uppercase",
                  fontWeight: "bold",
                }}
              >
                {props.message.passLength}
              </Text>
            </View>
          ) : (
            <View></View>
          )}
          {props.message.passUper ? (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Avatar.Icon
                icon={props.message.icons.passUperIcon}
                size={35}
                color={
                  props.message.icons.passUperIcon != "check-outline"
                    ? colors.danger
                    : colors.sucess
                }
                style={{ backgroundColor: "transparent" }}
              />
              <Text
                style={{
                  marginLeft: 20,
                  color: colors.primary,
                  textTransform: "uppercase",
                  fontWeight: "bold",
                }}
              >
                {props.message.passUper}
              </Text>
            </View>
          ) : (
            <View></View>
          )}
        </View>
      ) : (
        <View style={{ width: "70%" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Avatar.Icon
              icon={props.iconEmail}
              size={35}
              color={colors.danger}
              style={{ backgroundColor: "transparent" }}
            />
            <Text
              style={{
                marginLeft: 20,
                color: colors.primary,
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              {props.message.messageEmail}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default Message;
