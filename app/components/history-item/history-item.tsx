import { SavedCard } from "@/app/types";
import React from "react";
import { View, Text } from "react-native";
import { historyItemStyles } from "./history-item.styles";
import { convertDate } from "@/app/utils";

type HistoryItemProps = {
  card: SavedCard
};

export default function HistoryItem({card}: HistoryItemProps): JSX.Element {
  const convertedDate = convertDate(card.lastReadTime);

  return (
    <View style={historyItemStyles.container}>
      <View style={historyItemStyles.titleContainer}>
            <Text style={historyItemStyles.titleText}>{card.title}</Text>
          </View>
      <Text style={historyItemStyles.text}>{convertedDate}</Text>
    </View>
  );
}
