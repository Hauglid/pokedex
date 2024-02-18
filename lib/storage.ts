import AsyncStorage from "@react-native-async-storage/async-storage";

/// Example string "1,4,6,39,111"

const STORAGE_KEY = "POKEMON_FAVOURITES";
export async function getSavedPokemonFavourites(): Promise<string[]> {
  try {
    const value = await AsyncStorage.getItem(STORAGE_KEY);
    if (value !== null) {
      // value previously stored
      return value.split(",");
    }
  } catch (e) {
    console.error(e);
    // error reading value
  }
  return [];
}

export async function savePokemonFavourite(pokemonId: string) {
  const saved = await getSavedPokemonFavourites();
  try {
    if (saved.length === 0) {
      await AsyncStorage.setItem(STORAGE_KEY, pokemonId);
    } else {
      const newString = saved.join(",") + "," + pokemonId;
      console.log({ newString });
      await AsyncStorage.setItem(STORAGE_KEY, newString);
    }
  } catch (e) {
    // saving error
    console.error(e);
  }
}

export async function removePokemonFavourite(pokemonId: string) {
  const saved = await getSavedPokemonFavourites();
  try {
    await AsyncStorage.setItem(
      STORAGE_KEY,
      saved.filter((p) => p !== pokemonId).join(",")
    );
  } catch (e) {
    console.error(e);
    // saving error
  }
}

export async function isPokemonFavourite(pokemon: string) {
  const saved = await getSavedPokemonFavourites();
  return saved.includes(pokemon);
}

export async function clearPokemonFavourites() {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error(e);
    // saving error
  }
}
