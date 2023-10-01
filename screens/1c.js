import * as React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

function App() {
  return (
    <View style={styles.container}>
        <Text style={styles.code}>CODE</Text>
        <Text style={styles.titleText}>VERIFICATION</Text>
        <Text style={styles.textContent}>Enter ontime password sent on ++849092605798</Text>
        <View style={styles.rectControl}>
            <View style={styles.rectangle}></View>
            <View style={styles.rectangle}></View>
            <View style={styles.rectangle}></View>
            <View style={styles.rectangle}></View>
            <View style={styles.rectangle}></View>
            <View style={styles.rectangle}></View>
        </View>
        <View style={styles.buttonControl}>
        <Button style={styles.button} title='VERIFY CODE' color="#E3C000"/>
        </View>
    </View>
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
  code:{
    fontFamily: "Roboto",
    fontWeight: 700,
    fontSize: 60,
    lineHeight: 70.31,
    alignContent: "center",
  },
  titleText:{
    width: 302,
    height: 53,
    marginTop: 62,
    fontFamily: "Roboto",
    fontSize: 20,
    lineHeight: 23.44,
    fontWeight: 700,
  },
  textContent:{
    textalign: 'center',
    textalignVertical: 'center',
    width: 302,
    height: 36,
    marginTop: 22,
    marginLeft: 29,
    fontFamily: "Roboto",
    fontSize: 15,
    lineHeight: 17.58,
    alignContent: "center",
    fontWeight: 700,
  },
  rectControl:{
    flexDirection: 'row',
    width: 294,
    height: 48,
    marginTop: 50,
    marginLeft: 32,
    justifyContent: "space-between",
  },
  rectangle:{
    flex: 1,
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#000000",
  },
  buttonControl:{
    width: 305,
    marginTop: 43,
    marginLeft: 30,
    backgroundColor: "yellow"
  },
  button:{
    height: 45
  },
});
export default App;