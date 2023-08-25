import React, { useState } from "react";
import ReceiveSendTab from "./ReceiveSendTab";
import ReceiveSendContent from "./ReceiveSendContent";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 15px 30px;
  margin: 0 10px;
  background-color: white;
  color: ${(props) => (props.selected ? "black" : "grey")};
  border: 2px solid ${(props) => (props.selected ? "#3d523f" : "white")};
  border-radius: 8px;
  cursor: pointer;
`;

export default function LetterManage() {
  const [selectedButton, setSelectedButton] = useState("received");

  return (
    <div>
      <ButtonWrapper>
        <Button
          type="button"
          selected={selectedButton === "received"}
          onClick={() => setSelectedButton("received")}
        >
          받은 영장
        </Button>
        <Button
          type="button"
          selected={selectedButton === "send"}
          onClick={() => setSelectedButton("send")}
        >
          보낸 영장
        </Button>
      </ButtonWrapper>
      <ReceiveSendTab selected={selectedButton} />
      <ReceiveSendContent selected={selectedButton} />
    </div>
  );
}
