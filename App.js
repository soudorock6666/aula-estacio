import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TextInput,Button,ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView> 
      <Text style={styles.text}>𝕷𝖔𝕾𝖙 𝕾𝕻𝖆𝖈𝖊 𝕴𝖓 𝕿𝖍𝖊 𝕯𝖆𝕽𝖐 𝖂𝖊𝖇!</Text>
      <Image source={require('./assets/logo.jpg')}style={styles.logo}/>
      <Image source={require('./assets/giphy.gif')}style={styles.giphy}/>
      <TextInput style={styles.TextInput} placeholder='Osama Bin laden'/>
      <Button variant="text">Text</Button>
      <View style={styles.quadradoA}/>
      <View style={styles.quadradoB}/>
      <View style={styles.quadradoc}/>
      <Text style={styles.text2}>
      Soyuz nerushimy respublik svobodnykh
      S̷p̷l̷o̷t̷i̷l̷a̷ ̷n̷a̷v̷e̷k̷i̷ ̷v̷e̷l̷i̷k̷a̷y̷a̷ ̷R̷u̷s̷'̷!̷ ̷D̷a̷ ̷z̷d̷r̷a̷v̷s̷t̷v̷u̷y̷e̷t̷ ̷s̷o̷z̷d̷a̷n̷n̷y̷ ̷v̷o̷l̷e̷y̷ ̷n̷a̷r̷o̷d̷o̷v̷ ̷Y̷e̷d̷i̷n̷y̷,̷ ̷m̷o̷g̷u̷c̷h̷y̷ ̷S̷o̷v̷e̷t̷s̷k̷y̷ ̷S̷o̷y̷u̷z̷!̷ ̷ ̷S̷l̷a̷v̷s̷y̷a̷,̷ ̷O̷t̷e̷c̷h̷e̷s̷t̷v̷o̷ ̷n̷a̷s̷h̷e̷ ̷s̷v̷o̷b̷o̷d̷n̷o̷y̷e̷ ̷D̷r̷u̷z̷h̷b̷y̷ ̷n̷a̷r̷o̷d̷o̷v̷ ̷n̷a̷d̷y̷o̷z̷h̷n̷y̷ ̷o̷p̷l̷o̷t̷!̷ ̷P̷a̷r̷t̷i̷y̷a̷ ̷L̷e̷n̷i̷n̷a̷ ̷-̷ ̷s̷i̷l̷a̷ ̷n̷a̷r̷o̷d̷n̷a̷y̷a̷ ̷N̷a̷s̷ ̷k̷ ̷t̷o̷r̷z̷h̷e̷s̷t̷v̷u̷ ̷k̷o̷m̷m̷u̷n̷i̷z̷m̷a̷ ̷v̷e̷d̷y̷o̷t̷!̷ ̷ ̷S̷k̷v̷o̷z̷'̷ ̷g̷r̷o̷z̷y̷ ̷s̷i̷y̷a̷l̷o̷ ̷n̷a̷m̷ ̷s̷o̷l̷n̷t̷s̷e̷ ̷s̷v̷o̷b̷o̷d̷y̷ ̷I̷ ̷L̷e̷n̷i̷n̷ ̷v̷e̷l̷i̷k̷y̷ ̷n̷a̷m̷ ̷p̷u̷t̷'̷ ̷o̷z̷a̷r̷i̷l̷ ̷N̷a̷ ̷p̷r̷a̷v̷o̷y̷e̷ ̷d̷e̷l̷o̷ ̷o̷n̷ ̷p̷o̷d̷n̷y̷a̷l̷ ̷n̷a̷r̷o̷d̷y̷ ̷N̷a̷ ̷t̷r̷u̷d̷ ̷I̷ ̷n̷a̷ ̷p̷o̷d̷v̷i̷g̷i̷ ̷n̷a̷s̷ ̷v̷d̷o̷k̷h̷n̷o̷v̷i̷l̷!̷ ̷ ̷S̷l̷a̷v̷s̷y̷a̷,̷ ̷O̷t̷e̷c̷h̷e̷s̷t̷v̷o̷ ̷n̷a̷s̷h̷e̷ ̷s̷v̷o̷b̷o̷d̷n̷o̷y̷e̷ ̷D̷r̷u̷z̷h̷b̷y̷ ̷n̷a̷r̷o̷d̷o̷v̷ ̷n̷a̷d̷y̷o̷z̷h̷n̷y̷ ̷o̷p̷l̷o̷t̷!̷ ̷P̷a̷r̷t̷i̷y̷a̷ ̷L̷e̷n̷i̷n̷a̷ ̷-̷ ̷s̷i̷l̷a̷ ̷n̷a̷r̷o̷d̷n̷a̷y̷a̷ ̷N̷a̷s̷ ̷k̷ ̷t̷o̷r̷z̷h̷e̷s̷t̷v̷u̷ ̷k̷o̷m̷m̷u̷n̷i̷z̷m̷a̷ ̷v̷e̷d̷y̷o̷t̷!̷ ̷ ̷V̷ ̷p̷o̷b̷e̷d̷e̷ ̷b̷e̷s̷s̷m̷e̷r̷t̷n̷y̷k̷h̷ ̷i̷d̷e̷y̷ ̷k̷o̷m̷m̷u̷n̷i̷z̷m̷a̷ ̷M̷y̷ ̷v̷i̷d̷i̷m̷ ̷g̷r̷y̷a̷d̷u̷s̷h̷c̷h̷e̷y̷e̷ ̷n̷a̷s̷h̷e̷y̷ ̷s̷t̷r̷a̷n̷y̷ ̷I̷ ̷k̷r̷a̷s̷n̷o̷m̷u̷ ̷z̷n̷a̷m̷e̷n̷i̷ ̷s̷l̷a̷v̷n̷o̷y̷ ̷o̷t̷c̷h̷i̷z̷n̷y̷ ̷M̷y̷ ̷b̷u̷d̷e̷m̷ ̷v̷s̷e̷g̷d̷a̷ ̷b̷e̷z̷z̷a̷v̷e̷t̷n̷o̷ ̷v̷e̷r̷n̷y̷!̷ ̷ ̷S̷l̷a̷v̷s̷y̷a̷,̷ ̷O̷t̷e̷c̷h̷e̷s̷t̷v̷o̷ ̷n̷a̷s̷h̷e̷ ̷s̷v̷o̷b̷o̷d̷n̷o̷y̷e̷ ̷D̷r̷u̷z̷h̷b̷y̷ ̷n̷a̷r̷o̷d̷o̷v̷ ̷n̷a̷d̷y̷o̷z̷h̷n̷y̷ ̷o̷p̷l̷o̷t̷!̷ ̷P̷a̷r̷t̷i̷y̷a̷ ̷L̷e̷n̷i̷n̷a̷ ̷-̷ ̷s̷i̷l̷a̷ ̷n̷a̷r̷o̷d̷n̷a̷y̷a̷ ̷N̷a̷s̷ ̷k̷ ̷t̷o̷r̷z̷h̷e̷s̷t̷v̷u̷ ̷k̷o̷m̷m̷u̷n̷i̷z̷m̷a̷ ̷v̷e̷d̷y̷o̷t̷!̷
        </Text>
        <Image source={require('./assets/leon.jpg')}style={styles.leon}/>
      <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 90,
    color: 'red',
    marginLeft: 220,
  },
  logo:{
    width: 60,
    height: 150,
    opacity: 0.2,
  },
  giphy:{
    opacity: 0.8,
    marginLeft:800,
    marginRight:400,
},
text2:{
 fontSize: 30,
 margin: 20,
color: "silver",
fontStyle: "bold"
},
quadradoA:{
backgroundColor:'red',
height: 100
},
quadradoB:{
backgroundColor:'purple',
height: 100
},
leon:{
marginLeft:320,
},
});
