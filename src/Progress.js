import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const ProgressBar = styled.div`
  width: 100%;
  height: 40px;
  background-color: #eee;
  margin-bottom: 50px;
`;

const HightLight = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  background-color: #96b0e6;
  transition: 1s width;

  position: relative;
`;

const Circle = styled.div`
  width: 43px;
  height: 43px;
  background-color: white;
  border: 7px solid #515dc4;
  border-radius: 50px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);

  position: absolute;
  top: 50%;
  margin-top: -28.5px;
  right: -20px;
`;

export default function Progress() {
  const bucketList = useSelector((state) => state.widgets.list);
  const count = bucketList.filter((bucket) => bucket.completed === true).length;

  console.log(count);

  return (
    <ProgressBar>
      <HightLight width={(count / bucketList.length) * 100 + "%"}>
        <Circle />
      </HightLight>
    </ProgressBar>
  );
}
