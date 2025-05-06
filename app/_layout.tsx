import { View, Text, Button } from "react-native";
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

  function newGame(){
    setUpperResult([null,null,null,null,null,null])
    setBottomResult({
      fullhouse:{points:25,result:null},
      smallStreet:{points:30, result:null},
      bigStreet:{points:40, result:null},
      threeEqual:{points:18, result:null},
      fourEqual:{points:18, result:null},
      yazze:{points:50, result:null},
      chance:{points:18, result:null}
    })
    setThrowCount(0)
    setDice([0,0,0,0,0])
    setDiceLocked([false, false, false, false, false])
  }

  return (
    <View style={{backgroundColor:'grey', flex:1, justifyContent:'space-evenly'}}>
      <Dices dice={dice} setDice={setDice} dicelocked={dicelocked} 
        setDiceLocked={setDiceLocked} throwCound={throwCound} setThrowCount={setThrowCount} />
      {/* <View style={{height:20}}></View> */}
      <UpperResult dice={dice} setThrowCount={setThrowCount} 
        upperResult={upperResult} setUpperResult={setUpperResult} setDice={setDice}
        setDiceLocked={setDiceLocked} />
      <View style={{height:20}}></View>
      <ButtomResult dice={dice} setThrowCount={setThrowCount} 
        bottomResult={bottomResult} setBottomResult={setBottomResult} setDice={setDice}
        setDiceLocked={setDiceLocked} />
      {/* <View style={{height:20}}></View> */}
      <View style={{width:220, margin:"auto"}}>
        <Button 
          title="newGame" onPress={()=>newGame()}/>
      </View>
      <View style={{height:20}}></View>
    </View>
  )
}
