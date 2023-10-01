import { StyleSheet, Text, View, Button } from 'react-native';
import firstScreen from './screens/firstScreen'
import _1a from './screens/1a'
import _1b from './screens/1b'
import _1c from './screens/1c'
import _1d from './screens/1d'
import _1e from './screens/1e'
import _2a from './screens/2a'
import XMEye from './screens/XMEye'

export default function App() {
  return (
    // firstScreen()
    // _1a()
    // _1b()
    // _1c()
    // _1d()
    // _1e()
    // _2a()
    XMEye()
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: 360,
    // height: 640,
    backgroundColor: '#00CCF9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle:{
    width: 140,
    height: 140,
    marginTop: 105,
    borderRadius: 140/2,
    borderColor: "#000000",
    borderWidth: 15,
  },
  titleText:{
    textalign: 'center',
    textalignVertical: 'center',
    width: 189,
    height: 58,
    marginTop: 52,
    fontFamily: "Roboto",
    fontSize: 25,
    lineHeight: 29.3,
    alignContent: "center",
    fontWeight: 700,
  },
  textContent:{
    textalign: 'center',
    textalignVertical: 'center',
    width: 302,
    height: 36,
    marginTop: 62,
    marginLeft: 29,
    fontFamily: "Roboto",
    fontSize: 15,
    lineHeight: 17.58,
    alignContent: "center",
    fontWeight: 700,
  },
  buttonControl:{
    flexDirection: 'row',
    width: 294,
    height: 48,
    marginTop: 45,
    marginLeft: 29,
    justifyContent: "space-between",
  },
  button:{
    flex: 1,
    width: 119,
    height: 48,
    borderRadius: 10,
    backgroundColor: "yellow"
  }
});
