import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { CartContext } from "../../Navigation/Provider";
import { useContext } from "react";


export default function BuyScreen({ navigation , route }) {
  const {  addToCart } = useContext(CartContext);
  const { obj } = route.params;
  const handleClick = () => {
    addToCart({
      name: obj.name,
      gia: obj.gia,
      img: obj.img
    });
    navigation.navigate("CartScreen")
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 300, borderWidth: 1 }}>
        <Image
          style={{ height: 300, width: 400 }}
          source={{
            uri: obj.img,
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
          <Text style={{ fontSize: 32, marginLeft: 10 }}>{obj.name}</Text>
          <Text style={{ fontSize: 24, marginRight: 10, color: "red" }}>
            {obj.gia}
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
            backgroundColor: "green",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 24, color: "white", fontWeight: "bold" }}>
            Buy
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleClick}
          style={{
            height: 40,
            width: 150,
            borderRadius: 40,
            backgroundColor: "green",
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

