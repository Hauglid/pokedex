import { Tabs } from "expo-router";
import React from "react";

import { useColorScheme } from "@/components/useColorScheme";
import Colors from "@/lib/constants/Colors";
import { useFavouritePokemonQuery } from "@/lib/queries/useFavouritePokemonQuery";
import { clearPokemonFavourites } from "@/lib/storage";
import { FontAwesome, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { ActivityIndicator, Button } from "react-native-paper";
import { View } from "react-native";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const favouriteQuery = useFavouritePokemonQuery();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Pokemons",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="catching-pokemon" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favourites"
        listeners={{
          focus: () => {
            favouriteQuery.refetch();
          },
        }}
        options={{
          title: "Favourites",
          headerRight: () => {
            return (
              <View className="pr-4 mr-4 rounded-full">
                <FontAwesome
                  onPress={() => {
                    clearPokemonFavourites();
                    favouriteQuery.refetch();
                  }}
                  name="trash-o"
                  size={24}
                  color="black"
                />
              </View>
            );
          },
          tabBarIcon: ({ color, focused, size }) => {
            if (focused) {
              return <FontAwesome name="heart" size={size} color={color} />;
            }
            return <FontAwesome6 size={size} name="heart" color={color} />;
          },
        }}
      />
    </Tabs>
  );
}
