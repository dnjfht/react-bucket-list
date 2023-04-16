import React from "react";
import styled from "styled-components";
import { Eco } from "@material-ui/icons";

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ede2ff;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;
`;

export default function Spinner() {
  return (
    <Wrap>
      <Eco style={{ color: "#673ab7", fontSize: "150px" }} />
    </Wrap>
  );
}
