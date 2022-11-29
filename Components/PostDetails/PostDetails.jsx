import React from "react";
import styled from "styled-components/native";

const PostDetailsStyled = styled.View`
  justify-content: center;
  flex: 1;
`;

const PostDetails = ({ children }) => (
  <PostDetailsStyled>{children}</PostDetailsStyled>
);

export default PostDetails;
