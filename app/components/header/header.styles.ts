import {StyleSheet} from 'react-native';

export const headerStyles = StyleSheet.create({
  container: {
    textAlign: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1F2022',
    flexDirection: 'row',
  },
  textContainer: {
    flex: 1,
    backgroundColor: '#1F2022',
    textAlign: 'center',
    alignItems: 'center',
    paddingRight: '10%',
    paddingTop: '3%'
  },
  text: {
    color: '#ffffff',
    fontSize: 24,
    fontFamily: 'Concrete-Regular'
  },
  iconContainer: {
    height: 65,
    width: 65,
    backgroundColor: '#1F2022',
    padding: 10,
    marginLeft: 5
  },
  iconImage: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain'
  }
});
