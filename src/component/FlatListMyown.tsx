import React from 'react'
import {
    FlatList,
    Text,
    View,
  } from 'react-native';
  

const FlatListMyown = () => {
    let pet = ['cat', 'dog', 'duck', 'bird', 'turtle']
  return (
    <View>
  {/* {
    pet.map((item,index)=>(
<View key={index} style={{borderWidth:5, borderColor:'green', borderRadius:10, marginTop:5,}}><Text>{item}</Text></View>
    ))
  }       */}

  <FlatList
  data={pet}
  keyExtractor={item=>item}
renderItem={({item})=>(
<View  style={{borderWidth:10, borderColor:'pink', 
borderRadius:10, marginTop:5,}}><Text>{item}</Text></View>
)}
  />


    </View>
  )
}

export default FlatListMyown