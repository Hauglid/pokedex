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
      onEndReachedThreshold={0.5}
      renderItem={({ item }) => (
        <Link
          asChild
          className="w-full border rounded bg-gray-100 p-4"
          href={`/pokemon/${item.name}`}
        >
          <Pressable className="flex flex-row justify-between items-center">
            <Text className="text-lg">{capitalize(item.name)}</Text>
            <FontAwesome6 name="arrow-right" size={18} color="black" />
          </Pressable>
        </Link>
      )}
    />
  );
}
