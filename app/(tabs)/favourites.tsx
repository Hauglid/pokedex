import { FavouriteListItem } from "@/components/favourite/favourite-list-item";
import { PokemonListItem } from "@/components/pokemon-list-item";
import { ErrorComponent } from "@/components/pokemon.[name]/error";
import LoadingComponent from "@/components/pokemon.[name]/loading";
import { useFavouritePokemonQuery } from "@/lib/queries/useFavouritePokemonQuery";
import {
  clearPokemonFavourites,
  getSavedPokemonFavourites,
} from "@/lib/storage";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  ScrollView,
  Text,
  View,
} from "react-native";
import { Button } from "react-native-paper";

export default function FavouritesScreen() {
  const query = useFavouritePokemonQuery();

  if (query.isLoading) {
    return (
      <View className="m-auto">
        <LoadingComponent />
      </View>
    );
  }
  if (query.isError) {
    return (
      <View className="m-auto">
        <ErrorComponent message={"query.error.message"} />
      </View>
    );
  }
  const favourites = query.data!;

  return (
    <FlatList
      refreshing={query.isFetching}
      refreshControl={
        <RefreshControl
          refreshing={query.isFetching}
          onRefresh={query.refetch}
        />
      }
      ListFooterComponent={() =>
        query.isFetching ? <Text>Loading...</Text> : null
      }
      ListEmptyComponent={
        query.isFetching ? (
          <ActivityIndicator animating={true} />
        ) : (
          <View>
            <Text>0 results</Text>
          </View>
        )
      }
      className="p-4 bg-white"
      ItemSeparatorComponent={() => <View className="h-4" />}
      data={query.data?.flatMap((page) => page) ?? ""}
      keyExtractor={(item) => item}
      renderItem={({ item }) => <PokemonListItem name={item} />}
    />
  );
}
