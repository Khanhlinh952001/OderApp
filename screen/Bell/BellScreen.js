import { Text, StyleSheet, View, Image } from "react-native";
import React, { Component } from "react";
import { AntDesign } from "@expo/vector-icons";

export default function BellScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "#eae8e8" }}>
      <View style={{ marginTop: 40 }}>
        <Image
          style={{ height: 400, width: 400 }}
          source={{
            uri: "https://i.pinimg.com/originals/c0/e4/a3/c0e4a31cb6c4e2dc11ac40a928c5e47a.png",
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
