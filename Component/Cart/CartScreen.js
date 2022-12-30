import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Button
} from "react-native";
import React, { Component } from "react";
import { AntDesign } from "@expo/vector-icons";

export default class CartScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* head */}
        <View style={{ height: 80, backgroundColor: "white" }}>
          <View
            style={{
              justifyContent: "space-between",
              marginLeft: 20,
              marginRight: 20,
              marginTop: 30,
              flexDirection: "row",
            }}
          >
            <Text style={{ fontSize: 24, fontWeight: "bold", color: "green" }}>
              Cart
            </Text>

            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Text style={{ fontSize: 18, color: "green", marginRight: 10 }}>
                1 Item
              </Text>
              <AntDesign
                style={{ marginTop: 5 }}
                name="heart"
                size={20}
                color="red"
              />
            </View>
          </View>
        </View>

        {/* body */}
        <View style={{ flex: 1 }}>
          {/* item */}
          <View
            style={{
              height: 100,
              margin: 10,
              backgroundColor: "white",
              borderRadius: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Image
              style={{ height: 80, width: 90, margin: 10, borderRadius: 10 }}
              source={{
                uri: "https://i.ytimg.com/vi/VuZoI4WRW9Q/maxresdefault.jpg",
              }}
            />
            <View style={{ flex: 1, marginTop: 10 }}>
              <Text style={{ fontSize: 18 }}>Com Tam</Text>
              <Text>10.000KW</Text>

              <View
                style={{
                  height: 25,
                  width: 100,
                  borderWidth: 1,
                  flexDirection: "row",
                  borderRadius: 10,
                }}
              >
                <Text style={{ marginRight: 10, marginLeft: 10 }}>SL :</Text>

                <View style={{ flexDirection: "row", flex: 1 }}>
                  <Text>-</Text>
                  <Text>1</Text>
                  <Text>+</Text>
                </View>
              </View>
            </View>

            <TouchableOpacity style={{ marginRight: 10 }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>X</Text>
            </TouchableOpacity>
          </View>
{/* note */}
          <View
            style={{
              height: 51,
              borderWidth: 1,
              margin: 10,
              borderRadius: 20,
              flexDirection: "row",
              backgroundColor:'white'
            }}
          >
            <TextInput style={{ flex: 1, marginLeft: 20,backgroundColor:'white',marginBottom:1 }}>Note :</TextInput>
            <TouchableOpacity>
              <Text style={{ marginRight: 10, fontSize: 32 }}>+</Text>
            </TouchableOpacity>
          </View>

         

{/* gia  */}
          <View
            style={{
              height: 200,
              marginLeft: 10,
              marginRight: 10,
              backgroundColor: "white",
              borderRadius: 20,
              paddingTop: 10,
              paddingBottom: 10,
            }}
          >
            <View style={{ height: 30, borderBottomWidth: 0.5 }}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  marginLeft: 10,
                  borderBottomWidth: 2,
                  color: "green",
                  width: 150,
                  borderBottomColor: "green",
                }}
              >
                Price detail
              </Text>
            </View>
            <View
              style={{
                borderBottomWidth: 0.5,
                paddingTop: 20,
                paddingBottom: 20,
                flex: 1,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 18, marginLeft: 10 }}>
                  Provisional :
                </Text>
                <Text style={{ marginRight: 20, fontSize: 18 }}>10.000KW</Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 18, marginLeft: 10 }}>Ship :</Text>
                <Text style={{ marginRight: 20, fontSize: 18 }}>4KW</Text>
              </View>
            </View>
            <View
              style={{
                height: 40,
                flexDirection: "row",
                justifyContent: "space-between",
                marginLeft: 10,
                marginRight: 10,
              }}
            >
              <Text style={{ fontSize: 18 }}>Sum :</Text>
              <Text style={{ fontSize: 18 }}>14.000KW</Text>
            </View>
          </View>
 {/* acsect */}
          <View style={{height:110,margin:10,backgroundColor:'white',borderRadius:10}}>
      <View style={{flex:1,marginLeft:10,marginRight:10}}>
        <View >
        <Text style={{fontSize:16}}>Address :</Text>
        <TextInput style={{borderWidth:1,height:40,borderRadius:40,paddingLeft:10}} placeholder="대전광역시 유성구 대학로 155번길 67은하빌라 203호" />
       
        </View>
        <View style={{height:45}}>
             <View style={{flexDirection:'row',width:90,justifyContent:'space-between',flex:1,marginTop:8,marginLeft:260}}>
              <Button title="Ok" color="red" />
               <Button title="  X  " />
             </View>
               
        </View>
        
      </View>
       
    </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
