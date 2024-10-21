import { StyleSheet } from "react-native";

export const cardItemStyles = StyleSheet.create({
  container: {
    backgroundColor: '#1f2022',
    marginBottom: 10,
    borderRadius: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '5%'
  },
  text: {
    color: '#ffffff',
    fontFamily: 'Roboto-Light',
    fontSize: 11
  },
  activeCardContainer: {
    justifyContent: 'space-around'
  },
  activeCardText: {
    color: '#14FF00',
    fontFamily: 'Roboto-Medium',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5
  },
  titleContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 25,
    padding: 5,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%'
  },
  titleText: {
    color: '#1f2022',
    fontFamily: 'Roboto-Medium'
  },
  activeBorder: {
    borderColor: '#14FF00',
    borderWidth: 2
  }
});
