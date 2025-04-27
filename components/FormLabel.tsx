import { Text } from "react-native";

type Props = {
  label: string;
};

export default function FormLabel({ label }: Props) {
  return (
    <Text
      style={{
        fontSize: 16,
        marginStart: 2,
        marginBottom: 10,
      }}
    >
      {label}
    </Text>
  );
}
