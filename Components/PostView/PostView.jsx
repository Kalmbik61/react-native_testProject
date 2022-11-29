import React from "react";
import styled from "styled-components/native";

const PostViewStyled = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  bodred-botom-style: solid;
`;

const PostView = ({ children }) => <PostViewStyled>{children}</PostViewStyled>;

export default PostView;
