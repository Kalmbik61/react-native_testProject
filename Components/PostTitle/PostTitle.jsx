import React from "react";
import styled from "styled-components/native";

const PostTitleStyled = styled.Text`
  font-size: 14px;
  font-weight: 400;
`;

const PostTitle = ({ children }) => (
  <PostTitleStyled>{children}</PostTitleStyled>
);

export default PostTitle;
