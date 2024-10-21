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

// const manager = new BleManager();

// const requestPermissions = async () => {
//   if (Platform.OS === 'android') {
//     await PermissionsAndroid.requestMultiple([
//       PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
//       PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
//       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//     ]);
//   }
// };

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

  const [devices, setDevices] = useState([]);

  // useEffect(() => {
  //   requestPermissions();
  //   const subscription = manager.onStateChange((state) => {
  //     if (state === 'PoweredOn') {
  //       scanAndConnect();
  //       subscription.remove();
  //     }
  //   }, true);

  //   return () => {
  //     manager.destroy();
  //   };
  // }, []);

  // const scanAndConnect = () => {
  //   manager.startDeviceScan(null, null, (error, device) => {
  //     if (error) {
  //       console.log(error);
  //       return;
  //     }

  //     if (device && !devices.includes(device)) {
  //       setDevices([...devices, device]);
  //       console.log('Found device:', device.name);
  //     }
  //   });
  // };


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
            //onBluetoothCheck={}
          />
        : ''
      }
    </SafeAreaView>
  );
}
