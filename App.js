import { StyleSheet, Text, View } from 'react-native-web';
import {TouchableOpacity} from "react-native-web";
import {useState} from "react";

let i = 0;
export default function App() {
  const [count, setCount] = useState();

  const click=()=>{
    i++;
    setCount(i)
  }
  const reset = ()=>{
    i=0;
    setCount(i)
  }


  return (
    <View style={styles.container}>
      <View style={styles.countView}>
        <Text style={styles.countTextView}>
          Count: {count}
        </Text>
      </View>
      <View style={styles.ButtonContents}>
      <TouchableOpacity style={styles.TouchablePlus} onPress={click}>
        <View style={styles.buttonView}>
          <Text style = {styles.plusSign}>
            +
          </Text>
        </View>
      </TouchableOpacity></View>
      <View style={styles.ResetButtonView}>
        <TouchableOpacity onPress={reset}>
          <Text style={styles.resetText}>
            Reset
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,136,52,0.6)',
    alignItems: 'center',
    justifyContent:"center"

  },
  TouchablePlus:{
    height:100,
    width:100,
    borderRadius:10,
    backgroundColor:'rgba(255,255,255,0.77)',
    alignItems:"center",
    justifyContent:"center",
  },
  buttonView:{

  },
  plusSign:{
    fontSize:40,
    color:'rgba(0,0,0,0.71)'
  },
  countView:{
    backgroundColor:'rgba(250,248,205,0.67)',
    width: 200,
    height:30,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:10,
  },
  countTextView:{
    fontSize:15,
    fontWeight:"bold",
    fontStyle:"italic",
    color:'rgba(0,0,0,0.6)'
  },
  ButtonContents:{
    paddingTop:60,
    paddingBottom:30

  },
  ResetButtonView:{
    backgroundColor:'rgba(248,192,192,0.63)',
    height:30,
    width:100,
    borderRadius:10,
    alignItems:"center",
    justifyContent:"center",
  },
  resetText:{
    fontSize:15,
    fontWeight:"bold",

    color:'rgba(0,0,0,0.6)'
  }

});
