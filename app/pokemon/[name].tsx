import { ErrorComponent } from "@/components/pokemon.[name]/error";
import LoadingComponent from "@/components/pokemon.[name]/loading";
import { Favourite } from "@/components/pokemon.[name]/ui/favourite";
import { Moves } from "@/components/pokemon.[name]/ui/moves";
import { ProfileImage } from "@/components/pokemon.[name]/ui/profile-image";
import { SpritesList } from "@/components/pokemon.[name]/ui/spriteslist";
import { Stats } from "@/components/pokemon.[name]/ui/stats";
import {
  getPrimaryColorFromType,
  getTextColorFromColor,
  getAccentColorFromType,
} from "@/lib/constants/Colors";
import { usePokemonQuery } from "@/lib/queries/usePokemonQuery";
import { capitalize } from "@/lib/utils";
import { FontAwesome } from "@expo/vector-icons";
import { useHeaderHeight } from "@react-navigation/elements";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { SegmentedButtons, Text } from "react-native-paper";

/// Show a screen with the details of a pokemon
export default function PokemonScreen() {
  const { name } = useLocalSearchParams<{ name: string }>();
  const query = usePokemonQuery(name);
  const [value, setValue] = React.useState("stats");
  const headerHeight = useHeaderHeight();

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
  const backgroundColor = getPrimaryColorFromType(type);

  return (
    <View
      style={{ backgroundColor, paddingTop: headerHeight }}
      className="h-full"
    >
      <ScrollView>
        <View>
          <View className="flex flex-row justify-between items-center pt-8 pl-4 pr-8">
            <Text
              style={{ color: getTextColorFromColor(backgroundColor) }}
              className="text-5xl "
            >
              {capitalize(pokemon.name)}
            </Text>
            <Text
              style={{ color: getTextColorFromColor(backgroundColor) }}
              className=" text-lg"
            >
              # {pokemon.id.toString().padStart(3, "0")}
            </Text>
          </View>
          <ScrollView horizontal>
            <View className="flex flex-row justify-start pl-2">
              {pokemon.types.map((type) => {
                const backgroundColor = getAccentColorFromType(type.type.name);
                const textColor = getTextColorFromColor(backgroundColor);

                return (
                  <View
                    key={type.type.name}
                    className="bg-white rounded-full overflow-hidden m-2 items-center border  "
                  >
                    <View
                      style={{
                        backgroundColor: backgroundColor,
                      }}
                      key={type.type.name}
                      className="items-center   px-4 py-2  "
                    >
                      <Text style={{ color: textColor }}>
                        {capitalize(type.type.name)}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>
          </ScrollView>
          <View className="items-center relative">
            <View className="h-16 absolute bottom-0 left-0 right-0 rounded-t-3xl bg-white "></View>
            <View className="absolute bottom-2 left-4">
              <Favourite name={pokemon.name} index={pokemon.id} />
            </View>
            <ProfileImage
              uri={pokemon.sprites.other["official-artwork"].front_default}
            />
          </View>
        </View>

        <View className="bg-white p-2 pb-4 h-full ">
          <SegmentedButtons
            value={value}
            onValueChange={setValue}
            buttons={[
              {
                value: "stats",
                label: "Base Stats",
              },
              { value: "moves", label: "Moves" },
              { value: "sprites", label: "Sprites" },
            ]}
          />
          {value === "stats" && (
            <Stats
              stats={pokemon.stats}
              weight={pokemon.weight}
              height={pokemon.height}
            />
          )}
          {value === "moves" && <Moves moves={pokemon.moves} />}
          {value === "sprites" && <SpritesList sprites={pokemon.sprites} />}
        </View>
      </ScrollView>
    </View>
  );
}
