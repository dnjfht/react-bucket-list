// import "./App.css";
// import { BucketList } from "./BucketList";
// import BucketList from "./BucketList";

// function App() {
//   return (
//     <div className="App">
//       <BucketList />
//     </div>
//   );
// }

import React from "react";
// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import BucketList from "./BucketList";
// import "./style.css";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ececec;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MyStyled = styled.div`
  width: 360px;
  max-width: 360px;
  height: 600px;
  padding: 2rem;
  box-sizing: border-box;
  border: 1px solid #dfdfdf;
  margin: 0 auto;
  // background-color: #fff;
  // background-color: ${(props) => props.bg_color};
  // 삼항연산자는 쓸 수 있지만 if문, for문은 쓸 수 없음

  background-color: ${(props) => (props.bg_color ? "white" : "pink")};

  text-align: center;

  // SCSS 문법
  // 중괄호 안에다가 다 써주는 기법을 nesting이라고 함
  // nesting을 styled-components 안에서도 해줄 수 있음
  p {
    color: blue;
  }
  /* &:hover {
    background-color: #f4f4f4;
  } */
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #dfdfdf;

  color: rgb(81, 93, 196);
`;

const InputWrap = styled.div`
  width: 360px;
  max-width: 360px;
  height: 200px;
  padding: 2rem;
  box-sizing: border-box;
  border: 1px solid #dfdfdf;
  margin: 20px auto;
  background-color: white;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const BucketInput = styled.input`
  padding: 10px;
  background-color: transparent;
  border: 1px solid #577bc5;
  border-radius: 10px;

  color: #52515d;

  outline: none;
`;

const AddButton = styled.button`
  padding: 10px;
  margin-left: 4px;
  background-color: #4d55c2;
  border: none;
  border-radius: 10px;

  color: white;
  font-weight: 300;
`;

// 클래스형 컴포넌트는 이렇게 생겼습니다!
class App extends React.Component {
  // super를 사용해 부모 class에 있는 것들을 받아옴
  constructor(props) {
    super(props);
    // App 컴포넌트의 state를 정의해줍니다.
    // App class 컴포넌트에서 가지고 있는 데이터들
    this.state = {
      list: ["영화관 가기", "매일 책읽기", "수영 배우기"],
    };

    this.text = React.createRef();
    // ref => 이름표 같은 것
  }

  componentDidMount() {
    console.log(this.text);
    // {current: input}
    console.log(this.text.current);
    // <input type="text">
  }

  addBucket = (event) => {
    event.preventDefault();
    console.log(this.text.current.value);

    let new_item = this.text.current.value;

    this.setState({ list: [...this.state.list, new_item] });

    this.text.current.value = "";
  };

  // 랜더 함수 안에 리액트 엘리먼트를 넣어줍니다!
  render() {
    console.log(this.text.current);

    console.log(this.state.list);
    // ['영화관 가기', '매일 책읽기', '수영 배우기']

    // 갖다 붙힐 요소들을 render 아래에 추가
    return (
      <Wrap>
        <MyStyled bg_color={true}>
          <p>I can do it !!!</p>
          <Title>내 버킷리스트</Title>
          {/* 컴포넌트를 넣어줍니다. */}
          {/* <컴포넌트 명 [props 명]={넘겨줄 것(리스트, 문자열, 숫자, ...)}/> */}
          <BucketList list={this.state.list} />
        </MyStyled>

        <InputWrap>
          <BucketInput
            type="text"
            ref={this.text}
            onChange={() => {
              console.log(this.text.current.value);
            }}
          />
          <AddButton onClick={this.addBucket}>추가하기</AddButton>
        </InputWrap>
      </Wrap>
    );
  }
}

export default App;
