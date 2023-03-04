import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Image, TextInput, StyleSheet, Text, View, Platform, StatusBar as stbar, Dimensions, SafeAreaView, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

import latest from '../data/latest.json'
const hheight = Dimensions.get('screen').height

export default function Dashboard({ navigation }) {
    const { width, height } = Dimensions.get('screen')
    const [active, setActive] = useState(0)
    useEffect(()=>{
        latest.map((item)=>{
            console.log(item.content)

        })
    },[])
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
            >
                <View style={{ marginLeft: 10, marginTop:10,marginRight: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Image source={require('../assets/logo.png')} style={{ width: 30, height: 30 }} />
                    <Text style={{ fontWeight: 'bold' }}>Dashboard</Text>
                    {/* <Text style={{ fontWeight: 'bold' }}>Search</Text> */}
                    {/* <EvilIcons name="search" size={24} color="black" /> */}
                    <AntDesign name="search1" size={24} color="black" />
                </View>
                <Card style={{ marginTop: 10, alignSelf: 'center', height: 80, width: width - 20, backgroundColor: '#F0F3F7', justifyContent: 'center' }}>
                    <View style={{ marginLeft: 10, marginRight: 10, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>

                        <View>
                            <Image source={require('../assets/mule.png')} style={{ width: 50, height: 50, borderRadius: 50 / 2 }} />
                        </View>
                        <View style={{ marginLeft: 20 }}>
                            <View style={{flexDirection:'row'}}>
                            <Text style={{ color: 'tomato', fontWeight: 'bold', fontSize: 19 }}>Muluken M </Text>
                            <AntDesign name="edit" size={24} color="black" />
                            </View>
                            <Text>Information Technology - 3rd year</Text>
                        </View>
                    </View>
                </Card>

                <Text style={{ marginLeft: 10, marginTop: 10, fontSize: 20 }}>
                    Welcome, Muluken</Text>

                <View>
                    <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <View style={{ padding: 10, borderRadius: 20, backgroundColor: '#17A589', height: 130, width: 180 }}>
                            <Entypo name="newsletter" size={24} style={{ alignSelf: 'flex-end' }} color="#fff" />
                            <Text style={{ alignSelf: 'center', color: '#fff', fontWeight: 'bold', fontSize: 35 }}>3</Text>
                            <Text style={{ color: '#fff', fontSize: 18 }}>Recently Updated</Text>
                            <Text style={{ color: '#fff', fontSize: 18 }}>Items</Text>
                        </View>
                        <View style={{ padding: 10,  borderRadius: 20, backgroundColor: 'tomato', height: 130, width: 180 }}>
                            <Ionicons name="alarm" size={24} style={{ alignSelf: 'flex-end' }} color="#fff" />
                            <Text style={{ alignSelf: 'center', color: '#fff', fontWeight: 'bold', fontSize: 35 }}>120</Text>
                            <Text style={{ color: '#fff', fontSize: 18 }}>Outdated / expired</Text>
                            <Text style={{ color: '#fff', fontSize: 18 }}>Items</Text>
                        </View>
                    </View>
                    <View style={{  marginTop: 10, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <View style={{ padding: 10,  borderRadius: 20, backgroundColor: '#1B54DB', height: 130, width: 180 }}>
                            <MaterialIcons name="category" size={24} style={{ alignSelf: 'flex-end' }} color="#fff" />
                            <Text style={{ alignSelf: 'center', color: '#fff', fontWeight: 'bold', fontSize: 35 }}>7</Text>
                            <Text style={{ color: '#fff', fontSize: 18 }}>Item under my</Text>
                            <Text style={{ color: '#fff', fontSize: 18 }}>category</Text>
                        </View>
                        <View style={{padding: 10,  borderRadius: 20, backgroundColor: '#8E44AD', height: 130, width: 180 }}>
                            <FontAwesome name="sticky-note" size={24} style={{ alignSelf: 'flex-end' }} color="#fff" />
                            <Text style={{ alignSelf: 'center', color: '#fff', fontWeight: 'bold', fontSize: 35 }}>13</Text>
                            <Text style={{ color: '#fff', fontSize: 18 }}>Active Items</Text>
                            <Text style={{ color: '#fff', fontSize: 18 }}>Items</Text>
                        </View>
                    </View>

                </View>

                <View>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}>
                        <Text onPress={() => setActive(0)} style={{ margin: 20, fontWeight: active == 0 ? 'bold' : '', color: active == 0 ? '#2062F9' : '#CBD1DF' }}>Most Recent</Text>
                        <Text onPress={() => setActive(1)} style={{ margin: 20, fontWeight: active == 1 ? 'bold' : '', color: active == 1 ? '#2062F9' : '#CBD1DF' }}>Top Urgent</Text>
                        <Text onPress={() => setActive(2)} style={{ margin: 20, fontWeight: active == 2 ? 'bold' : '', color: active == 2 ? '#2062F9' : '#CBD1DF' }}>Registrar's</Text>
                        <Text onPress={() => setActive(3)} style={{ margin: 20, fontWeight: active == 3 ? 'bold' : '', color: active == 3 ? '#2062F9' : '#CBD1DF' }}>Administration</Text>
                        <Text onPress={() => setActive(4)} style={{ margin: 20, fontWeight: active == 4 ? 'bold' : '', color: active == 4 ? '#2062F9' : '#CBD1DF' }}>Acadamics</Text>
                    </ScrollView>
                </View>

                <View>
                    {
                        latest.map((item)=>{
                            return (
                                <View style={{ marginTop: 10, alignSelf: 'center', borderRadius: 20, backgroundColor: '#8E44AD', height: 200, width: width - 40 }}>
<Text style={{fontWeight:'bold',padding:20,color:'#fff', fontSize:20, alignSelf:'flex-start'}}>{item.title}</Text>
<Text style={{paddingLeft:10,paddingRight:10,color:'#fff', fontSize:17, alignSelf:'flex-start'}}>{item.content}</Text>
                     
                        <View style={{  flex: 1,
  justifyContent: 'flex-end',
  flexDirection:'column'}}>
    <View style={{padding:20,paddingBotom:30,flexDirection:'row', justifyContent:'space-evenly'}}>
    <AntDesign name="like1" size={16} color="#1B54DB" >
    <Text> {item.likes}</Text>
    </AntDesign>

    <AntDesign name="eye" size={16} color="black" >
        <Text> {item.seen}</Text>
    </AntDesign>
    {/* <AntDesign name="like1" size={16} color="#fff" > */}
    <FontAwesome name="commenting-o" size={16} color="black" >
    <Text> {item.comments}</Text>
    </FontAwesome>

                            
                           
                            </View>
                        </View>
                        </View>
                            )
                    })
                }
                   
                  
                </View>
            </ScrollView>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'android' ? stbar.currentHeight : 0,
        // justifyContent:'center',
        // height: hheight
    },
});
