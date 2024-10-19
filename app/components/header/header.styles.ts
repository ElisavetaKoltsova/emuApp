import {StyleSheet} from 'react-native';

export const headerStyles = StyleSheet.create({
  container: {
    textAlign: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1F2022',
    flexDirection: 'row',
    paddingHorizontal: 10
  },
  textContainer: {
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '3%'
  },
  text: {
    color: '#ffffff',
    fontSize: 24,
    fontFamily: 'Concrete-Regular'
  },
  iconContainer: {
    height: 50,
    width: 50,
    backgroundColor: '#1F2022',
    padding: 10
  },
  iconImage: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain'
  },
  settingsIcoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  settingsIco: {
    width: 30,
    height: 30,
    tintColor: '#fff',
  }
});
