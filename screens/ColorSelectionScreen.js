import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function ColorSelectionScreen({ navigation, route }) {
  const { onSelectColor } = route.params;
  const [selectedImage, setSelectedImage] = useState(require("../img/vs_blue.png"));
  const [selectedColor, setSelectedColor] = useState('blue');

  return (
    <View style={styles.container}>
      <View style={styles.productContainer}>
        <View style={styles.productContainerFirst}>
          <Image
            source={selectedImage}
            style={styles.productImage}
          />
          <View>
            <Text style={styles.productName}>Điện Thoại Vsmart Joy 3</Text>
            <Text style={styles.productDescription}>Hàng chính hãng</Text>
          </View>
        </View>
        <Text style={styles.colorSelectText}>Chọn một màu bên dưới:</Text>
      </View>

      <View style={styles.colorOptions}>
        <TouchableOpacity
          style={[styles.colorOption, { backgroundColor: "#cbf1fc" }]}
          onPress={() => {
            setSelectedImage(require("../img/vs_blue.png"));
            setSelectedColor('blue');
          }}
        />
        <TouchableOpacity
          style={[styles.colorOption, { backgroundColor: "#FF0000" }]}
          onPress={() => {
            setSelectedImage(require("../img/vs_red.png"));
            setSelectedColor('red');
          }}
        />
        <TouchableOpacity
          style={[styles.colorOption, { backgroundColor: "#000000" }]}
          onPress={() => {
            setSelectedImage(require("../img/vs_black.png"));
            setSelectedColor('black');
          }}
        />
        <TouchableOpacity
          style={[styles.colorOption, { backgroundColor: "#284b98" }]}
          onPress={() => {
            setSelectedImage(require("../img/vs_silver.png"));
            setSelectedColor('silver');
          }}
        />
      </View>

      <TouchableOpacity
        style={styles.doneButton}
        onPress={() => {
          onSelectColor(selectedColor);
          navigation.goBack();
        }}
      >
        <Text style={styles.doneButtonText}>XONG</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#E5E5E5",
  },
  productContainer: {
    width: "100%",
    height: "100",
    alignItems: "center",
  },
  productContainerFirst: {
    alignSelf: "flex-start",
    flexDirection: "row",
    gap: 20,
    backgroundColor: "white",
    width: "100%",
    padding: 20,
  },
  productImage: {
    width: 170,
    height: 220,
    alignSelf: "flex-start",
  },
  productName: {
    fontWeight: "bold",
    fontSize: 22,
    marginTop: 10,
  },
  productDescription: {
    fontWeight: "bold",
    fontSize: 22,
    marginTop: 10,
  },
  colorSelectText: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
    alignSelf: "flex-start",
    marginTop: 20,
    marginLeft: 20
  },
  colorOptions: {
    width: "80%",
    flexDirection: "column",
    marginBottom: 20,
    alignItems: "center"
  },
  colorOption: {
    width: 100,
    height: 100,
    borderRadius: 5,
    margin: 15,
  },
  doneButton: {
    backgroundColor: "#5170c4",
    padding: 15,
    width: "80%",
    alignItems: "center",
    borderRadius: 5,
  },
  doneButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 20,
  },
});
