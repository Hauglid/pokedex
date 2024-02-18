import { capitalize } from "@/lib/utils";
import { FontAwesome6 } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Pressable, View, Text } from "react-native";

export function PokemonListItem({
  name,
  index,
}: {
  name: string;
  index?: number;
}) {
  return (
    <Link
      asChild
      className="w-full border rounded-xl bg-gray-100 p-4"
      href={`/pokemon/${name}`}
    >
      <Pressable className="flex flex-row justify-between items-center">
        <View className="flex flex-row items-center gap-4">
          {index !== undefined && (
            <Text>#{(index + 1).toString().padStart(3, "0")}</Text>
          )}
          <Text className="text-lg">{capitalize(name)}</Text>
        </View>
        <FontAwesome6 name="arrow-right" size={18} color="black" />
      </Pressable>
    </Link>
  );
}
