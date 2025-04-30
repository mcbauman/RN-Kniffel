// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import { useFonts } from 'expo-font';
// import { Stack } from 'expo-router';
// import * as SplashScreen from 'expo-splash-screen';
// import { StatusBar } from 'expo-status-bar';
// import { useEffect } from 'react';
// import 'react-native-reanimated';

import { View, Text } from "react-native";
import React, {useState} from 'react';

// import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [dice, setDice] = useState({one:"-"},{two:"-"},{three:"-"},{four:"-"},{five:"-"})
  const [diceLock, setDiceLock] = useState([{one:false},{two:false},{three:false},{four:false},{five:false}])
  const [trowsCount,setTrowsCount] = useState(0)
  const [results, setResults] = useState([{one:false},{two:false},{three:false},{four:false},{five:false}])
  const [results2, setResults2] = useState({equals:[false,false,false],chance:false})
  //const [allDicePoints, setAllDicePoints] = computed(()=>dice.value[0]+dice.value[1]+dice.value[2]+dice.value[3]+dice.value[4])
  //const [highscore, setHifhscore] = useState(JSON.parse(localStorage.getItem("highscore"))||0)
  const [score, setScore] = useState(0)

function lockDice(number){
  setDiceLock({...diceLock, diceLock[number]:!diceLock[number]})
}

function throwDice(){
  for(let i = 0; i<5; i++){
    if(!diceLock.value[i]){
      dice.value[i]=Math.ceil(Math.random()*6)
    }
  }
  trowsCount.value++
}

function smallReset(){
  trowsCount.value=0
  diceLock.value=[false, false, false, false, false]
  dice.value=["-","-","-","-","-"]
  console.log("SmallReset");
  countScore()
  writeScore()
}

function countCertainkind(kind){
  let sum=0
  dice.value.forEach(oneDice => {
    if(oneDice===kind){
      sum=sum+kind
    }
  });
  results.value[kind-1]=sum
  smallReset()
}

function checkEquals(number){
  let equalDices=0
  for(let i = 1; i < 7 ; i++){
    let NumberCount=dice.value.filter(x=>x===i).length
    if(equalDices<NumberCount){
      equalDices=NumberCount
    }
  }
  if(equalDices>=number){
    if(number===5){
      results2.value.equals[number-3]=50
    }else{
      results2.value.equals[number-3]=allDicePoints.value
    }
  }else{  
    results2.value.equals[number-3]=0
  }
  smallReset()
}

function checkSmallStreet(){
  if((dice.value.includes(1)&&dice.value.includes(2)&&dice.value.includes(3)&&dice.value.includes(4))||
    (dice.value.includes(2)&&dice.value.includes(3)&&dice.value.includes(4)&&dice.value.includes(5))||
    (dice.value.includes(3)&&dice.value.includes(4)&&dice.value.includes(5)&&dice.value.includes(6))){
      results2.value.smallStreet=30
    }else{
      results2.value.smallStreet=0
    }
    smallReset()
}

function checkBigStreet(){
  if((dice.value.includes(1)&&dice.value.includes(2)&&dice.value.includes(3)&&dice.value.includes(4)&&dice.value.includes(5))||
    (dice.value.includes(2)&&dice.value.includes(3)&&dice.value.includes(4)&&dice.value.includes(5)&&dice.value.includes(6))){
      results2.value.bigStreet=40
    }else{
      results2.value.bigStreet=0
    }
    smallReset()
}

function checkFullHouse(){
  let equalDices=[]
  for(let i = 1; i < 7 ; i++){
    let NumberCount=dice.value.filter(x=>x===i).length
    equalDices[i]=NumberCount
  }
  if((equalDices.includes(3) && equalDices.includes(2)) || equalDices.includes(5)){
    results2.value.fullHouse=25
  }else{
    results2.value.fullHouse=0
  }
  smallReset()
}

function setChance(){
  results2.value.chance=allDicePoints.value
  smallReset()
}

function newGame(){
  results.value = [false, false, false, false, false,false]
  results2.value = {equals:[false,false,false],chance:false}
  smallReset()
  highscore.value = ref(JSON.parse(localStorage.getItem("highscore"))||0)
  score.value=0
}

function countScore(){
  score.value=0
  results.value.forEach(element=>{
    if(element){
      score.value += element
    }
  })
  results2.value.equals.forEach(element=>{
    if(element){
      score.value += element
    }
  })
  if(results2.value.smallStreet){
    score.value += results2.value.smallStreet
  }
  if(results2.value.bigStreet){
    score.value += results2.value.bigStreet
  }
  if(results2.value.fullHouse){
    score.value += results2.value.fullHouse
  }
  if(results2.value.chance){
    score.value += results2.value.chance
  }
  console.log("countScoreExec",score.value);
  
}

function writeScore(){
  if(score.value>highscore.value){
    localStorage.setItem("highscore",JSON.stringify(score.value))
    console.log("NEWHIGHSCOREWRITTEN",score.value);
  }
}
  return(
    <View>
      <Text>KNIFFEL</Text>
    </View>
  )
  // const colorScheme = useColorScheme();
  // const [loaded] = useFonts({
  //   SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  // });

  // useEffect(() => {
  //   if (loaded) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [loaded]);

  // if (!loaded) {
  //   return null;
  // }

  // return (
  //   <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
  //     <Stack>
  //       <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
  //       <Stack.Screen name="+not-found" />
  //     </Stack>
  //     <StatusBar style="auto" />
  //   </ThemeProvider>
  // );
}
