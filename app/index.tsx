import IndexBottomSheet from "@/components/BottomSheet";
import CustomButton from "@/components/Button";
import Map from "@/components/Map";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { LatLng } from "react-native-maps";

export default function Index() {
  const [userMarker, setUserMarker] = useState<LatLng>();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {userMarker && <CustomButton />}
      <Map setUserMarker={setUserMarker} userMarker={userMarker} />
      <IndexBottomSheet />
    </View>
  );
}
