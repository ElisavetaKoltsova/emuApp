import React from "react";
import { View, Text, TouchableHighlight, Image } from "react-native";
import { mainPageStyles } from "./main-page.styles";
import Svg, { Circle } from "react-native-svg";
import CardList from "../../components/card-list/card-list";
import { savedCards } from "../../mock/cards";

type MainPageProps = {
  onToggleModal: () => void;
}

export default function MainPage({onToggleModal}: MainPageProps): JSX.Element {
  return (
    <View style={mainPageStyles.container}>
      <View style={mainPageStyles.onlineIndicatorContainer}>
        <Text style={mainPageStyles.text}>Emu conected...</Text>
        <Svg height="70%" width="10%" viewBox="0 0 100 100" >
          <Circle cx="50" cy="50" r="50" fill="#14FF00" />
        </Svg>
      </View>

      <View style={mainPageStyles.cardListContainer}>
        <CardList cards={savedCards} />
      </View>
      

      <TouchableHighlight style={mainPageStyles.addCardButton} onPress={onToggleModal}>
        <Image
        style={mainPageStyles.addCardIco}
          source={require('../../../source/ico-add-card.png')}
        />
      </TouchableHighlight>
    </View>
  );
}