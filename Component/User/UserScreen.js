import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default class UserScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            height: 300,
            backgroundColor: "green",
            alignItems: "center",
          }}
        />

        <View
          style={{
            height: 200,
            width: 200,
            backgroundColor: "#666",
            marginTop: -100,
            marginLeft: 100,
            borderRadius: 100,
            alignItems: "center",
          }}
        >
          <Feather name="user" size={180} color="black" />
        </View>

        <View style={{ marginLeft: 20, marginRight: 20, marginTop: 20 }}>
          <TouchableOpacity>
            <View style={{ flexDirection: "row" }}>
              <AntDesign
                style={{ marginTop: 20 }}
                name="user"
                size={24}
                color="green"
              />
              <Text style={styles.text}> Information</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{ flexDirection: "row" }}>
              <AntDesign
                style={{ marginTop: 20 }}
                name="heart"
                size={24}
                color="red"
              />
              <Text style={styles.text}> Like</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{ flexDirection: "row" }}>
              <AntDesign
                style={{ marginTop: 20 }}
                name="creditcard"
                size={24}
                color="blue"
              />
              <Text style={styles.text}> Balance </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{ flexDirection: "row" }}>
              <AntDesign
                style={{ marginTop: 20 }}
                name="shoppingcart"
                size={24}
                color="orange"
              />
              <Text style={styles.text}> Cart </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{ flexDirection: "row" }}>
              <AntDesign
                style={{ marginTop: 20 }}
                name="like2"
                size={24}
                color="black"
              />
              <Text style={styles.text}> Interested </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    borderBottomWidth: 0.5,
    paddingBottom: 8,
    marginTop: 20,
    width: 320,
  },
});
