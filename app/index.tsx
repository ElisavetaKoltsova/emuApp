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
import ConnectCardPopup from "./connect-card-popup/connect-card-popup";
import BleManager from 'react-native-ble-manager';
import { NativeModules, NativeEventEmitter } from 'react-native';

const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);

export default function Index() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [mainPageStatus, setMainPageStatus] = useState(true);
  const [settingPopupStatus, setSettingPopupStatus] = useState(false);
  const [addCardPopupStatus, setAddCardPopupStatus] = useState(false);

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

  // Обработчик обнаруженных устройств
  const handleDiscoverPeripheral = (peripheral) => {
    console.log('Discovered peripheral:', peripheral);
  };

  useEffect(() => {
    // Инициализация менеджера
    BleManager.start({ showAlert: false })
      .then(() => console.log('Bluetooth Manager initialized'))
      .catch((error) => console.log('Bluetooth init error:', error));

    // Подписка на события
    const handlerDiscover = bleManagerEmitter.addListener(
      'BleManagerDiscoverPeripheral',
      handleDiscoverPeripheral,
    );

    return () => {
      // Отписка от событий при размонтировании компонента
      handlerDiscover.remove();
    };
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
  };

  const handleAddCardButtonClick = () => {
    setAddCardPopupStatus(!addCardPopupStatus);
  };

   // Функция для проверки состояния Bluetooth
  const checkBluetoothState = () => {
    BleManager.checkState();
  };

  // Функция для поиска устройств
  const scanDevices = () => {
    BleManager.scan([], 5, true)
      .then(() => console.log('Scanning started'))
      .catch((error) => console.log('Scan error:', error));
  };

  return (
    <SafeAreaView style={indexStyles.container}>
      <Header onSettingsPress={handleSettingsButtonClick} />
      {
        mainPageStatus
        ? <MainPage onToggleModal={handleAddCardButtonClick} />
        : <HistoryPage />
      }
    
      {/* <Button title="Сканировать устройства" onPress={scanDevices} /> */}
      <Footer
        onHomePress={handleHomeButtonClick}
        onHistoryPress={handleHistoryButtonClick}
      />
      
      {
        settingPopupStatus
        ? <SettingsPopup onToggleModal={handleSettingsButtonClick}/>
        : ''
      }

      {
        addCardPopupStatus
        ? <ConnectCardPopup
            onToggleModal={handleAddCardButtonClick}
            onBluetoothCheck={checkBluetoothState}
          />
        : ''
      }
    </SafeAreaView>
  );
}
