import { StyleSheet } from "react-native";

export const settingsPopupStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1F2022'
  },
  buttonText: {
    color: '#1F2022',
    fontSize: 14,
    fontFamily: 'Roboto-Medium'
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popup: {
    width: 300,
    padding: 20,
    backgroundColor: '#1F2022',
    borderRadius: 25,
    alignItems: 'center',
  },
  popupText: {
    fontSize: 18,
    marginBottom: 20,
    color: '#ffffff',
    fontFamily: 'Roboto-Black'
  },
  closeButton: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 25,
    width: '40%',
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 25
  },
  versionText: {
    fontSize: 10,
    marginTop: 10,
    color: '#ffffff',
    opacity: 0.8
  }
});
