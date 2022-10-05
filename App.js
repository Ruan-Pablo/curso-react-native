import React from 'react';
import { Text, View , Image, TouchableOpacity, BackHandler} from "react-native";
import {image} from './resources'
import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light_Italic,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black_Italic,
} from '@expo-google-fonts/montserrat';

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light_Italic,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black_Italic,
  });

  if (!fontsLoaded) {
    return <Text> Carregando </Text>
  }

  function handle(){
    console.log("tenta ai garai");
  }

  return ( 
    <View
      style= {{
        alignSelf: "center",
        justifyContent: "center",
        flex : 1,
        alignItems: "center"
      }}
    >
      <Text
        style={{fontSize: 24,
          color: "#04BFBF",
          fontFamily: 'Montserrat_700Bold',
          textAlign: "center" 
        }}
      > 
        Acompanhe a LearningLab de Forma Fácil
      </Text>

      <Image 
      source={image}
      style={{
        height: 250,
        width: 250,
      }}/>

      <Text
      style={{
        fontSize: 16,
        color: "#04BFBF",
        paddingHorizontal:30,
        paddingVertical:20,
        textAlign: "center"
      }}>
        Não esqueça de acompanhar nossas redes sociais. Nós cuidamos de lembrar você sempre que precisar
      </Text>
        
      <TouchableOpacity 
        onPress={()=> handle()}
        style={{
          height:50,
          width: 50,
          backgroundColor: '#04bfbf',
          borderRadius:10,
          alignSelf: "center",
          justifyContent: "center",
        }}
      >
        <Text 
          style={{
            alignSelf: "center",
            fontSize:24,  
            color:'white',

          }}
        >
          ->
        </Text>
      </TouchableOpacity>
    </View>
  );
}