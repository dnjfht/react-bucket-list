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
  background-color: #ff6e6e;
  transition: 1s width;
`;

export default function Progress() {
  const bucketList = useSelector((state) => state.widgets.list);
  const count = bucketList.filter((bucket) => bucket.completed === true).length;

  console.log(count);

  return (
    <ProgressBar>
      <HightLight width={(count / bucketList.length) * 100 + "%"} />
    </ProgressBar>
  );
}
