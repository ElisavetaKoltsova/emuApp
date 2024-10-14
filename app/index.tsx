import { Collapsible } from "@/components/Collapsible";
import React from "react";
import { Text, View } from "react-native";
import Header from "./components/header/header";

export default function Index() {
  return (
    <View>
      <Header />
      <Collapsible children={<Text style={{color: 'white'}}>Hello World!</Text>} title={"EMU"} />
    </View>
  );
}
