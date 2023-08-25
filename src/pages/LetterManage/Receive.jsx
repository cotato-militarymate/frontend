import React from "react";
import styled from "styled-components";

const ReceiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  w
`;

const ReceiveBox = styled.div`
  border: 1px solid gray;
  margin: 10px;
  padding: 20px;
  width: 200px;
  height: 100px;
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 8px;
`;

const NicknameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Nickname = styled.h2``;

const Receive = () => {
  const receiveData = [
    { nickname: "군대가기싫다" },
    { nickname: "군대좋아" },
    { nickname: "군린이" },
    { nickname: "애국자" },
    { nickname: "매국노" },
    { nickname: "그린" },
    { nickname: "하이" },
    { nickname: "동반입대" },
    // ... 추가적인 데이터
  ];

  return (
    <ReceiveContainer>
      {receiveData.map((data, index) => (
        <ReceiveBox key={index}>
          <NicknameWrapper>
            <Nickname>{data.nickname}</Nickname>
          </NicknameWrapper>
        </ReceiveBox>
      ))}
    </ReceiveContainer>
  );
};

export default Receive;
