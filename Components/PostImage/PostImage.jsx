import React from "react";
import styled from "styled-components/native";

const PostImageStyled = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  margin-right: 12px;
`;

const PostImage = ({ source }) => <PostImageStyled source={source} />;

export default PostImage;
