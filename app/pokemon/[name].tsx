import { usePokemonQuery } from "@/lib/queries/usePokemonQuery";
import { useLocalSearchParams } from "expo-router";
import { View, Text, Image } from "react-native";

/// Show a screen with the details of a pokemon
export default function PokemonScreen() {
  const { name } = useLocalSearchParams<{ name: string }>();
  const query = usePokemonQuery(name);

  return (
    <View>
      {query.isLoading ? (
        <Text>Loading...</Text>
      ) : query.isError ? (
        <Text>Error: {query.error.message}</Text>
      ) : (
        <View>
          <Text>{query.data!.name}</Text>
          <Image
            className="w-auto aspect-square  "
            source={{
              uri: query.data!.sprites.front_default,
            }}
          />
        </View>
      )}
    </View>
  );
}
