import AsyncStorage from "@react-native-async-storage/async-storage";

/// Example string "5:charmeleon, 8:wartortle, 10:caterpie"

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

export async function savePokemonFavourite(name: string, index: number) {
  const saved = await getSavedPokemonFavourites();
  try {
    if (saved.length === 0) {
      await AsyncStorage.setItem(STORAGE_KEY, `${index}:${name}`);
    } else {
      const newString = saved.join(",") + "," + `${index}:${name}`;
      await AsyncStorage.setItem(STORAGE_KEY, newString);
    }
  } catch (e) {
    // saving error
    console.error(e);
  }
}

export async function removePokemonFavourite(name: string) {
  const saved = await getSavedPokemonFavourites();
  try {
    await AsyncStorage.setItem(
      STORAGE_KEY,
      saved.filter((p) => !p.includes(name)).join(",")
    );
  } catch (e) {
    console.error(e);
    // saving error
  }
}

export async function isPokemonFavourite(pokemon: string) {
  const saved = await getSavedPokemonFavourites();
  return saved.some((p) => p.includes(pokemon));
}

export async function clearPokemonFavourites() {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error(e);
    // saving error
  }
}
