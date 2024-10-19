import { StyleSheet } from "react-native";

export const footerStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 80,
    backgroundColor: '#1F2022',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 80,
    paddingBottom: 10
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  iconImage: {
    width: 30,
    height: 30,
    tintColor: '#fff',
  },
})