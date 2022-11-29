import { StatusBar, View } from "react-native";

import Post from "./Components/Post/Post";
import FullPost from "./Screens/FullPost";
import Home from "./Screens/Home";
import p from "./test.json";

export default function App() {
  return (
    <View style={{ marginTop: 30 }}>
      <Home />
      <StatusBar />
    </View>
  );
}
