import { Image } from "react-native";
export function ProfileImage({ uri }: { uri: string }) {
  return <Image source={{ uri: uri }} className="w-3/4 aspect-square " />;
}
