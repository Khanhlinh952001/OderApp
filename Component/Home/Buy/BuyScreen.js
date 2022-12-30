import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

const data = [
  {
    id: 1,
    img: "https://img.tastykitchen.vn/2022/03/28/com-suon-cha-cua-7c0c.jpg",
    name: "Com Tam",
    gia: "10.000KW",
    time: "30~60",
  },
  {
    id: 2,
    img: "https://cdn.dayphache.edu.vn/wp-content/uploads/2020/02/mon-tra-sua-tran-chau.jpg",
    name: "Tra Sua",
    gia: "5.000KW",
    time: "30~60",
  },
  {
    id: 3,
    img: "https://p.kindpng.com/picc/s/723-7233345_vietnamese-cuisine-png-pho-png-transparent-png.png",
    name: "Pho",
    gia: "10KW",
    time: "20~40",
  },
  {
    id: 4,
    img: "https://cdn.tgdd.vn/2021/05/CookRecipe/Avatar/banh-mi-thit-bo-nuong-thumbnail-1.jpg",
    name: "Banh Mi",
    gia: "7000KW",
    time: "20~40",
  },
  {
    id: 5,
    img: "https://quanannhanhbinhminh.files.wordpress.com/2017/04/bun-thit-nuong-chay-ngon.jpg",
    name: "Bun Thit Nuong",
    gia: "10000KW",
    time: "20~40",
  },
  {
    id: 6,
    img: "https://i.ytimg.com/vi/C1P1Cw9J1-I/maxresdefault.jpg",
    name: "Bun Rieu",
    gia: "10000KW",
    time: "20~40",
  },
];

export default function BuyScreen({ navigation, props }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 300, borderWidth: 1 }}>
        <Image
          style={{ height: 300, width: 400 }}
          source={{
            uri: "https://cdn.shopify.com/app-store/listing_images/2b9bba2ab61edabc6d836f14f9377671/icon/CL-Lhc30lu8CEAE=.png",
          }}
        />
      </View>

      <View style={{ flex: 1, marginTop: 10 }}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "row", marginRight: 10 }}>
            <AntDesign name="star" size={16} color="orange" />
            <AntDesign name="star" size={16} color="orange" />
            <AntDesign name="star" size={16} color="orange" />
            <AntDesign name="star" size={16} color="orange" />
            <AntDesign name="star" size={16} color="black" />
          </View>
          <Text>(102k)</Text>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 32, marginLeft: 10 }}>Bun Cha</Text>
          <Text style={{ fontSize: 24, marginRight: 10, color: "red" }}>
            10000KW
          </Text>
        </View>
        <View style={{ marginLeft: 20, marginRight: 20 }}>
          <Text style={{ fontSize: 16 }}>
            Bún chả là một món ăn của Việt Nam, bao gồm bún, chả thịt lợn nướng
            trên than hoa và bát nước mắm chua cay mặn ngọt. Món ăn xuất xứ từ
            miền Bắc Việt Nam, là thứ quà có sức sống lâu bền nhất của Hà
            Nội,[1] nên có thể coi đây là một trong những đặc sản đặc trưng của
            ẩm thực Hà thành. Bún chả có nét tương tự món bún thịt nướng ở miền
            Trung và miền Nam, nhưng nước mắm pha có vị thanh nhẹ hơn.
          </Text>
        </View>
      </View>

      {/* bottom */}
      <View
        style={{
          flexDirection: "row",
          marginBottom: 20,
          marginLeft: 20,
          marginRight: 20,
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={{
            height: 40,
            width: 150,
            borderRadius: 40,
            backgroundColor: "red",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 24, color: "white", fontWeight: "bold" }}>
            Buy
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={{
            height: 40,
            width: 150,
            borderRadius: 40,
            backgroundColor: "red",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 24, color: "white", fontWeight: "bold" }}>
            Add To Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
