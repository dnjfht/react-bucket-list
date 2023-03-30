import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NotFoundWrap = styled.div`
  width: 100%;
  height: 360px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const NotRight = styled.h1`
  color: rgba(0, 0, 0, 0.8);
  font-size: 1.4rem;
`;

const GoBack = styled.button`
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

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <NotFoundWrap>
      <NotRight>404 Error</NotRight>

      <GoBack
        onClick={() => {
          navigate(-1);
        }}
      >
        {`<< Go Back`}
      </GoBack>
    </NotFoundWrap>
  );
}
