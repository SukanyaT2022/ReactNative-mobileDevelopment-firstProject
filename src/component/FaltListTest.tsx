import React from 'react';
import {View, Text, FlatList} from 'react-native';

const FaltListTest = () => {
  let fruits = ['mango', 'guava', 'banana', 'papaya'];
  return (
    <View>
      {/* map */}
      {/* {fruits.map((item, index) => (
        <View
          key={index}
          style={{borderColor: 'red', borderWidth: 1, padding: 5, marginTop:5}}>
          <Text>{item}</Text>
        </View>
      ))} */}

      {/* flatlist */}

      <FlatList
        data={fruits}
        keyExtractor={item => item} // take the item
        renderItem={({item}) => (
          <View
            style={{
              borderColor: 'red',
              borderWidth: 1,
              padding: 5,
              marginTop: 5,
            }}>
            <Text>{item}</Text>
           
          </View>
        )} // this line act like map== show the view
      />
    </View>
  );
};

export default FaltListTest;
