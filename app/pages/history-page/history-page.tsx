import React from "react";
import { View, Text } from "react-native";
import { historyPageStyles } from "./history-page.styles";
import HistoryList from "@/app/components/history-list/history-list";
import { cards } from "@/app/mock/cards";

export default function HistoryPage(): JSX.Element {
  return (
    <View style={historyPageStyles.container}>
      <Text style={historyPageStyles.title}>
        Your History
      </Text>
      <HistoryList cards={cards}/>
    </View>
  );
}