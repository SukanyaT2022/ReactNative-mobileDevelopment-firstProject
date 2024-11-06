import React, { useState } from 'react'
import {
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';
  
function Todolist() {
    const [storeText, setStoreText]= useState('')
    const [storeArray, setStoreArray] = useState<string[]>([])

//     const handleChangeText=(text:string)=>{
// setStoreText(text)
//     }

const addFunc=()=>{
   setStoreArray([...storeArray, storeText]) 
setStoreText('')
}
  return (
    <View>
<TextInput  value={storeText} style={{ borderColor:'green', borderWidth:2}} onChangeText={(text)=>setStoreText(text)}/>
    <TouchableOpacity onPress={addFunc}><Text>Add</Text></TouchableOpacity>

{/* <TextInput  value='' style={{ borderColor:'green', borderWidth:2}} onChangeText={handleChangeText}/> */}
{
    storeArray.map((item,index)=>(
<View key={index} style={{ borderColor:'pink', borderWidth:2}}><Text>{item}</Text></View>

    ))
}

    </View>
  )
}

export default Todolist