import { Text, StyleSheet, View,FlatList,TouchableOpacity ,Image,ScrollView} from 'react-native'
import React, { Component } from 'react'
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Foundation } from '@expo/vector-icons';


const data=[
    {
      id:1,
      img:'https://img.tastykitchen.vn/2022/03/28/com-suon-cha-cua-7c0c.jpg',
      name:'Com Tam',
      gia:'10.000KW',
      time:'30~60'
    },
    {
      id:2,
      img:'https://cdn.dayphache.edu.vn/wp-content/uploads/2020/02/mon-tra-sua-tran-chau.jpg',
      name:'Tra Sua',
      gia:'5.000KW',
      time:'30~60'
      
    },
    {
      id:3,
      img:'https://p.kindpng.com/picc/s/723-7233345_vietnamese-cuisine-png-pho-png-transparent-png.png',
      name:"Pho",
      gia:'10KW',
      time:'20~40'
    },
    {
      id:4,
      img:"https://cdn.tgdd.vn/2021/05/CookRecipe/Avatar/banh-mi-thit-bo-nuong-thumbnail-1.jpg",
      name:'Banh Mi',
      gia:'7000KW',
      time:'20~40'
    },
    {
      id:5,
      img:"https://quanannhanhbinhminh.files.wordpress.com/2017/04/bun-thit-nuong-chay-ngon.jpg",
      name:'Bun Thit Nuong',
      gia:'10000KW',
      time:'20~40'
    },
    {
      id:6,
      img:"https://i.ytimg.com/vi/C1P1Cw9J1-I/maxresdefault.jpg",
      name:'Bun Rieu',
      gia:'10000KW',
      time:'20~40'
    },
    
  ]
  

export default function AllScreen ({navigation ,p}) {
    return (
      <View style={{flex:1}}>
     

        <ScrollView style={{flex:1}}>
        <FlatList 
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({item})=>{
                  return(
                    <TouchableOpacity style={{height:105,borderRadius:10,backgroundColor:'white',flexDirection:'row',marginBottom:5,marginTop:5,justifyContent:'space-between'}}>
                      <View style={{position:'relative'}}>
                      <Foundation style={{position:'absolute',zIndex:1,left:4}} name="burst-sale" size={40} color="orange" />
                      <FontAwesome style={{position:'absolute',zIndex:1,right:8,top:4}} name="heart" size={20} color="red" />
                      <Image style={{width:130,height:100,borderRadius:10}} source={{uri:item.img}} />
                      </View>
                      <View style={{alignItems:'center',marginLeft:10,marginTop:10}} >
                        <Text style={{color:'red',fontSize:16}}>{item.gia}</Text>
                        <Text style={{fontSize:18}}>{item.name}</Text>
                        <View style={{flexDirection:'row'}}>
                        <AntDesign name="star" size={16} color="orange" />
                        <AntDesign name="star" size={16} color="orange" />
                        <AntDesign name="star" size={16} color="orange" />
                        <AntDesign name="star" size={16} color="orange" />
                        <AntDesign name="star" size={16} color="black" />
                        </View>
                        <View style={{flexDirection:"row",marginTop:4}}>
                        <AntDesign style={{marginTop:3}} name="clockcircleo" size={16} color="black" />
                        <Text style={{fontSize:16,marginLeft:8}}>{item.time} <Text style={{color:'#5ac3e8'}}>min</Text></Text>
                        </View>

                      </View>

                      <View>
                        <TouchableOpacity onPress={({props})=>navigation.navigate('buy')} style={{height:80,width:80,margin:10,backgroundColor:'#e91e62',borderRadius:30,alignItems:'center'}}>
                            <Text style={{fontSize:24,fontWeight:'bold',marginTop:20,color:'white'}}>Oder</Text>
                        </TouchableOpacity>
                      </View>
                      
  
                    </TouchableOpacity>
                  )
                }}
               />
        </ScrollView>
        
      </View>
    )
}

const styles = StyleSheet.create({})