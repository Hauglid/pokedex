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

export function Favourite({ name }: { name: string }) {
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    isPokemonFavourite(name).then((fave) => {
      setIsFavourite(fave);
      return;
    });
  });

  if (isFavourite) {
    return (
      <Pressable
        onPress={() => {
          removePokemonFavourite(name);
          setIsFavourite(false);
        }}
      >
        <FontAwesome name="heart" size={48} color="red" />
      </Pressable>
    );
  } else {
    return (
      <Pressable
        onPress={() => {
          savePokemonFavourite(name);
          setIsFavourite(true);
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
