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
import ConnectCardPopup from "./components/connect-card-popup/connect-card-popup";
import BleManager from 'react-native-ble-manager';
import { NativeEventEmitter, NativeModules } from "react-native";

const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);

export default function Index() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [mainPageStatus, setMainPageStatus] = useState(true);
  const [settingPopupStatus, setSettingPopupStatus] = useState(false);
  const [addCardPopupStatus, setAddCardPopupStatus] = useState(false);

  const [devices, setDevices] = useState([]);

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

  useEffect(() => {
    BleManager.start({ showAlert: false })
      .then(() => {
          console.log('BleManager успешно инициализирован');
      })
      .catch((error) => {
          console.error('Ошибка при инициализации BleManager:', error);
      });

    const handleDiscoverPeripheral = (peripheral) => {
        if (!devices.find((device) => device.id === peripheral.id)) {
            setDevices((prevDevices) => [...prevDevices, peripheral]);
        }
    };

    const discoverPeripheralListener = bleManagerEmitter.addListener(
        'BleManagerDiscoverPeripheral',
        handleDiscoverPeripheral
    );

    return () => {
        discoverPeripheralListener.remove();
    };
}, [devices]);

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

  const startScan = () => {
    BleManager.scan([], 10, true)
        .then(() => {
            console.log('Сканирование начато');
        })
        .catch((error) => {
            console.error(error);
        });
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
            onBluetoothCheck={startScan}
          />
        : ''
      }
    </SafeAreaView>
  );
}
