import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import React, { Component } from "react";
import styles from "../styles";
export default function SearchScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
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
            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
              style={{ paddingLeft: 6, paddingRight: 6 }}
            >
              <AntDesign name="home" size={18} color="white" />
            </TouchableOpacity>

            <TouchableOpacity style={{ paddingLeft: 6, paddingRight: 6 }}>
              <FontAwesome name="bell-o" size={18} color="white" />
            </TouchableOpacity>

            <TouchableOpacity style={{ paddingLeft: 6, marginRight: 15 }}>
              <MaterialIcons name="tag-faces" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.search}>
          <View style={{ height: 40, flexDirection: "row" }}>
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
            <TextInput placeholder="What do you want to find ?" />
          </View>
        </View>
      </View>
      <View style={{ flex: 1, color: "red" }}></View>
    </View>
  );
}
