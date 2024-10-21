import React from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";
import { headerStyles } from "./header.styles";

type HeaderProps = {
  onSettingsPress: () => void;
}

export default function Header({onSettingsPress}: HeaderProps): JSX.Element {
  return (
    <View style={headerStyles.container}>
      <View style={headerStyles.iconContainer}>
        <Image
          style={headerStyles.iconImage}
          source={require('../../../source/ico-cropped.png')}
        />
      </View>
      
      <View style={headerStyles.textContainer}>
        <Text
          style={headerStyles.text}
        >
          EMU
        </Text>
      </View>

      <TouchableHighlight
        style={headerStyles.settingsIcoContainer}
        onPress={onSettingsPress}
      >
        <Image
        style={headerStyles.settingsIco}
          source={require('../../../source/ico-settings.png')}
        />
      </TouchableHighlight>
    </View>
  );
}