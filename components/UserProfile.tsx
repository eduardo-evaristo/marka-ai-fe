import { StyleSheet, View } from "react-native";

export default function UserProfile() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 70,
    width: 70,
    borderRadius: "100%",
    marginHorizontal: 2,
    backgroundColor: "green",
  },
});
