import React from "react";
import styled from "styled-components/native";

const PostDateStyled = styled.Text`
  font-size: 12px;
  font-weight: 600;
  color: grey;
`;

const PostDate = ({ children }) => <PostDateStyled>{children}</PostDateStyled>;

export default PostDate;
