import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import Detail from "../page/Detail";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </>
  );
}
