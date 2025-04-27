import IndexBottomSheet from "@/components/BottomSheet";
import { CustomFloatingButton } from "@/components/Button";
import Map from "@/components/Map";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { LatLng } from "react-native-maps";

export default function Index() {
  const [userMarker, setUserMarker] = useState<LatLng>();
  const [location, setLocation] = useState();

  async function createMarker(latLng: LatLng) {
    console.log("hey");
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${latLng.latitude}&lon=${latLng.longitude}&format=json`,
      {
        headers: {
          "User-Agent": "markaaiapp", // optional but recommended for Nominatim
        },
      }
    );
    const data = await res.json();
    console.log(data);
    setLocation(data);
    setUserMarker(latLng);
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* {userMarker && <CustomFloatingButton />} */}
      <Map createMarker={createMarker} userMarker={userMarker} />
      <IndexBottomSheet location={location} />
    </View>
  );
}
