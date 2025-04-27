import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Pressable,
  ScrollView,
} from "react-native";
import Input from "./Input";
import Ionicons from "@expo/vector-icons/Ionicons";
import FormLabel from "./FormLabel";
import UserProfile from "./UserProfile";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { CustomButton } from "./Button";
import { useMeetingFormStore } from "@/stores/meetingFormStore";

export default function MeetingForm() {
  const [associatedPeople, setAssociatedPeople] = useState([
    1, 2, 3, 5, 5, 5, 3, 4, 5, 5, 5,
  ]);
  const {
    date,
    time,
    mode,
    datePickerIsShown,
    showDate,
    showTime,
    onChangeDateTime,
  } = useMeetingFormStore((state) => state);

  return (
    <View style={styles.container}>
      <FormLabel label="Nome" />
      <Input />
      <FormLabel label="Descrição" />
      <Input height={100} multiline />
      <FormLabel label="Convidar" />
      <Input width={"80%"}>
        <Pressable style={styles.button}>
          <Ionicons name="arrow-forward" size={24} color="#F8FAFC" />
        </Pressable>
      </Input>

      <ScrollView
        style={styles.scrollContainer}
        horizontal
        scrollEnabled={true}
        showsHorizontalScrollIndicator={false}
      >
        {associatedPeople.map((ppl, i) => (
          <UserProfile key={i} />
        ))}
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <View>
          <Pressable onPress={showDate}>
            <FormLabel label="Data" />
            <Input
              width={"45%"}
              editable={false}
              value={date?.toLocaleDateString("pt-BR")}
            />
          </Pressable>
        </View>
        <View>
          <Pressable onPress={showTime}>
            <FormLabel label="Horário" />
            <Input
              width={"45%"}
              editable={false}
              value={time?.toLocaleTimeString("pt-BR", {
                timeStyle: "short",
              })}
            />
          </Pressable>
        </View>
        {datePickerIsShown && (
          <DateTimePicker
            value={new Date()}
            mode={mode}
            onChange={onChangeDateTime}
          />
        )}
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <CustomButton text="Cancelar" color="#2563EB" />
        <CustomButton text="Marcar" />
      </View>
      {/* Test */}
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
  },
  button: {
    backgroundColor: "#FACC15",
    padding: 14,
    borderRadius: 2,
  },
  scrollContainer: {
    flexGrow: 0,
    marginBottom: 20,
  },
  inputWithButton: {
    minWidth: "40%",
    height: 54,
    backgroundColor: "#E7F0FA",
    borderRadius: 2,
    padding: 15,
    fontSize: 18,
  },
});
