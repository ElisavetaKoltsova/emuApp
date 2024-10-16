import { Card } from "@/app/types";
import React from "react";
import { View, Text } from "react-native";

type HistoryItemProps = {
  card: Card
};

export default function HistoryItem({ card }: HistoryItemProps): JSX.Element {
  return (
    <View>
      <Text>{card.lastReadTime}</Text>
    </View>
  );
}
