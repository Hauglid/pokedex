import { Sprites } from "@/lib/definitions";
import { ScrollView, Text, View, Image } from "react-native";

export function SpritesList({ sprites }: { sprites: Sprites }) {
  return (
    <View className="flex flex-row flex-wrap justify-between p-4 ">
      <Sprite
        uri={sprites.front_default}
        key={"sprites.front_default"}
        name="Front"
      />
      <Sprite
        uri={sprites.back_default}
        key={"sprites.back_default"}
        name="Back"
      />
      <Sprite
        uri={sprites.front_female}
        key={"sprites.front_female"}
        name="Front Female"
      />
      <Sprite
        uri={sprites.front_shiny}
        key={"sprites.front_shiny"}
        name="Front Shiny"
      />
      <Sprite
        uri={sprites.back_shiny}
        key={"sprites.back_shiny"}
        name="Back Shiny"
      />
      <Sprite
        uri={sprites.front_shiny_female}
        key={"sprites.front_shiny_female"}
        name="Front Shiny Female"
      />
      <Sprite
        uri={sprites.back_shiny_female}
        key={"sprites.back_shiny_female"}
        name="Back Shiny Female"
      />
    </View>
  );
}

function Sprite({ uri, name }: { uri: string | undefined; name: string }) {
  if (!uri) return null;

  return (
    <View className="">
      <View className="shadow-md bg-white border rounded ">
        <Image
          className="w-28 aspect-square p-2 "
          source={{
            uri: uri,
          }}
        />
      </View>
      <Text className="text-center text-sm mb-4">{name}</Text>
    </View>
  );
}
