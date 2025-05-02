import { View, Text } from "react-native";

export default function OneDice(props){
    return(
        <View>
            <Text>
                ONEDICE: {props.dice}:{props.dicelocked?"true":"false"}
            </Text>
        </View>
    )
}