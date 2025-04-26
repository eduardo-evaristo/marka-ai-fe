import { StyleSheet, Text, View } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useMemo } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function IndexBottomSheet() {
  const snapPoints = useMemo(() => ["15%", "40%", "70%"], []);

  return (
    <>
      <BottomSheet style={styles.container} snapPoints={snapPoints} index={0}>
        <BottomSheetView style={styles.contentContainer}>
          <Text style={styles.viewText}>Escolha um local pro rolê!</Text>
        </BottomSheetView>
      </BottomSheet>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: "center",
  },
  viewText: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
