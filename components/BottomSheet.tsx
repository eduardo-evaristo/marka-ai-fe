import { StyleSheet, Text, View } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useMemo } from "react";
import {
  GestureHandlerRootView,
  TextInput,
} from "react-native-gesture-handler";
import Divider from "./Divider";
import MeetingForm from "./MeetingForm";
import { CustomButton } from "./Button";

export default function IndexBottomSheet({ location }) {
  const snapPoints = useMemo(() => ["15%", "40%", "100%"], []);

  return (
    <>
      <BottomSheet style={styles.container} snapPoints={snapPoints} index={0}>
        <BottomSheetView style={styles.contentContainer}>
          <View style={styles.contentFirstView}>
            <Text style={styles.viewText}>
              {location
                ? `${location.address?.road}, ${
                    location.address?.house_number || "Sn"
                  }, ${location.address?.suburb || location.address?.town}`
                : "Escolha um local pro rolê!"}
            </Text>
          </View>
          <Divider />
          {location ? (
            <MeetingForm />
          ) : (
            <View style={{ marginTop: 40 }}>
              <CustomButton text="Meus rolês" />
            </View>
          )}
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
    paddingHorizontal: 20,
    paddingVertical: 25,
    alignItems: "center",
  },
  contentFirstView: {
    marginBottom: 30,
  },
  viewText: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
});
