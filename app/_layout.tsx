import { View, Text } from "react-native";
import React, { useState } from 'react';
import Dices from '@/components/Dices'
import UpperResult from '@/components/UpperResult'
import ButtomResult from '@/components/BottomResult'

export default function RootLayout() {
  const [dice, setDice] = useState([0, 0, 0, 0, 0])
  const [dicelocked, setDiceLocked] = useState([false, false, false, false, false])
  const [throwCound, setThrowCount] = useState(0)
  const [upperResult, setUpperResult] = useState([null,null,null,null,null,null])
  const [bottomResult, setBottomResult] = useState({
    fullhouse:{points:25,result:null},
    smallStreet:{points:30, result:null},
    bigStreet:{points:40, result:null},
    threeEqual:{points:18, result:null},
    fourEqual:{points:18, result:null},
    yazze:{points:50, result:null},
    chance:{points:18, result:null}
  })

  return (
    <View>
      <Text>KNIFFEL</Text>
      <Dices dice={dice} setDice={setDice} dicelocked={dicelocked} 
        setDiceLocked={setDiceLocked} throwCound={throwCound} setThrowCount={setThrowCount} />
      <UpperResult dice={dice} setThrowCount={setThrowCount} 
        upperResult={upperResult} setUpperResult={setUpperResult} setDice={setDice}
        setDiceLocked={setDiceLocked} />
      <ButtomResult dice={dice} setThrowCount={setThrowCount} 
        bottomResult={bottomResult} setBottomResult={setBottomResult} setDice={setDice}
        setDiceLocked={setDiceLocked} />
    </View>
  )
}
