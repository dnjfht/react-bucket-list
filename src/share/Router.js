import React from "react";
import { Routes, Route } from "react-router-dom";
import BucketList from "../BucketList";
import Detail from "../page/Detail";

export default function Router({ list }) {
  return (
    <>
      <Routes>
        <Route path="/" element={<BucketList list={list} />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </>
  );
}
