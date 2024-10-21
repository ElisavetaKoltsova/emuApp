import React from "react";
import { View, Text } from "react-native";
import { cardItemStyles } from "./card-item.styles";
import { LinearGradient } from "expo-linear-gradient";
import { SavedCard } from "../../types";

type CardItemProps = {
  card: SavedCard
};

export default function CardItem({card}: CardItemProps): JSX.Element {
  const containerStyles = [
    cardItemStyles.container
  ];
  
  return (
    <View>
      {
        !card.isActive
        ?
        <View style={[containerStyles]}>
          <View style={cardItemStyles.titleContainer}>
            <Text style={cardItemStyles.titleText}>{card.title}</Text>
          </View>
          <View style={cardItemStyles.activeCardContainer}>
            <Text style={cardItemStyles.text}>{card.cardType}</Text>
          </View>
        </View>
        :
        <LinearGradient
          colors={['transparent', '#14FF00', '#14FF00', 'transparent']}
          style={{
            padding: 1,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
            top: 0
          }}
          pointerEvents='none'
        >
          <View style={[containerStyles]}>
            <View style={cardItemStyles.titleContainer}>
              <Text style={cardItemStyles.titleText}>{card.title}</Text>
            </View>
            <View style={cardItemStyles.activeCardContainer}>
              <Text style={cardItemStyles.text}>{card.cardType}</Text>
              {
                card.isActive
                ? <Text style={cardItemStyles.activeCardText}>Active</Text>
                : ''
              }
            </View>
          </View>
        </LinearGradient>
      }
    </View>
    
  );
}