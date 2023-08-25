import React from "react";
import styled from "styled-components";

const TabWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const TabItem = styled.div`
  padding: 10px 20px;
  color: ${(props) => (props.selected ? "black" : "grey")};
  border-bottom: 2px solid ${(props) => (props.selected ? "#3d523f" : "white")};
  cursor: pointer;
`;

const tabs = [{ id: "received" }, { id: "send" }];

const ReceiveSendTab = ({ selected }) => {
  return (
    <TabWrapper>
      {tabs.map((tab) => (
        <TabItem
          key={tab.id}
          selected={selected === tab.id}
          onClick={() => setSelectedButton(tab.id)}
        >
          {tab.label}
        </TabItem>
      ))}
    </TabWrapper>
  );
};

export default ReceiveSendTab;
