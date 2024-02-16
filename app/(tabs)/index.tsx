import { Text, View } from "@/components/Themed";
import { Link } from "expo-router";
import { Button } from "react-native-paper";

export default function HomeScreen() {
  return (
    <View>
      <Text>Tab One</Text>
      <View lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View className="p-2 rounded-xl border m-4">
        <Text className="text-lg">Test tailwind</Text>
      </View>
      <Link href={"/login"} asChild>
        Go to login
      </Link>
      <Button className="m-2" mode="outlined">
        Login
      </Button>
      <Button className="m-2" mode="contained">
        Login
      </Button>
      <Button className="m-2" mode="contained-tonal">
        Login
      </Button>
      <Button className="m-2" mode="elevated">
        Login
      </Button>
      <Button className="m-2" mode="text">
        Login
      </Button>
    </View>
  );
}
