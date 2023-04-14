import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  completedWidget,
  deleteBucketFB,
  removeWidget,
  updateBucketFB,
} from "../redux/modules/widgets";

const DetailWrap = styled.div`
  width: 100%;
  height: 360px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const SubTitle = styled.h2`
  color: rgba(0, 0, 0, 0.8);
  font-size: 1.4rem;
`;

const SuccessButton = styled.button``;

const DeleteBucket = styled.button`
  padding: 10px 20px;
  background-color: transparent;
  border: 1px solid rgb(81, 93, 196);
  border-radius: 50px;

  color: #3e3885;
  font-weight: 600;

  cursor: pointer;

  &:hover {
    background-color: #3e3885;

    color: white;
  }
`;

const PrevBucket = styled.button`
  padding: 10px 20px;
  background-color: transparent;
  border: 1px solid rgb(81, 93, 196);
  border-radius: 50px;

  color: #3e3885;
  font-weight: 600;

  cursor: pointer;

  &:hover {
    background-color: #3e3885;

    color: white;
  }
`;

export default function Detail() {
  const bucketList = useSelector((state) => state.widgets.list);
  console.log(bucketList);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const params = useParams();
  let bucket_index = parseInt(params.id);
  console.log(bucket_index);
  // 페이지에 해당하는 id가 숫자로 들어옴

  const deleteBucket = () => {
    // dispatch(removeWidget(bucket_index));
    dispatch(deleteBucketFB(bucketList[bucket_index].id));

    navigate(-1);
  };

  const onClickCompleted = () => {
    // dispatch(completedWidget(bucket_index));
    dispatch(updateBucketFB(bucketList[bucket_index].id));
    console.log(bucketList);
  };

  return (
    <DetailWrap>
      <SubTitle>{`${bucket_index}번째 상세페이지`}</SubTitle>
      <h1>{bucketList[bucket_index] ? bucketList[bucket_index].text : ""}</h1>

      <SuccessButton onClick={onClickCompleted}>완료하기</SuccessButton>
      <DeleteBucket onClick={deleteBucket}>Delete</DeleteBucket>
      <PrevBucket
        onClick={() => {
          navigate(-1);
        }}
      >
        Prev
      </PrevBucket>
    </DetailWrap>
  );
}
