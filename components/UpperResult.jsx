import { View, Text, Button } from "react-native";

export default function UpperResult(props) {

    function colorfunction(res, index) {
        let color
        if (res===null) {
            color = "black"
        } else if (res >= (index + 1) * 3) {
            color = "green"
        } else {
            color = "rgb(168, 32, 32)"
        }
        return color
    }
    function setValue(index){
        if(props.upperResult[index]===null){
            let diceValue=0
            let newUpperResult=[...props.upperResult]
            props.dice.forEach((dice)=>{
                if(dice===index+1)
                {diceValue=diceValue+dice}
                else{
                    console.log("else",diceValue);
                    
                }
                return diceValue
            })
            console.log(diceValue);
            newUpperResult[index]=diceValue
            props.setUpperResult(newUpperResult)
            props.setThrowCount(0)
            props.setDice([0,0,0,0,0])
            props.setDiceLocked([false, false, false, false, false])
        }
    }
    return (
        <View style={{width:220, margin:"auto"}}>
            <Text>UPPERRESULT</Text>
            {props.upperResult.map((result, index) => (
                <Button key={index} title={result===null ? index+1+"-er" : result } 
                    color={colorfunction(result, index)} onPress={()=>setValue(index)}/>
            ))}
        </View>
    )
}