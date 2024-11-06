import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';
  

const FlatListMyown = () => {
    let pet = ['cat', 'dog', 'duck', 'bird', 'turtle']
  return (
    <View>
  {
    pet.map((item,index)=>(
<View key={index} style={{borderWidth:5, borderColor:'green', borderRadius:10, marginTop:5,}}><Text>{item}</Text></View>
    ))
  }      


    </View>
  )
}

export default FlatListMyown