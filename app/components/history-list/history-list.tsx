import { Card } from "@/app/types";
import React from "react";
import { View } from "react-native";
import HistoryItem from "../history-item/history-item";

type HistoryListProps = {
  cards: Card[]
}

export default function HistoryList({cards}: HistoryListProps): JSX.Element {
  return (
    <View>
      {
        cards.map((card) => <HistoryItem card={card} key={card.uid} />)
      }
    </View>
  );
}