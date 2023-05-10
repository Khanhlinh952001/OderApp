import { Text,View, TouchableOpacity, TextInput, FlatList,Image,ScrollView,} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./styles";
import Data from './Data.js';

export default function HomeScreen({ navigation }) {
  const changeScreen = (item) => {
    navigation.push("BuyScreen", {
      obj: {
        name: item.name,
        gia: item.gia,
        address: item.address,
        img: item.img,
        km: item.km1,
      },
    });
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.head}>
        <View style={styles.head_icon}>
          <View>
            <Text style={styles.head_icon_text}>
              유성구 대학로155번길 67
              <TouchableOpacity>
                <AntDesign name="caretdown" size={18} color="white" />
              </TouchableOpacity>
            </Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={{ paddingLeft: 6, paddingRight: 6 }}>
              <AntDesign name="windowso" size={18} color="white" />
            </TouchableOpacity>
        
            <TouchableOpacity style={{ paddingLeft: 6, paddingRight: 6 }}>
              <FontAwesome
                onPress={() => navigation.navigate("bell")}
                name="bell-o"
                size={18}
                color="white"
              />
            </TouchableOpacity>

            <TouchableOpacity style={{ paddingLeft: 6, marginRight: 15 }}>
              <MaterialIcons
                onPress={() => navigation.navigate("User")}
                name="tag-faces"
                size={20}
                color="white"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.search}>
          <TouchableOpacity style={{ height: 40, flexDirection: "row" }}>
            <FontAwesome
              style={{
                marginTop: 6,
                marginLeft: 8,
                paddingRight: 8,
                borderRadius: 8,
              }}
              name="search"
              size={24}
              color="green"
            />
            <TextInput
              onPressIn={() => navigation.navigate("Search")}
              placeholder="What do you want to find ?"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.body}>
        {/* one list */}
        <View style={{ height: 50 }}>
          <Text style={{ fontSize: 24, marginTop: 10, fontWeight: "bold" }}>
            What would you like to eat ?
          </Text>
        </View>

        {/* loai */}
        <View
          style={{
            height: 100,
            justifyContent: "space-around",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity style={{ height: 80, width: 80 }}>
            <Image
              style={{ height: 80, width: 80, borderRadius: 10 }}
              source={{uri : "https://statics.vinpearl.com/com-tam-ngon-o-sai-gon-0_1630563211.jpg"}}
            />
          </TouchableOpacity>

          <TouchableOpacity style={{ height: 80, width: 80 }}>
            <Image
              style={{ height: 80, width: 80, borderRadius: 10 }}
              source={{uri : "https://statics.vinpearl.com/com-tam-ngon-o-sai-gon-0_1630563211.jpg"}}

            />
          </TouchableOpacity>

          <TouchableOpacity style={{ height: 80, width: 80 }}>
            <Image
              style={{ height: 80, width: 80, borderRadius: 10 }}
              source={{uri : "https://statics.vinpearl.com/com-tam-ngon-o-sai-gon-0_1630563211.jpg"}}

            />
          </TouchableOpacity>

          <TouchableOpacity style={{ height: 80, width: 80 }}>
            <Image
              style={{ height: 80, width: 80, borderRadius: 10 }}
              source={{uri : "https://statics.vinpearl.com/com-tam-ngon-o-sai-gon-0_1630563211.jpg"}}

            />
          </TouchableOpacity>
        </View>
        {/* List 1*/}
        <View style={{ height: 200 }}>
          <View
            style={{
              height: 40,
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "white",
              borderRadius: 10,
            }}
          >
            <Text style={{ fontSize: 24, marginLeft: 10, fontWeight: "bold" }}>
              Foodies
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("All")}>
              <Text
                style={{
                  marginRight: 15,
                  marginTop: 10,
                  fontSize: 18,
                  color: "green",
                }}
              >
                See all
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            
            <FlatList
              data={Data}
              horizontal={true}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    style={{
                      width: 130,
                      height: 155,
                      marginRight: 10,
                      borderRadius: 10,
                      backgroundColor: "white",
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
                    <View style={{ alignItems: "center" }}>
                      <Text style={{ color: "red" }}>{item.gia}KW</Text>
                      <Text style={{ fontSize: 16 }}>{item.name}</Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
        {/* list 2 */}
        <View>
          {/* Text */}
          <View
            style={{
              height: 40,
              backgroundColor: "white",
              marginTop: 10,
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }}
          >
            <Text style={{ fontSize: 24, marginLeft: 10, fontWeight: "bold" }}>
              Discount
            </Text>
          </View>

          <View>
            {
              Data.map((item)=>{
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
                      <Text style={{ color: "red", fontSize: 16 }}>
                        {item.gia}
                      </Text>
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
                          {item.time}{" "}
                          <Text style={{ color: "#5ac3e8" }}>min</Text>
                        </Text>
                      </View>
                    </View>

                    <View>
                      <TouchableOpacity
                        onPress={()=>changeScreen(item)}
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
                            fontSize: 20,
                            fontWeight: "bold",
                            marginTop: 24,
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

          </View>
        </View>
      </View>
    </ScrollView>
  );
}
