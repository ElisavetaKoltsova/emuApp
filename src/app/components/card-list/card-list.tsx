import React from "react";
import { ScrollView, View } from "react-native";
import CardItem from "../card-item/card-item";
import { cardListStyles } from "./card-list.styles";
import { SavedCard } from "../../types";

type CardListProps = {
  cards: SavedCard[]
}

export default function HistoryList({cards}: CardListProps): JSX.Element {
  return (
    <ScrollView>
      <View style={cardListStyles.container}>
        {
          cards
            .filter((card) => card.isActive === true)
              .map((card) => <CardItem card={card} key={card.uid} />)
        }
        {
          cards
            .filter((card) => card.isActive !== true)
              .map((card) => <CardItem card={card} key={card.uid} />)
        }
      </View>
    </ScrollView>
    
  );
}