import React, { useState } from "react";
import { styled } from "styled-components";
import Posts from "./Posts"; // Posts 컴포넌트 경로를 적절하게 수정해주세요
import Writing from "./Writing"; // Writing 컴포넌트 경로를 적절하게 수정해주세요

const App = () => {
  const [selected, setSelected] = useState("board");

  const setSelect = (page) => {
    setSelected(page);
  };

  return (
    <div>
      {selected === "board" && <Posts setSelect={setSelect} />}
      {selected === "writing" && <Writing setSelect={setSelect} />}
    </div>
  );
};

// 스타일 등의 코드는 그대로 사용

export default App;
