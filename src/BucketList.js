//BucketList.js
// 리액트 패키지를 불러옵니다.
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const List = styled.div`
  padding: 0.8rem 1rem;
  box-sizing: border-box;
  margin-bottom: 1rem;
  background-color: #e0ebff;

  text-align: left;
`;

// 함수형 컴포넌트는 이렇게 쓸 수도 있고
// function Bucketlist(props){
//     return (
//         <div>버킷 리스트</div>
//     );
// }

// 이렇게 쓸 수도 있어요. =>가 들어간 함수를 화살표 함수라고 불러요.
// 저희는 앞으로 화살표 함수를 사용할거예요.
// 앗 () 안에 props! 부모 컴포넌트에게 받아온 데이터입니다.
// js 함수가 값을 받아오는 것과 똑같이 받아오네요.
const BucketList = () => {
  // Quiz 1: my_list에 ['a', 'b', 'c'] 대신 부모 컴포넌트가 넘겨준 값을 넣으려면 어떻게 해야할까요?
  // const my_lists = props.list;
  const my_wrap = React.useRef(null);

  console.log(my_wrap);
  // {current: null} => 초기값인 null이 뜨는 것.
  // 그런데 우리는 div를 넣어줬는데 왜 초기값이 뜨는가?
  // 위에서 my_wrap을 작성하고 바로 아래에서 my_wrap을 호출했기 때문.
  // 호출된 다음에 return이 실행되기 때문에 그제서야 div가 생김.

  window.setTimeout(() => {
    console.log(my_wrap);
  }, 1000);
  // 이렇게 하면 처음에는 null이 떴다가 그 뒤로는 1초마다 {current: div}를 호출함.

  const my_lists = useSelector((state) => state.widgets.list);
  console.log(my_lists);

  // 컴포넌트가 뿌려줄 ui 요소(리엑트 엘리먼트라고 불러요.)를 반환해줍니다.
  return (
    <div ref={my_wrap}>
      {
        // js의 내장 함수 중 하나인 map입니다. 리스트의 갯수만큼 => 오른쪽 구문을 반복해요.
        // 자세한 사용법은 아래 링크를 확인해주세요.
        // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
        my_lists.map((list, index) => {
          // 콘솔을 확인해봅시다 :)
          console.log(list);
          return (
            <List key={index}>
              <Link
                to="/detail"
                style={{ textDecoration: "none", color: "rgba(0,0,0,0.8)" }}
              >
                {list}
              </Link>
            </List>
          );
        })
      }
    </div>
  );
};

// 우리가 만든 함수형 컴포넌트를 export 해줍니다.
// export 해주면 다른 컴포넌트에서 BucketList 컴포넌트를 불러다 쓸 수 있어요.
export default BucketList;
