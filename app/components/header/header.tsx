import React from "react";
import { View, Text, Image } from "react-native";
import { headerStyles } from "./header.styles";

export default function Header(): JSX.Element {
  return (
    <View style={headerStyles.container}>
      <View style={headerStyles.iconContainer}>
        <Image
          style={headerStyles.iconImage}
          source={require('../../../source/ico-white.png')}
        />
      </View>
      
      <View style={headerStyles.textContainer}>
        <Text
          style={headerStyles.text}
        >
          EMU
        </Text>
      </View>
    </View>
  );
}