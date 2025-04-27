import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Pressable,
  ScrollView,
} from "react-native";
import InputWithLabel from "./Input";
import Ionicons from "@expo/vector-icons/Ionicons";
import FormLabel from "./FormLabel";
import UserProfile from "./UserProfile";

export default function MeetingForm() {
  const [associatedPeople, setAssociatedPeople] = useState([
    1, 2, 3, 5, 5, 5, 3, 4, 5, 5, 5,
  ]);

  return (
    <View style={styles.container}>
      <FormLabel label="Nome" />
      <InputWithLabel />
      <FormLabel label="Descrição" />
      <InputWithLabel height={100} />
      <FormLabel label="Convidar" />
      <InputWithLabel>
        <Pressable style={styles.button}>
          <Ionicons name="arrow-forward" size={24} color="#F8FAFC" />
        </Pressable>
      </InputWithLabel>

      <ScrollView horizontal scrollEnabled={true}>
        {associatedPeople.map((ppl, i) => (
          <UserProfile key={i} />
        ))}
      </ScrollView>
      <FormLabel label="Data" />
      <InputWithLabel />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: "#FACC15",
    padding: 14,
    borderRadius: 2,
  },
});
