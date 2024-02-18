import { FontAwesome6 } from "@expo/vector-icons";
import React from "react";
import { View, Text } from "react-native";

export const ErrorComponent = ({ message }: { message: string }) => {
  return (
    <View className={"bg-red- p-4 rounded items-center space-y-10"}>
      <FontAwesome6 name="triangle-exclamation" size={48} color="red" />
      <Text className={" font-bold"}>{message}</Text>
    </View>
  );
};
