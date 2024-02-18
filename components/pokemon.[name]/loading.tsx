import React from "react";
import { ActivityIndicator, Text, View } from "react-native";

const LoadingComponent: React.FC = () => {
  return (
    <View>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

export default LoadingComponent;
