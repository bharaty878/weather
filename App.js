import { StyleSheet, Text, TextInput, View,TouchableOpacity, ImageBackground, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const[idata,setData]=useState("")
  const[val,setVal]=useState({})
  const [isLoading, setIsLoading] = useState(false);

  const Log=async()=>{
  
      try {
        const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${idata}&appid=9bda240fc50f47dc0f86e858634aad1e`)
        const response = await data.json();
        console.log(response);
        setVal(response);
        setIsLoading(true);
      } catch (error) {
        console.log("error")
        setIsLoading(false); 
      }
  }
  return (
    <ImageBackground source={require('./images/img5.jpg')}    style={styles.background}>
    <View style={styles.view}>
      <Text style={styles.txt1}>Weather</Text>
      <TextInput value={idata} onChangeText={(e)=>setData(e)} placeholder='Enter City Name' placeholderTextColor={"black"} style={styles.input}/>
      <TouchableOpacity onPress={Log}>
                        <Text style={styles.txt2}>Search</Text>
      </TouchableOpacity>
      <View >
     { isLoading ? (
        <View>
      <Text style={styles.txt3}>City : {JSON.stringify(val.name)} </Text>
      <Text style={styles.txt4}>{JSON.stringify((val.main.temp-273).toFixed(2))} C</Text>
      <Text style={styles.txt3}>Lon: {JSON.stringify(val.coord["lon"])}</Text>
      <Text style={styles.txt3}>Lat: {JSON.stringify(val.coord["lat"])}</Text>
      <Text style={styles.txt3}>Pressure : {JSON.stringify(val.main.pressure)}</Text>
      <Text style={styles.txt3}>Humidity : {JSON.stringify(val.main.humidity)}</Text>
      <Text style={styles.txt3}>visibility : {JSON.stringify(val.visibility)}</Text>
      <Text style={styles.txt3}>Wind speed : {JSON.stringify(val.wind["speed"])}</Text>
      <Text style={styles.txt3}>Wind Deg : {JSON.stringify(val.wind["deg"])}</Text>
      <Text style={styles.txt3}>Country : {JSON.stringify(val.sys["country"])}</Text>
      <Text style={styles.txt3}>Sunrise : {JSON.stringify(val.sys["sunrise"])}</Text>
      <Text style={styles.txt3}>Sunset : {JSON.stringify(val.sys["sunset"])}</Text>
        </View>
      ) : (<View style={{margin:20}}><ActivityIndicator size={'large'}/></View>)}
        </View>


    </View>
    </ImageBackground>
  )
}

export default App

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'repeat'
  },
  input:{
    borderRadius:10,
    borderColor:"red",
    margin:10,
    borderWidth:1,
    backgroundColor:"white"
},
txt1:{
  alignSelf:"center",
  color:"white",
  marginTop:20,
  fontSize:50,
  fontFamily:"cursive",
  fontWeight:"800"
},
txt2:{
  textAlign:"center",
  backgroundColor:"red",
  width:80,
  height:30,
  borderRadius:20,
  alignSelf:"center",
  color:"white",
  fontSize:20,
  fontWeight:"300",
},
txt3:{
      fontSize:20,
      color:"white",
      backgroundColor:"grey",
      opacity:0.5,
      margin:6,
      

},
txt4:{
     fontSize:80,
     color:"red"
}
})