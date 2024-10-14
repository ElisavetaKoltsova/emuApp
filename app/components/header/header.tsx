import React from "react";
import { View, Text, Image } from "react-native";
import { headerStyles } from "./header.styles";

export default function Header(): JSX.Element {
  return (
    <View style={headerStyles.container}>
      <Image
        style={headerStyles.iconImage}
        source={require('../../../source/ico-white.png')}
      />
      <Text
        style={headerStyles.text}
      >
        Header
      </Text>
    </View>
  );
}