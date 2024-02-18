import { Stat } from "@/lib/definitions";
import { ScrollView, Text, View } from "react-native";

export function Stats({
  stats,
  weight,
  height,
}: {
  stats: Stat[];
  weight: number;
  height: number;
}) {
  return (
    <View className="flex flex-row flex-wrap  p-4 gap-4 ">
      <View className="bg-white flex flex-row justify-center w-full space-x-10 pb-5">
        <View className="flex flex-row space-x-5 px-4 border-b">
          <Text className="text-xl">Weight:</Text>
          <Text className="text-xl">{weight}</Text>
        </View>
        <View className="flex flex-row space-x-5 px-4 items-center border-b">
          <Text className="text-xl">Height:</Text>
          <Text className="text-xl">{height}</Text>
        </View>
      </View>
      {stats.map((stat) => (
        <View
          key={stat.stat.name}
          className="border flex-grow min-w-0  rounded-xl p-4 shadow bg-white"
        >
          <Text className="text-center min-w-0 ">
            {stat.stat.name.toUpperCase()}
          </Text>
          <Text className="text-3xl text-center min-w-0">{stat.base_stat}</Text>
        </View>
      ))}
    </View>
  );
}
