// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import { useFonts } from 'expo-font';
// import { Stack } from 'expo-router';
// import * as SplashScreen from 'expo-splash-screen';
// import { StatusBar } from 'expo-status-bar';
// import { useEffect } from 'react';
// import 'react-native-reanimated';

import { View, Text, Button } from "react-native";
import React, {useState} from 'react';
import OneDice from "@/components/OneDice"
// import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [dice, setDice]=useState(["-","-","-","-","-"])
  const [dicelocked, setDiceLocked] = useState([false, true, false, true, false])

  function lockDice(index:number){
    console.log("LockDiceExec for :",index);
    let newdiceLocked = dicelocked
    newdiceLocked[index]=!dicelocked[index]
    setDiceLocked(newdiceLocked)
    console.log("newdiceLocked",newdiceLocked);
    
  }
  return(
    <View>
      <Text>KNIFFEL</Text>
        <Text>{dicelocked[0]}</Text>
      <View>
      {dice.map((oneDice, index)=>(
        <OneDice dice={dice[index]} dicelocked={dicelocked[index]}/>
      ))}
        {dice.map((oneDice, index)=>(
          <Button 
            key={index}
            color={dicelocked[index]?"red":"green"} 
            title={oneDice} 
            onPress={()=>lockDice(index)}/>)
          )}
      </View>
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
