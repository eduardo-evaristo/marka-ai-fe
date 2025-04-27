import { ColorValue, Pressable, StyleSheet, Text } from "react-native";

export function CustomFloatingButton() {
  return (
    <Pressable
      style={(pressed) => {
        console.log(pressed);
        return [
          styles.button,
          { position: "absolute", zIndex: 1, bottom: 150 },
        ];
      }}
    >
      <Text style={styles.text}>Marcar</Text>
    </Pressable>
  );
}

type CustomButtonProps = {
  color?: ColorValue;
  text: string;
};

export function CustomButton({ text, color }: CustomButtonProps) {
  return (
    <Pressable
      style={{
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        width: 165,
        height: 55,
        backgroundColor: color ? color : "#FACC15",
      }}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    width: 165,
    height: 55,
    backgroundColor: "#FACC15",
  },
  text: {
    color: "#F8FAFC",
    fontWeight: "bold",
    fontSize: 24,
  },
});
