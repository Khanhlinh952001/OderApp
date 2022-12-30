import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const data = [
  {
    id: 1,
    img: "http://cdn.tgdd.vn/Files/2021/08/09/1373996/tu-lam-com-tam-suon-trung-don-gian-thom-ngon-nhu-ngoai-hang-202201071248422991.jpg",
    name: "Com Tam",
    gia: "10.000KW",
    time: "30~60",
  },
  {
    id: 2,
    img: "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG",
    name: "Cafe",
    gia: "5.000KW",
    time: "30~60",
  },
  {
    id: 3,
    img: "http://cdn.tgdd.vn/Files/2020/05/20/1256908/troi-mua-thu-lam-banh-xeo-kieu-mien-bac-gion-ngon-it-dau-mo-202005201034115966.jpg",
    name: "Banh Xeo",
    gia: "10KW",
    time: "20~40",
  },
  {
    id: 4,
    img: "https://vcdn-vnexpress.vnecdn.net/2021/09/04/f8dab921-7a2a-4891-abb6-94535e-7628-3125-1630748369.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=2Q6KEDefq-8OEvphgncITQ",
    name: "Banh Bao",
    gia: "7000KW",
    time: "20~40",
  },
];

export default function ListScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView horizontal={false} style={{ flex: 1 }}>
        {
          data.map((item)=>{
            return (
              <TouchableOpacity
              key={item.id}
                style={{
                  height: 105,
                  borderRadius: 10,
                  backgroundColor: "white",
                  flexDirection: "row",
                  marginBottom: 5,
                  marginTop: 5,
                  justifyContent: "space-between",
                }}
              >
                <View style={{ position: "relative" }}>
                  <Foundation
                    style={{ position: "absolute", zIndex: 1, left: 4 }}
                    name="burst-sale"
                    size={40}
                    color="orange"
                  />
                  <FontAwesome
                    style={{
                      position: "absolute",
                      zIndex: 1,
                      right: 8,
                      top: 4,
                    }}
                    name="heart"
                    size={20}
                    color="red"
                  />
                  <Image
                    style={{ width: 130, height: 100, borderRadius: 10 }}
                    source={{ uri: item.img }}
                  />
                </View>
                <View
                  style={{
                    alignItems: "center",
                    marginLeft: 10,
                    marginTop: 10,
                  }}
                >
                  <Text style={{ color: "red", fontSize: 16 }}>{item.gia}</Text>
                  <Text style={{ fontSize: 18 }}>{item.name}</Text>
                  <View style={{ flexDirection: "row" }}>
                    <AntDesign name="star" size={16} color="orange" />
                    <AntDesign name="star" size={16} color="orange" />
                    <AntDesign name="star" size={16} color="orange" />
                    <AntDesign name="star" size={16} color="orange" />
                    <AntDesign name="star" size={16} color="black" />
                  </View>
                  <View style={{ flexDirection: "row", marginTop: 4 }}>
                    <AntDesign
                      style={{ marginTop: 3 }}
                      name="clockcircleo"
                      size={16}
                      color="black"
                    />
                    <Text style={{ fontSize: 16, marginLeft: 8 }}>
                      {item.time} <Text style={{ color: "#5ac3e8" }}>min</Text>
                    </Text>
                  </View>
                </View>

                <View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("buy")}
                    style={{
                      height: 80,
                      width: 80,
                      margin: 10,
                      backgroundColor: "green",
                      borderRadius: 30,
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 24,
                        fontWeight: "bold",
                        marginTop: 20,
                        color: "white",
                      }}
                    >
                      Oder
                    </Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            );
          })
        }


        {/* <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            
          }}
        /> */}
      </ScrollView>
      {/* <View style={{height:100,backgroundColor:'green'}}>
          <View style={{marginTop:50,justifyContent:'space-between',flexDirection:'row'}}>
             <Text/>
          <Text style={{fontSize:32,fontWeight:'bold',color:'white'}}>Interested</Text>
          <TouchableOpacity onPress={()=>navigation.navigate("Cart")}>
          <FontAwesome style={{marginRight:15,marginTop:10}} name="cart-plus" size={32} color="white" />
          </TouchableOpacity>
          </View>
         

        </View> */}
    </View>
  );
}

const styles = StyleSheet.create({});
