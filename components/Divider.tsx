import React from "react";
import { View, StyleSheet, DimensionValue } from "react-native";

type Props = {
  color?: string;
  width?: DimensionValue;
};

export default function Divider({ color, width }: Props) {
  return (
    <View
      style={{
        width: width ? width : "100%",
        height: 2,
        backgroundColor: color ? color : "#cac4d0",
        marginVertical: 25,
      }}
    ></View>
  );
}
