import React from "react";
import { Routes, Route } from "react-router-dom";
import BucketList from "../BucketList";
import Detail from "../page/Detail";
import NotFound from "../page/NotFound";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BucketList />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
        {/* 
        * : URL 변경이 감지되면 첫 번째 Route부터 순차적으로 탐색을 하게 되는데,
         위의 내용과 모두 match가 되지 않을 때 *에 해당하는 Route의 내용을 렌더링.
         즉, 위의 것 이외의 라는 의미를 지님 
        */}
      </Routes>
    </>
  );
}
