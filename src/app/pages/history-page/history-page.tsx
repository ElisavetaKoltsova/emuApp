import React from "react";
import { View, Text } from "react-native";
import { historyPageStyles } from "./history-page.styles";
import HistoryList from "../../components/card-list/card-list";
import { savedCards } from "../../mock/cards";

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