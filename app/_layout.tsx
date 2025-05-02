import { View, Text, Button, StyleSheet } from "react-native";
import React, {useState} from 'react';
import Dices from '@/components/Dices'

export default function RootLayout() {
  const [dice, setDice]=useState([0,0,0,0,0])
  const [dicelocked, setDiceLocked] = useState([false, false, false, false, false])

  return(
    <View>
      <Text>KNIFFEL</Text>
        <Text>{dicelocked[0]}</Text>
      <Dices dice={dice} setDice={setDice} dicelocked={dicelocked} setDiceLocked={setDiceLocked} />
    </View>
  )
}
