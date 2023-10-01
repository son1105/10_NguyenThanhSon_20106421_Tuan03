import * as React from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function App() {
  return (
    <View style={styles.container}>
      <Icon style={styles.lock} name= 'lock' size={140}/>
      <Text style={styles.titleText}>FORGET PASSWORD</Text>
      <Text style={styles.textContent}>Provide your account’s email for which you want to reset your password</Text>
      <View style={styles.textControl}>
        <Icon style={styles.iconEmail} name= 'mail' size={10}/>
        <TextInput style={styles.inputText} placeholder='Email'/>
    </View>
    <View style={styles.buttonControl}>
        <Button style={styles.button} title='NEXT' color="#E3C000"/>
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
  lock:{
    marginTop: 76,
  },
  titleText:{
    width: 189,
    height: 58,
    marginTop: 37,
    fontFamily: "Roboto",
    fontSize: 25,
    lineHeight: 29.3,
    fontWeight: 700,
  },
  textContent:{
    textalign: 'center',
    textalignVertical: 'center',
    width: 302,
    height: 36,
    marginTop: 32,
    marginLeft: 29,
    fontFamily: "Roboto",
    fontSize: 15,
    lineHeight: 17.58,
    alignContent: "center",
    fontWeight: 700,
  },
  textControl:{
    flexDirection: 'row',
    width: 294,
    height: 48,
    marginTop: 50,
    marginLeft: 30,
    justifyContent: "space-between",
  },
  iconEmail:{
    width: 48,
    height: 45,
    backgroundColor: "#C4C4C4",
  },
  inputText:{
    flex: 1,
    width: 257,
    height: 45,
    backgroundColor: "#C4C4C4",
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