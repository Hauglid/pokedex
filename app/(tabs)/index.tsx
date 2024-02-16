import { Text, View } from "@/components/Themed";
import { PokemonSimple } from "@/lib/definitions";
import { usePokemonListQuery } from "@/lib/queries/usePokemonListQuery";
import { Link } from "expo-router";
import { ScrollView } from "react-native";

export default function HomeScreen() {
  const query = usePokemonListQuery();

  return (
    <View>
      {query.isLoading ? (
        <Text>Loading...</Text>
      ) : query.isError ? (
        <Text>Error: {query.error.message}</Text>
      ) : (
        <ScrollView className="-auto">
          {query.data!.results.map((pokemon: PokemonSimple) => (
            <Link
              key={pokemon.name}
              href={`/pokemon/${pokemon.name}`}
              className="p-2 bg-gray-200 m-2"
            >
              <Text>{pokemon.name}</Text>
            </Link>
          ))}
        </ScrollView>
      )}
    </View>
  );
}
