import { Card, SavedCard } from "@/app/types";
import React from "react";
import { View, Text } from "react-native";
import { cardItemStyles } from "./card-item.styles";

type CardItemProps = {
  card: SavedCard
};

export default function CardItem({card}: CardItemProps): JSX.Element {
  const containerStyles = [cardItemStyles.container, card.isActive ? cardItemStyles.activeBorder : {}];
  return (
    <View style={containerStyles}>
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
  );
}