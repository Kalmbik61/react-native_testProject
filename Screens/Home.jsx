import { useEffect, useState } from "react";

import {
  StatusBar,
  Alert,
  Image,
  FlatList,
  View,
  Text,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
} from "react-native";

import Post from "../Components/Post/Post";
import p from "../test.json";

export default function Home() {
  const [posts, setPosts] = useState(p);
  const [load, setLoad] = useState(false);

  const imitateLoad = () => {
    setLoad(true);
    const time = setTimeout(() => {
      setLoad(false);
    }, 1000);

    return () => clearTimeout(time);
  };

  useEffect(() => {
    imitateLoad();
  }, []);

  if (load) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size='large' />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={{ marginTop: 30 }}>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={load} onRefresh={imitateLoad} />
        }
        data={posts}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => alert(item.text)}>
            <Post
              title={item.title}
              image={item.imageUrl}
              createdAt={item.createdAt}
              text={item.text}
            />
          </TouchableOpacity>
        )}
      />
      <StatusBar />
    </View>
  );
}
