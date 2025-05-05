import { View, Button } from "react-native"

export default function Dices(props){
    function lockDice(index){
        let newdiceLocked = [...props.dicelocked]
        newdiceLocked[index]=!props.dicelocked[index]
        props.setDiceLocked(newdiceLocked)
      }
      function rollDices(){
        let newDice=props.dice.map((oldDice, index)=>{
          if(!props.dicelocked[index]){
            const OneNewdice=Math.ceil(Math.random()*6)
            return OneNewdice
          }else{
            return oldDice
          }
        })
        props.setDice(newDice)
        props.setThrowCount(props.throwCound+1)
      }
    
    return (
        <View style={{flex:1, flexDirection:"row", justifyContent:'space-between', width:220, margin:"auto"}}>
            {props.dice.map((oneDice, index)=>(
                <Button 
                key={index}
                color={props.dicelocked[index]?"blue":"green"} 
                title={oneDice.toString()} 
                onPress={()=>lockDice(index)}/>
                ))}
            {
                props.throwCound<3?
                <Button 
                    title="rollDice"
                    onPress={()=>rollDices()}
                />:null
        }
        </View>
    )
}