import { View, Text, Button } from "react-native";

export default function BottomResult(props) {

    function colorfunction(is,shall) {
        let color
        if (is===null) {
            color = "black"
        } else if (is >= shall) {
            color = "green"
        } else {
            color = "red"
        }
        return color
    }
    function setAndReset(newValues){
        props.setBottomResult(newValues)
        props.setThrowCount(0)
        props.setDice([0,0,0,0,0])
        props.setDiceLocked([false, false, false, false, false])
    }
    function setFullHouse(){
        if(props.bottomResult.fullhouse.result!==null){
            return null
        }
        let equalDices=[]
        let newBottomResult={...props.bottomResult}
        for(let i = 1; i < 7 ; i++){
          let NumberCount=props.dice.filter(x=>x===i).length
          equalDices[i]=NumberCount
        }
        if((equalDices.includes(3) && equalDices.includes(2)) || equalDices.includes(5)){
            newBottomResult.fullhouse.result=25
        }else{
            newBottomResult.fullhouse.result=0
        }
        setAndReset(newBottomResult)
    }
    function setSmallStreet(){
        if(props.bottomResult.smallStreet.result!==null){
            return null
        }
        let newBottomResult={...props.bottomResult}
        if((props.dice.includes(1)&&props.dice.includes(2)&&props.dice.includes(3)&&props.dice.includes(4))||
        (props.dice.includes(2)&&props.dice.includes(3)&&props.dice.includes(4)&&props.dice.includes(5))||
        (props.dice.includes(3)&&props.dice.includes(4)&&props.dice.includes(5)&&props.dice.includes(6))){
          newBottomResult.smallStreet.result=30
        }else{
            newBottomResult.smallStreet.result=0
        }
        setAndReset(newBottomResult)
    }
    function setBigStreet(){
        if(props.bottomResult.bigStreet.result!==null){
            return null
        }
        let newBottomResult={...props.bottomResult}
        if((props.dice.includes(1)&&props.dice.includes(2)&&props.dice.includes(3)&&props.dice.includes(4)&&props.dice.includes(5))||
        (props.dice.includes(2)&&props.dice.includes(3)&&props.dice.includes(4)&&props.dice.includes(5)&&props.dice.includes(6)))
        {
          newBottomResult.bigStreet.result=40
        }else{
            newBottomResult.bigStreet.result=0
        }
        setAndReset(newBottomResult)
    }
    function setThreeEqual(){
        if(props.bottomResult.threeEqual.result!==null){
            return null
        }
        let newBottomResult={...props.bottomResult}
        let equalDices=0
        for(let i = 1; i < 7 ; i++){
          let NumberCount=props.dice.filter(x=>x===i).length
          if(equalDices<NumberCount){
            equalDices=NumberCount
          }
        }
        if(equalDices>=3){
            newBottomResult.threeEqual.result=(props.dice[0]+props.dice[1]+props.dice[2]+props.dice[3]+props.dice[4])
        }else{  
            newBottomResult.threeEqual.result=0
        }
        setAndReset(newBottomResult)
    }
    function setFourEqual(){
        if(props.bottomResult.fourEqual.result!==null){
            return null
        }
        let newBottomResult={...props.bottomResult}
        let equalDices=0
        for(let i = 1; i < 7 ; i++){
          let NumberCount=props.dice.filter(x=>x===i).length
          if(equalDices<NumberCount){
            equalDices=NumberCount
          }
        }
        if(equalDices>=4){
            newBottomResult.fourEqual.result=(props.dice[0]+props.dice[1]+props.dice[2]+props.dice[3]+props.dice[4])
        }else{  
            newBottomResult.fourEqual.result=0
        }
        setAndReset(newBottomResult)
    }
    function setYazze(){
        if(props.bottomResult.yazze.result!==null){
            return null
        }
        let newBottomResult={...props.bottomResult}
        let equalDices=0
        for(let i = 1; i < 7 ; i++){
          let NumberCount=props.dice.filter(x=>x===i).length
          if(equalDices<NumberCount){
            equalDices=NumberCount
          }
        }
        if(equalDices>=5){
            newBottomResult.yazze.result=50
        }else{  
            newBottomResult.yazze.result=0
        }
        setAndReset(newBottomResult)
    }
    function setChance(){
        if(props.bottomResult.chance.result!==null){
            return null
        }
        let newBottomResult={...props.bottomResult}
            newBottomResult.chance.result=props.dice[0]+props.dice[1]+props.dice[2]+props.dice[3]+props.dice[4]
        setAndReset(newBottomResult)
    }

    return (
        <View>
            <Text>BottomResults</Text>
            <Button key="fullhouse" 
                title={props.bottomResult.fullhouse.result===null?'set Full House':props.bottomResult.fullhouse.result}
                color={colorfunction(props.bottomResult.fullhouse.result, props.bottomResult.fullhouse.points)} 
                onPress={()=>setFullHouse()}/>
            <Button key="kleine Straße" 
                title={props.bottomResult.smallStreet.result===null?'set small Street':props.bottomResult.smallStreet.result}
                color={colorfunction(props.bottomResult.smallStreet.result, props.bottomResult.smallStreet.points)} 
                onPress={()=>setSmallStreet()}/>
            <Button key="große Straße" 
                title={props.bottomResult.bigStreet.result===null?'set big Street':props.bottomResult.bigStreet.result}
                color={colorfunction(props.bottomResult.bigStreet.result, props.bottomResult.bigStreet.points)} 
                onPress={()=>setBigStreet()}/>
            <Button key="Dreierpasch" 
                title={props.bottomResult.threeEqual.result===null?'set 3 equal':props.bottomResult.threeEqual.result}
                color={colorfunction(props.bottomResult.threeEqual.result, props.bottomResult.threeEqual.points)} 
                onPress={()=>setThreeEqual()}/>
            <Button key="Viererpasch" 
                title={props.bottomResult.fourEqual.result===null?'set 4 Equal':props.bottomResult.fourEqual.result}
                color={colorfunction(props.bottomResult.fourEqual.result, props.bottomResult.fourEqual.points)} 
                onPress={()=>setFourEqual()}/>
            <Button key="Kniffel" 
                title={props.bottomResult.yazze.result===null?'set Yazze':props.bottomResult.yazze.result}
                color={colorfunction(props.bottomResult.yazze.result, props.bottomResult.yazze.points)} 
                onPress={()=>setYazze()}/>
            <Button key="chance" 
                title={props.bottomResult.chance.result===null?'set Chance':props.bottomResult.chance.result}
                color={colorfunction(props.bottomResult.chance.result, props.bottomResult.chance.points)} 
                onPress={()=>setChance()}/>
        </View>
    )
}