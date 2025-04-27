import { useState } from "react";
import { StyleSheet } from "react-native";
import MapView, { LatLng, Marker } from "react-native-maps";

type Props = {
  createMarker: (latLng: LatLng) => void;
  userMarker?: LatLng;
};
export default function Map({ createMarker, userMarker }: Props) {
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
