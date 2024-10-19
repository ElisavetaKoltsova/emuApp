import React from "react";
import { Modal, View, TouchableOpacity, Text, Image } from "react-native";
import { connectCardPopupStyles } from "./connect-card-popup.styles";

type ConnectCardPopupProps = {
  onToggleModal: () => void;
  onBluetoothCheck: () => void;
}

export default function ConnectCardPopup({onToggleModal, onBluetoothCheck}: ConnectCardPopupProps): JSX.Element {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true}
      onRequestClose={onToggleModal}
    >
      <View style={connectCardPopupStyles.overlay}>
        <View style={connectCardPopupStyles.popup}>
          <Text style={connectCardPopupStyles.popupText}>Attach a card</Text>

          <View style={connectCardPopupStyles.iconContainer}>
            <Image style={connectCardPopupStyles.iconBluetooth} source={require('../../source/ico-bluetooth-100.png')} />
          </View>

          <TouchableOpacity onPress={onBluetoothCheck}>
            <Text>
              Check Bluetooth
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={onToggleModal} style={connectCardPopupStyles.closeButton}>
            <Text style={connectCardPopupStyles.buttonText}>Close</Text>
          </TouchableOpacity>
          <Text style={connectCardPopupStyles.versionText}>Emu v1.0</Text>
        </View>
      </View>
    </Modal>
  );
}