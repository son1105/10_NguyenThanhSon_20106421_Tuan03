import * as React from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function App() {
  return (
    <View style={styles.container}>
        <Text style={styles.register}>REGISTER</Text>
        <View style={styles.inputContent}>
            <TextInput style={styles.textInput}  placeholder='Name'/>
            <TextInput style={styles.textInput}  placeholder='Phone'/>
            <TextInput style={styles.textInput}  placeholder='Email'/>
            <TextInput style={styles.textInput}  placeholder='Password'/>
            <TextInput style={styles.textInput}  placeholder='Birthday'/>
        </View>
        <View style={styles.radio}>
            <Text>Male</Text>
            <Text>Female</Text>
        </View>
        <View style={styles.buttonControl}>
            <Button style={styles.button} title='REGISTER' color="#E53935"/>
        </View>
        <Text style={styles.text}>When you agree to terms and conditions</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: 360,
    // height: 640,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  register:{
    flex:1,
    height: 29,
    marginTop: 40,
    fontFamily: "Roboto",
    fontWeight: 700,
    fontSize: 25,
    lineHeight: 29.3,
    alignContent: "center",
  },
  inputContent:{
    flex: 2,
    marginLeft: 17,
    justifyContent: "space-around",
    width: 330,
    height: 50,
    marginTop: 20,
  },
  textInput:{
    height: 29,
    margin: 10,
    backgroundColor: "#C4C4C4",
    fontFamily: "Roboto",
    fontSize: 20,
    lineHeight: 23.44,
  },
  loginControl:{
    flex: 1,
    width: 330,
    height: 45,
    marginTop: 50,
    // marginLeft: 32,
    // justifyContent: "space-between",
  },
  buttonControl:{
    flex: 1,
    width: 330,
    height: 45,
  }
  ,
  button:{
    flex: 1,
    backgroundColor: "#E53935"
  },
  text:{
    flex: 1,
    width: 260,
    height: 20,
    // marginTop: 20,
    fontFamily: "Roboto",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 16.41,
    alignContent: "center",
  },
  iconLog:{
    flex: 1,
    flexDirection: 'row',
    marginTop: 50,
  },
  icon:{
    flex: 1,
    width: 35,
    height: 35,
  },
  radio:{
    flex: 1,
    flexDirection: 'row',
    marginTop: 50,
    width: 170,
    justifyContent: "space-between",
  }
});

export default App;