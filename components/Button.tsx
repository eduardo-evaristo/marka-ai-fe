import { Pressable, StyleSheet, Text } from "react-native";

export default function CustomButton() {
  return (
    <Pressable
      style={(pressed) => {
        console.log(pressed);
        return styles.button;
      }}
    >
      <Text style={styles.text}>Marcar</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    zIndex: 1,
    bottom: 155,
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
