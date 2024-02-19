import { PokemonListItem } from "@/components/pokemon-list-item";
import { usePokemonListQuery } from "@/lib/queries/usePokemonListQuery";
import { capitalize } from "@/lib/utils";
import { FontAwesome6 } from "@expo/vector-icons";
import { Link } from "expo-router";
import { FlatList, Pressable, View, Text } from "react-native";

export default function HomeScreen() {
  const query = usePokemonListQuery();

  return (
    <FlatList
      refreshing={true}
      ListFooterComponent={() => <Text>Loading...</Text>}
      ListEmptyComponent={() => <Text>No results</Text>}
      className="p-4 bg-white"
      ItemSeparatorComponent={() => <View className="h-4" />}
      data={query.data?.pages.flatMap((page) => page.results) ?? []}
      keyExtractor={(item) => item.name}
      onEndReached={() => query.fetchNextPage()}
      onEndReachedThreshold={1}
      renderItem={({ item, index }) => (
        <PokemonListItem name={item.name} index={index} />
      )}
    />
  );
}
