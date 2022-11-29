import PostView from "../PostView/PostView";
import PostImage from "../PostImage/PostImage";
import PostDetails from "../PostDetails/PostDetails";
import PostTitle from "../PostTitle/PostTitle";
import PostDate from "../PostDate/PostDate";

export default function Post({ title, image, text, createdAt }) {
  return (
    <PostView>
      <PostImage source={{ uri: image }} />
      <PostDetails>
        <PostTitle>{title}</PostTitle>
        <PostDate>{createdAt}</PostDate>
      </PostDetails>
    </PostView>
  );
}
