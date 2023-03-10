// import { StatusBar } from 'expo-status-bar';
import {Image,StatusBar, StyleSheet, Text, View, Platform, StatusBar as stbar, Dimensions, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
const hheight = Dimensions.get('screen').height

export default function Splash({navigation}) {
  const {width,height} = Dimensions.get('screen')
  return (
    <ImageBackground source={require('./assets/image.png')} resizeMode='cover'>
    <SafeAreaView style={styles.container}>
 
      
      <Image source={require('./assets/logo.png')}
style={{width:150,height:150, alignSelf:'center', marginTop:-50}} />


<Text style={{justifyContent:'center', alignItems:'center', fontSize:20, alignSelf:'center'}}>
            My Notice Board, Get reminders, urgent notices and announcements in realtime</Text>
<TouchableOpacity onPress={()=>navigation.navigate('Welcome')} style={{borderRadius:20,alignSelf:'center',alignItems:'center',width:200, height:50, color:'#fff', backgroundColor:'#087AFC', marginTop:20, justifyContent:'center'}}>
<Text style={{justifyContent:'center', fontSize:20,color:'#fff'}}>Get Started</Text>
</TouchableOpacity>

      <StatusBar style="auto" />
    </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
marginTop:Platform.OS==='android'?stbar.currentHeight:0,
justifyContent:'center',
height:hheight
  },
});
