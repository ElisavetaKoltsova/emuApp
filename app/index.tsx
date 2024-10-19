import React from "react";
import Header from "./components/header/header";
import { indexStyles } from "./index.styles";
import Footer from "./components/footer/footer";
import * as Font from 'expo-font';
import { useEffect, useState } from "react";
import MainPage from "./pages/main-page/main-page";
import HistoryPage from "./pages/history-page/history-page";
import Loader from "./components/loader/loader";
import SettingsPopup from "./components/settings-popup/settings-popup";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [mainPageStatus, setMainPageStatus] = useState(true);
  const [settingPopupStatus, setSettingPopupStatus] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Concrete-Regular': require('../assets/fonts/Concrete-Regular.ttf'),
        'Roboto-Black': require('../assets/fonts/Roboto-Black.ttf'),
        'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
        'Roboto-Light': require('../assets/fonts/Roboto-Light.ttf'),
      });
      setFontLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontLoaded) {
    return <Loader />;
  }

  const handleHomeButtonClick = () => {
    setMainPageStatus(true);
  };

  const handleHistoryButtonClick = () => {
    setMainPageStatus(false);
  };

  const handleSettingsButtonClick = () => {
    setSettingPopupStatus(!settingPopupStatus);
  }

  return (
    <SafeAreaView style={indexStyles.container}>
      <Header onSettingsPress={handleSettingsButtonClick} />
      {
        mainPageStatus
        ? <MainPage />
        : <HistoryPage />
      }
      <Footer
        onHomePress={handleHomeButtonClick}
        onHistoryPress={handleHistoryButtonClick}
      />
      
      {
        settingPopupStatus
        ? <SettingsPopup onToggleModal={handleSettingsButtonClick}/>
        : ''
      }
    </SafeAreaView>
  );
}
