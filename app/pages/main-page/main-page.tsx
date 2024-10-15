import React from "react";
import { View, Text, TouchableHighlight, Image } from "react-native";
import { mainPageStyles } from "./main-page.styles";
import Svg, { Circle } from "react-native-svg";

export default function MainPage(): JSX.Element {
  return (
    <View style={mainPageStyles.container}>
      <View style={mainPageStyles.onlineIndicatorContainer}>
        <Text style={mainPageStyles.text}>Device conected...</Text>
        <Svg height="70%" width="10%" viewBox="0 0 100 100" >
          <Circle cx="50" cy="50" r="50" fill="#14FF00" />
        </Svg>
      </View>

      <TouchableHighlight style={mainPageStyles.addCardButton}>
        <Image
        style={mainPageStyles.addCardIco}
          source={require('../../../source/ico-add-card.png')}
        />
      </TouchableHighlight>
    </View>
  );
}