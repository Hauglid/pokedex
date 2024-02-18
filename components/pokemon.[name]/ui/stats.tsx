import { Stat } from "@/lib/definitions";
import { ScrollView, Text, View } from "react-native";

export function Stats({ stats }: { stats: Stat[] }) {
  return (
    <View>
      <View className="flex flex-row flex-wrap  p-4 gap-4 ">
        {stats.map((stat) => (
          <View
            key={stat.stat.name}
            className="border flex-grow min-w-0  rounded-xl p-4 shadow bg-white"
          >
            <Text className="text-center min-w-0 " key={stat.stat.name}>
              {stat.stat.name.toUpperCase()}
            </Text>
            <Text className="text-3xl text-center min-w-0">
              {stat.base_stat}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}
