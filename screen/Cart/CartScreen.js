import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
  ScrollView
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../../Navigation/Provider";

export default function CartScreen({ route }) {
  const { cart, removeFromCart } = useContext(CartContext);
  const [number, setNumber] = useState(1);

  useEffect(() => {
    if (route.params && route.params.obt) {
      setCart([...cart, route.params.obt]);
      console.log(cart);
    }
  }, [route.params]);

  const handleRemove = (item) => {
    removeFromCart(item);
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.gia , 0);

  console.log(cart);
  return (
    <ScrollView style={{ flex: 1 }}>
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
        </View>
      </View>

      {/* body */}
      <View style={{ flex: 1 }}>
        {/* item */}
        {cart.map((item) => {
          return (
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
                  uri: item.img,
                }}
              />
              <View style={{ flex: 1, marginTop: 10 }}>
                <Text style={{ fontSize: 18,fontWeight:'bold' }}>{item.name}</Text>
                <Text style={{fontSize:16}} >{item.gia}</Text>

                <View
                  style={{
                    height: 25,
                    width: 120,
                    borderWidth: 1,
                    flexDirection: "row",
                    borderRadius: 10,
                    marginTop: 4,
                  }}
                >
                  <Text style={{ marginRight: 5, marginLeft: 10 }}>SL :</Text>

                  <View
                    style={{
                      flexDirection: "row",
                      flex: 1,
                      justifyContent: "space-around",
                    }}
                  >
                    <TouchableOpacity onPress={() => setNumber(number - 1)}>
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 27,
                          lineHeight: 25,
                        }}
                      >
                        -
                      </Text>
                    </TouchableOpacity>
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 20,
                        lineHeight: 25,
                      }}
                    >
                      {number}
                    </Text>

                    <TouchableOpacity onPress={() => setNumber(number + 1)}>
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 21,
                          lineHeight: 25,
                        }}
                      >
                        +
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <TouchableOpacity
                onPress={() => handleRemove(item)}
                style={{ marginRight: 10 }}
              >
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>X</Text>
              </TouchableOpacity>
            </View>
          );
        })}

        {/* note */}
        <View
          style={{
            height: 51,
            borderWidth: 1,
            margin: 10,
            borderRadius: 20,
            flexDirection: "row",
            backgroundColor: "white",
          }}
        >
          <TextInput
            style={{
              flex: 1,
              marginLeft: 20,
              backgroundColor: "white",
              marginBottom: 1,
            }}
          >
            Note :
          </TextInput>
          <TouchableOpacity>
            <Text style={{ marginRight: 10, fontSize: 32 }}>+</Text>
          </TouchableOpacity>
        </View>

        {/* gia  */}
        <View
          style={{
            height: 250,
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

            {
              cart.map((item)=>{
                return (
                  <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ fontSize: 18, marginLeft: 10 }}>
                    {item.name}
                  </Text>
                  <Text style={{ marginRight: 20, fontSize: 18 }}>{item.gia}KW</Text>
                </View>
                )
              })
            }
            

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 18, marginLeft: 10 }}>Ship :</Text>
              <Text style={{ marginRight: 20, fontSize: 18 }}>4000KW</Text>
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
            <Text style={{ fontSize: 18 }}>{totalPrice+4000}KW</Text>
          </View>
        </View>
        {/* acsect */}
        <View
          style={{
            height: 110,
            margin: 10,
            backgroundColor: "white",
            borderRadius: 10,
          }}
        >
          <View style={{ flex: 1, marginLeft: 10, marginRight: 10 }}>
            <View>
              <Text style={{ fontSize: 16 }}>Address :</Text>
              <TextInput
                style={{
                  borderWidth: 1,
                  height: 40,
                  borderRadius: 40,
                  paddingLeft: 10,
                }}
                placeholder="대전광역시 유성구 대학로 155번길 67은하빌라 203호"
              />
            </View>
            <View style={{ height: 45 }}>
              <View
                style={{
                  flexDirection: "row",
                  width: 90,
                  justifyContent: "space-between",
                  flex: 1,
                  marginTop: 8,
                  marginLeft: 260,
                }}
              >
                <Button title="Ok" color="red" />
                <Button title="  X  " />
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
