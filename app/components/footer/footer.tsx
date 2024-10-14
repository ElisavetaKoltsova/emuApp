import React from "react";
import { View, Image, TouchableHighlight } from "react-native";
import { footerStyles } from "./footer.styles";

type FooterProps = {
  onHomePress: () => void;
  onHistoryPress: () => void;
}

export default function Footer({onHomePress, onHistoryPress}: FooterProps): JSX.Element {
  return (
    <View style={footerStyles.container}>
      <View style={footerStyles.iconContainer}>
        <TouchableHighlight onPress={onHomePress}>
          <Image style={footerStyles.iconImage} source={require('../../../source/ico-home.png')} />
        </TouchableHighlight>
        <TouchableHighlight onPress={onHistoryPress}>
          <Image style={footerStyles.iconImage} source={require('../../../source/ico-history.png')} />
        </TouchableHighlight>
      </View>
    </View>
  );
}
