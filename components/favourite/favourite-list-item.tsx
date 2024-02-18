import { Pokemon } from "@/lib/definitions";
import { usePokemonQuery } from "@/lib/queries/usePokemonQuery";
import { capitalize } from "@/lib/utils";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import LoadingComponent from "../pokemon.[name]/loading";
import { ErrorComponent } from "../pokemon.[name]/error";

export function FavouriteListItem({ name }: { name: string }) {
  return (
    <View className="flex flex-row justify-between items-center p-4">
      <Text>** {capitalize(name)}**</Text>
    </View>
  );
}
