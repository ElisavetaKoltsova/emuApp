import { Dimensions, StyleSheet } from "react-native";

export const mainPageStyles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems: 'center',
  },
  cardListContainer: {
    width: '85%'
  },
  addCardButton: {
    borderRadius: 50,
    position: 'absolute',
    backgroundColor: '#1F2022',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 140,
    right: 10
  },
  addCardIco: {
    width: 24,
    height: 24,
    tintColor: '#fff',
  },
  onlineIndicatorContainer: {
    marginTop: '5%',
    backgroundColor: '#1F2022',
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingBottom: 10,
    paddingTop: 10,
    width: '90%',
    height: 50
  },
  text: {
    color: '#ffffff',
    fontFamily: 'Roboto-Medium'
  }
})