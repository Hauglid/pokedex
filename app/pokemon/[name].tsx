import { ErrorComponent } from "@/components/pokemon.[name]/error";
import LoadingComponent from "@/components/pokemon.[name]/loading";
import { ProfileImage } from "@/components/pokemon.[name]/ui/profile-image";
import { SpritesList } from "@/components/pokemon.[name]/ui/spriteslist";
import { Stats } from "@/components/pokemon.[name]/ui/stats";
import { getColorFromType } from "@/lib/constants/Colors";
import { usePokemonQuery } from "@/lib/queries/usePokemonQuery";
import { capitalize } from "@/lib/utils";
import { FontAwesome6 } from "@expo/vector-icons";
import { useLocalSearchParams, useNavigation } from "expo-router";
import React from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from "react-native";
import { Button, SegmentedButtons, Text } from "react-native-paper";

/// Show a screen with the details of a pokemon
export default function PokemonScreen() {
  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const { name } = useLocalSearchParams<{ name: string }>();
  const query = usePokemonQuery(name);
  const [value, setValue] = React.useState("stats");

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
  const pokemon = query.data!;
  const type = pokemon.types[0].type.name;
  const backgroundColor = getColorFromType(type);

  return (
    <View style={{ backgroundColor }} className="h-full">
      <SafeAreaView>
        <View className="flex flex-row justify-between h-12">
          <Button mode="text" onPress={() => navigation.goBack()}>
            <FontAwesome6 name="arrow-left" size={24} color="black" />
          </Button>
        </View>
      </SafeAreaView>
      <ScrollView>
        <View>
          <View className="flex flex-row justify-between items-center pl-4 pr-8">
            <Text className="text-4xl pl-4">{capitalize(pokemon.name)}</Text>
            <Text className="pl-4 text-lg">#{pokemon.order}</Text>
          </View>
          <View className="items-center relative">
            <View className="h-16 absolute bottom-0 left-0 right-0 rounded-t-3xl bg-white " />
            <ProfileImage
              uri={pokemon.sprites.other["official-artwork"].front_default}
            />
          </View>
        </View>
        <View className="bg-white p-2 h-full ">
          <SegmentedButtons
            value={value}
            onValueChange={setValue}
            buttons={[
              {
                value: "stats",
                label: "Base Stats",
              },
              { value: "movies", label: "Moves" },
              { value: "sprites", label: "Sprites" },
            ]}
          />

          {value === "stats" && <Stats stats={pokemon.stats} />}
          {value === "sprites" && <SpritesList sprites={pokemon.sprites} />}
        </View>
      </ScrollView>
    </View>
  );
}
