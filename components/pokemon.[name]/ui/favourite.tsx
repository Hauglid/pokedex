import { useFavouritePokemonQuery } from "@/lib/queries/useFavouritePokemonQuery";
import { useIsPokemonFavouriteQuery } from "@/lib/queries/useIsPokemonFavouriteQuery";
import {
  isPokemonFavourite,
  removePokemonFavourite,
  savePokemonFavourite,
} from "@/lib/storage";
import {
  EvilIcons,
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
} from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Pressable } from "react-native";

export function Favourite({ name, index }: { name: string; index: number }) {
  const query = useIsPokemonFavouriteQuery(name);

  if (query.isLoading) {
    return <FontAwesome5 name="spinner" size={48} color="black" />;
  }

  if (query.isError) {
    return <FontAwesome5 name="exclamation" size={48} color="black" />;
  }
  const isFavourite = query.data!;

  if (isFavourite) {
    return (
      <Pressable
        onPress={async () => {
          await removePokemonFavourite(name);
          query.refetch();
        }}
      >
        <FontAwesome name="heart" size={48} color="red" />
      </Pressable>
    );
  } else {
    return (
      <Pressable
        onPress={async () => {
          await savePokemonFavourite(name, index);
          query.refetch();
        }}
      >
        <FontAwesome6
          name="heart"
          backgroundColor="white"
          size={48}
          color="black"
        />
      </Pressable>
    );
  }
}
