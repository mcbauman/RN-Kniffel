import { View, Text } from "react-native";
import React, { useState } from 'react';
import Dices from '@/components/Dices'
import UpperResult from '@/components/UpperResult'

export default function RootLayout() {
  const [dice, setDice] = useState([0, 0, 0, 0, 0])
  const [dicelocked, setDiceLocked] = useState([false, false, false, false, false])
  const [throwCound, setThrowCount] = useState(0)
  const [upperResult, setUpperResult] = useState([null,null,null,null,null,null])

  return (
    <View>
      <Text>KNIFFEL</Text>
      <Dices dice={dice} setDice={setDice} dicelocked={dicelocked} 
        setDiceLocked={setDiceLocked} throwCound={throwCound} setThrowCount={setThrowCount} />
      <UpperResult dice={dice} setThrowCount={setThrowCount} 
        upperResult={upperResult} setUpperResult={setUpperResult} setDice={setDice}
        setDiceLocked={setDiceLocked} />
    </View>
  )
}
