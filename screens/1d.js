import * as React from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function App() {
  return (
    <View style={styles.container}>
        <Text style={styles.login}>LOGIN</Text>
        <View style={styles.inputContent}>
            <TextInput style={styles.textInput}  placeholder='Email'/>
            <TextInput style={styles.textInput}  placeholder='Password'/>
        </View>
        <View style={styles.loginControl}>
            <Button style={styles.button} title='LOGIN' color="#E53935"/>
        </View>
        <Text style={styles.text}>When you agree to terms and conditions</Text>
        <Text style={styles.text}>For got your password?</Text>
        <Text style={styles.text}>Or login with</Text>
        <View style={styles.iconLog}>
            <Icon style={styles.icon} name= 'facebook' size={35}/>
            <Icon style={styles.icon} name= 'zalo' size={35}/>
            <Icon style={styles.icon} name= 'google' size={35}/>
        </View>
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
  login:{
    flex:1,
    marginTop: 40,
    fontFamily: "Roboto",
    fontWeight: 700,
    fontSize: 25,
    lineHeight: 29.3,
    alignContent: "center",
  },
  inputContent:{
    flex: 1,
    justifyContent: "space-between",
    width: 330,
    height: 20,
    marginTop: 62,
  },
  textInput:{
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
    margin: 30,
  },
});
export default App;