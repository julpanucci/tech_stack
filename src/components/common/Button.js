import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const Button = props => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity style={buttonStyle} onPress={props.onPress}>
      <Text style={textStyle}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    alignSelf: "center",
    fontSize: 16,
    fontWeight: "600",
    color: "#007aff",
    padding: 15
  },
  buttonStyle: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#007aff",
    marginLeft: 5,
    marginRight: 5
  }
});

export { Button };
