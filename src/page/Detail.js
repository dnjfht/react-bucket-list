import React from "react";
import styled from "styled-components";

const DetailWrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ececec;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default function Datail() {
  return <DetailWrap>Detail 화면입니다.</DetailWrap>;
}
