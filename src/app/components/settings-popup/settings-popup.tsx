import React, { useState } from "react";
import { View,Text, Modal, TouchableOpacity, Switch } from "react-native";
import { settingsPopupStyles } from "./setting-popup.styles";

type SettingsPopupProps = {
  onToggleModal: () => void
}

export default function SettingsPopup({onToggleModal}: SettingsPopupProps): JSX.Element {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={true}
        onRequestClose={onToggleModal}
      >
        <View style={settingsPopupStyles.overlay}>
          <View style={settingsPopupStyles.popup}>
            <Text style={settingsPopupStyles.popupText}>Settings</Text>

            <Switch
              trackColor={{false: '#ffffff', true: '#5c5f65'}}
              thumbColor={isEnabled ? '#14FF00' : '#5c5f65'}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />

            <TouchableOpacity onPress={onToggleModal} style={settingsPopupStyles.closeButton}>
              <Text style={settingsPopupStyles.buttonText}>Save</Text>
            </TouchableOpacity>
            <Text style={settingsPopupStyles.versionText}>Emu v1.0</Text>
          </View>
        </View>
      </Modal>
  );
}
