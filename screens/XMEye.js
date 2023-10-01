import * as React from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function App() {
  return (
    <View style={styles.container}>
        <Icon style={styles.lock} name= 'eye' size={140}/>
        <View style={styles.inputContent}>
            <TextInput style={styles.textInput}  placeholder='Please input user name'/>
            <TextInput style={styles.textInput}  placeholder='Please input password'/>
        </View>
        <View style={styles.buttonControl}>
            <Button style={styles.button} title='LOGIN' color="blue"/>
        </View>
        <View style={styles.textControl}>
            <Text style={styles.text}>Register</Text>
            <Text style={styles.text}>Forget password</Text>
        </View>
        <Text style={styles.text}>Orther login method</Text>
        <View style={styles.iconLog}>
            <Icon style={styles.icon} name= 'people' size={35}/>
            <Icon style={styles.icon} name= 'wifi' size={35}/>
            <Icon style={styles.icon} name= 'facebook' size={35}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: 360,
    // height: 640,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContent:{
    flex: 1,
    marginTop: 50,
    marginLeft: 15,
    justifyContent: "space-around",
    width: 330,
    height: 50,
  },
  textInput:{
    height: 29,
    margin: 10,
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
    backgroundColor: "#E53935",
  },
  textControl:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  text:{
    flex: 1,
    width: 150,
    fontFamily: "Roboto",
    fontWeight: 700,
    fontSize: 14,
    lineHeight: 15.16,
    alignContent: "center",
  },
  iconLog:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-around",
  },
  icon:{
    flex: 1,
    margin: 30,
  },
});

export default App;