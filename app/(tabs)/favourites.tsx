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

  return (
    <FlatList
      refreshing={query.isLoading || query.isFetching}
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
      data={
        query.data?.sort((a, b) => {
          const values = a.split(":");
          const values2 = b.split(":");
          return parseInt(values[0]) - parseInt(values2[0]);
        }) ?? ""
      }
      keyExtractor={(item) => item}
      renderItem={({ item }) => {
        const values = item.split(":");
        return <PokemonListItem name={values[1]} index={parseInt(values[0])} />;
      }}
    />
  );
}
