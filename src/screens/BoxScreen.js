import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <Text style={styles.viewOneStyle}>Child #1</Text>
      <Text style={styles.viewTwoStyle}>Child #2</Text>
      <Text style={styles.viewThreeStyle}>Child #3</Text>
    </View>
  )
}

/*
  < Property >
  Parent: alignItems, justifyContent, flexDirection
  Child: flex, alignSelf
*/
const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 3,
    borderColor: 'black',
    // alignItems: 'center', // stretch, center, flex-end
    // flexDirection: 'column', // column, row
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between'
    // justifyContent: 'flex-start', // space-between, space-around,
  },
  viewOneStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'red'
  },
  viewTwoStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'green',
    marginTop: 50,
    top: 50
  },
  viewThreeStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'purple',
  },
  // textOneStyle: {
  //   borderWidth: 3,
  //   borderColor: 'red',
  //   // flex: 4
  // },
  // textTwoStyle: {
  //   borderWidth: 3,
  //   borderColor: 'red',
  //   // alignSelf: 'center', // flex-end, flex-start
  //   fontSize: 18,
  //   position: 'absolute',
  //   top: 0,
  //   right: 0,
  //   bottom: 0,
  //   left: 0,
  // },
  // textThreeStyle: {
  //   borderWidth: 3,
  //   borderColor: 'red',
  // }
});

export default BoxScreen
