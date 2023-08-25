import React, { useState } from "react";
import styled from "styled-components"; // Corrected import
import Posts from "./Posts";
import Writing from "./Writing";

const Button = styled.button`
  display: flex;
  flex-direction: column;
  color: white;
  padding: 10px;
  background-color: #3d523f;
  margin-top: 20px;
  margin-left: 1170px;
  margin-bottom: -200px;
  border-radius: 8px;
`;

const App = () => {
  const [selected, setSelected] = useState("board");

  const setSelect = (page) => {
    setSelected(page);
  };

  return (
    <div>
      <Button type="button" onClick={() => setSelect("writing")}>
        게시글 작성하기
      </Button>
      {selected === "board" && <Posts setSelect={setSelect} />}
      {selected === "writing" && <Writing setSelect={setSelect} />}
    </div>
  );
};

export default App;
