import Ionicons from "@expo/vector-icons/Ionicons";
import React, { PropsWithChildren } from "react";
import {
  DimensionValue,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

type Props = PropsWithChildren<{
  height?: DimensionValue;
  width?: DimensionValue;
  editable?: boolean;
  value?: string;
  multiline?: boolean;
}>;

export default function Input({
  height,
  multiline = false,
  width,
  value,
  editable,
  children,
}: Props) {
  return (
    <View
      style={[{ marginBottom: 20 }, children ? styles.inputWithButton : null]}
    >
      <TextInput
        style={{
          minWidth: width || "100%",
          height: height || 54,
          backgroundColor: "#E7F0FA",
          borderRadius: 2,
          padding: 15,
          fontSize: 18,
        }}
        multiline={multiline}
        editable={editable}
        value={value ? value : undefined}
      />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  inputWithButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
