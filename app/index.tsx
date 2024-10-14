import React from "react";
import { View } from "react-native";
import Header from "./components/header/header";
import { indexStyles } from "./index.styles";
import Footer from "./components/footer/footer";
import * as Font from 'expo-font';
import { useEffect, useState } from "react";
import MainPage from "./pages/main-page/main-page";
import HistoryPage from "./pages/history-page/history-page";
import Loader from "./components/loader/loader";

export default function Index() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [mainPageStatus, setMainPageStatus] = useState(true);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Concrete-Regular': require('../assets/fonts/Concrete-Regular.ttf'),
      });
      setFontLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontLoaded) {
    return <Loader />;
  }

  const handleHomeClickHandle = () => {
    setMainPageStatus(true);
  };

  const handleHistoryClickHandle = () => {
    setMainPageStatus(false);
  };

  return (
    <View style={indexStyles.container}>
      <Header />
      {
        mainPageStatus
        ? <MainPage />
        : <HistoryPage />
      }
      <Footer
        onHomePress={handleHomeClickHandle}
        onHistoryPress={handleHistoryClickHandle}
        />
    </View>
  );
}
