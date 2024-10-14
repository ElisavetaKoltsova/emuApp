import React from "react";
import { ActivityIndicator, View } from "react-native";
import { loaderStyles } from "./loader.styles";

export default function Loader(): JSX.Element {
  return (
    <View style={[loaderStyles.container, loaderStyles.horizontal]}>
      <ActivityIndicator size="large" color="#1F2022" />
    </View>
  );
}
