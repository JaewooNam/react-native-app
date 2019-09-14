import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  switch (aciton.type) {
    case 'change_red':
      // never going to do like state.red = state.red - 15..
      return {...state, red: state.red + action.amount }
    case 'change_green':
      return {...state, green: state.green + action.amount }
    case 'change_blue':
      return {...state, blue: state.blue + action.amount }
    default:
      return state;
  }
}

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
  const { red, green, blue} = state

  return (
    <View>
      <ColorCounter
        onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENT})}
        onDecrease={() => dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT})}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_INCREMENT})}
        onDecrease={() => dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT})}
        color="Blue"
      />
      <ColorCounter
        onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_INCREMENT})}
        onDecrease={() => dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT})}
        color="Green"
      />
      <View style={{
        height: 150,
        width: 150,
        backgroundColor: `rgb(${red}, ${green}, ${blue})`
      }}/>
    </View>
  )
}

const styles = StyleSheet.create({})

export default SquareScreen
