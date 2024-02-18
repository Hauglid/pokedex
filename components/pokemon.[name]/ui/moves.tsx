import { Move, Stat } from "@/lib/definitions";
import { ScrollView, Text, View } from "react-native";
import { Divider } from "react-native-paper";

export function Moves({ moves }: { moves: Move[] }) {
  return (
    <View className="flex flex-row flex-wrap justify-center p-4 gap-4 ">
      {moves.map((move) => (
        <View
          key={move.move.name}
          className="rounded-full border shadow-md bg-white p-2"
        >
          <Text className="px-2 text-lg">{move.move.name.toUpperCase()}</Text>
        </View>
      ))}
    </View>
  );
}
