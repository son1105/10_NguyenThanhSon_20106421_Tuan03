import { StyleSheet, Text, View, Button } from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <View style={styles.circle}></View>
      <Text style={styles.titleText}>GROW YOUR BUSINESS</Text>
      <Text style={styles.textContent}>We will help you to grow your business using online server</Text>
      <View style={styles.buttonControl}>
        <Button style={styles.button} title='LOGIN' color="#E3C000"/>
        <Button style={styles.button} title='SIGN UP' color="#E3C000"/>
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
export default App;