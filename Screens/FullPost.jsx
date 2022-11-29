import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import p from "../test.json";

const PostImage = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 12px;
  margin-right: 12px;
`;

const PostText = styled.Text`
  font-size: 16px;
  margin-top: 20px;
`;

export default function FullPost() {
  const [post, setPost] = useState(p);
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
  return (
    <View style={{ padding: 20 }}>
      <PostImage source={{ uri: "http://art.mau.ru/foto/dream/001.jpg" }} />
      <PostText> {text} </PostText>
    </View>
  );
}
