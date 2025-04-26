import { useState } from "react";
import { StyleSheet } from "react-native";
import MapView, { LatLng, Marker } from "react-native-maps";

type Props = {
  setUserMarker: React.Dispatch<React.SetStateAction<LatLng | undefined>>;
  userMarker?: LatLng;
};
export default function Map({ setUserMarker, userMarker }: Props) {
  function createMarker(latLng: LatLng) {
    console.log(latLng);
    setUserMarker(latLng);
  }

  return (
    <MapView
      style={styles.map}
      showsCompass={false}
      onPress={(e) => createMarker(e.nativeEvent.coordinate)}
    >
      {userMarker && <Marker coordinate={userMarker} />}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});
