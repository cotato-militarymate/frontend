import React from "react";
import Receive from "./Receive";
import Send from "./Send";

const ReceiveSendContent = ({ selected }) => {
  return (
    <div>
      {selected === "received" && <Receive />}
      {selected === "send" && <Send />}
    </div>
  );
};

export default ReceiveSendContent;
