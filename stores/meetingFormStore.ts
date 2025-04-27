import { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { create } from "zustand";

// This is the type of my store
type MeetingFormStore = {
  date: Date;
  time: Date;
  datePickerIsShown: boolean;
  mode: "date" | "time";
  showDate: () => void;
  showTime: () => void;
  onChangeDateTime: (e: DateTimePickerEvent, date?: Date) => void;
};

// This is the creation of the store, this is a custom hook
export const useMeetingFormStore = create<MeetingFormStore>((set) => ({
  date: new Date(),
  time: new Date(),
  mode: "date",
  datePickerIsShown: false,
  showDate: () => {
    set((state) => ({ ...state, mode: "date", datePickerIsShown: true }));
  },
  showTime: () => {
    set((state) => ({ ...state, mode: "time", datePickerIsShown: true }));
  },
  onChangeDateTime(_e, date) {
    set((state) => ({
      ...state,
      date: state.mode === "date" ? date : state.date,
      time: state.mode === "time" ? date : state.time,
      datePickerIsShown: false,
    }));
  },
}));
