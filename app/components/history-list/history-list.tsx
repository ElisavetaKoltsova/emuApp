import { SavedCard } from "@/app/types";
import React from "react";
import { ScrollView, View } from "react-native";
import HistoryItem from "../history-item/history-item";
import { historyListStyles } from "./history-list.styles";

type HistoryListProps = {
  cards: SavedCard[]
}

export default function HistoryList({cards}: HistoryListProps): JSX.Element {
  return (
    <ScrollView>
      <View style={historyListStyles.container}>
        {
          cards.map((card) => <HistoryItem card={card} key={card.uid} />)
        }
      </View>
    </ScrollView>
  );
}