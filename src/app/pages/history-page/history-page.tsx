import React from "react";
import { View, Text } from "react-native";
import { historyPageStyles } from "./history-page.styles";
import { savedCards } from "../../mock/cards";
import HistoryList from "../../components/history-list/history-list";

export default function HistoryPage(): JSX.Element {
  return (
    <View style={historyPageStyles.container}>
      <Text style={historyPageStyles.title}>
        Your History
      </Text>
      <HistoryList cards={savedCards}/>
    </View>
  );
}