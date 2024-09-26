import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome } from "@expo/vector-icons";
import ColorSelectionScreen from "./screens/ColorSelectionScreen";
import React, { useState } from 'react';

function HomeScreen({ navigation }) {
  const [color, setColor] = useState('blue');

  const onSelectColor = (selectedColor) => {
    setColor(selectedColor);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={styles.container}>
        <Image
          source={getImageForColor(color)}
          style={styles.productImage}
        />

        <Text style={styles.productTitle}>
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>

        <View style={styles.ratingContainer}>
          <View style={{ flexDirection: "row" }}>
            <FontAwesome name="star" size={24} color="gold" />
            <FontAwesome name="star" size={24} color="gold" />
            <FontAwesome name="star" size={24} color="gold" />
            <FontAwesome name="star" size={24} color="gold" />
            <FontAwesome name="star-half" size={24} color="gold" />
          </View>
          <Text style={styles.ratingText}>(Xem 828 đánh giá)</Text>
        </View>

        <View style={styles.promoContainer}>
          <Text style={styles.promoText}>Ở đâu rẻ hơn hoàn tiền</Text>
          <Image
            source={require("./img/Group 1.png")}
            style={{ width: 28, height: 28 }}
          />
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.discountedPrice}>1.790.000 đ</Text>
          <Text style={styles.originalPrice}>1.790.000 đ</Text>
        </View>

        <TouchableOpacity
          style={styles.colorButton}
          onPress={() => navigation.navigate("ColorSelection", { onSelectColor })}
        >
          <Text style={styles.colorButtonText}>4 MÀU - CHỌN MÀU</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>CHỌN MUA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function getImageForColor(color) {
  switch (color) {
    case 'blue':
      return require('./img/vs_blue.png');
    case 'red':
      return require('./img/vs_red.png');
    case 'black':
      return require('./img/vs_black.png');
    case 'silver':
      return require('./img/vs_silver.png');
    default:
      return require('./img/vs_blue.png');
  }
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="ColorSelection"
          component={ColorSelectionScreen}
          options={{ title: "Chọn Màu" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: "95%",
    alignItems: "center",
  },
  productImage: {
    width: 401,
    height: 500,
    marginBottom: 20,
  },
  productTitle: {
    alignSelf: "flex-start",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  ratingContainer: {
    flexDirection: "row",
    alignSelf: "flex-start",
    marginBottom: 20,
    gap: 30,
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 16,
  },
  promoContainer: {
    flexDirection: "row",
    alignSelf: "flex-start",
    marginBottom: 20,
    gap: 20,
  },
  promoText: {
    color: "red",
    fontSize: 20,
    fontWeight: "bold",
  },
  priceContainer: {
    flexDirection: "row",
    alignSelf: "flex-start",
    gap: 150,
  },
  discountedPrice: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  originalPrice: {
    fontSize: 20,
    color: "gray",
    marginBottom: 5,
    textDecorationLine: "line-through",
  },
  colorButton: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    width: "100%",
    borderWidth: 1,
    borderColor: "black",
    marginTop: 30,
  },
  colorButtonText: {
    fontSize: 20,
    color: "black",
    textAlign: "center",
  },
  button: {
    backgroundColor: "red",
    padding: 15,
    borderRadius: 20,
    marginTop: 70,
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 30,
  },
});
