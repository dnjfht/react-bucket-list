import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeWidget } from "../redux/modules/widgets";

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

export default function Detail() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const params = useParams();
  let bucket_index = parseInt(params.id);
  console.log(bucket_index);
  // 페이지에 해당하는 id가 숫자로 들어옴

  const deleteBucket = () => {
    dispatch(removeWidget(bucket_index));

    navigate(-1);
  };

  return (
    <DetailWrap>
      <SubTitle>{`${bucket_index}번째 상세페이지`}</SubTitle>

      <DeleteBucket onClick={deleteBucket}>Delete</DeleteBucket>
    </DetailWrap>
  );
}
