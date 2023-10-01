import * as React from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

function App() {
  return (
    <View style={styles.container}>
        <Text style={styles.login}>LOGIN</Text>
        <View style={styles.inputContent}>
            <TextInput style={styles.textInput}  placeholder='Name'/>
            <TextInput style={styles.textInput}  placeholder='Password'/>
        </View>
        <View style={styles.buttonControl}>
            <Button style={styles.button} title='LOGIN' color="#060000"/>
        </View>
        <Text style={styles.text}>CREATE ACCOUNT</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: 360,
    // height: 640,
    backgroundColor: '#FBCB00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  login:{
    flex:1,
    height: 35,
    marginTop: 82,
    marginLeft: 30,
    fontFamily: "Roboto",
    fontWeight: 700,
    fontSize: 30,
    lineHeight: 35.16,
    alignContent: "center",
  },
  inputContent:{
    flex: 1,
    marginLeft: 15,
    justifyContent: "space-around",
    width: 330,
    height: 50,
  },
  textInput:{
    height: 29,
    margin: 10,
    backgroundColor: "#C4C4C4",
    fontFamily: "Roboto",
    fontSize: 20,
    lineHeight: 23.44,
    borderColor: "#F2F2F2",
    borderWidth: 1,
  },
  buttonControl:{
    flex: 1,
    width: 330,
    height: 45,
    marginTop: 50,
  }
  ,
  button:{
    flex: 1,
    backgroundColor: "#E53935"
  },
  text:{
    flex: 1,
    height: 35,
    fontFamily: "Roboto",
    fontWeight: 700,
    fontSize: 30,
    lineHeight: 35.16,
    alignContent: "center",
  },
});

export default App;