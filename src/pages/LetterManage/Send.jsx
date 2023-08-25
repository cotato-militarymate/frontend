import React from "react";
import styled from "styled-components";

const SendContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SendBox = styled.div`
  border: 1px solid gray;
  margin: 10px;
  padding: 20px;
  width: 200px;
  height: 100px;
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 8px;
`;

const Age = styled.p`
  color: black;
`;

const NicknameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Nickname = styled.h2``;

const Send = () => {
  const sendData = [
    { nickname: "입대싫다", age: "25", address: "서울 마포" },
    { nickname: "입대미쳐", age: "24", address: "서울 동작" },
    { nickname: "애국인", age: "23", address: "서울 구로" },
    { nickname: "애국가1절", age: "21", address: "경기 수원" },
    { nickname: "애국가2절", age: "22", address: "대전 서구" },
    { nickname: "강한친구대한육군", age: "21", address: "서울 용산" },
    { nickname: "공군최고", age: "21", address: "서울 강남" },
    { nickname: "해군바라기", age: "28", address: "서울 강남" },
    { nickname: "간부싫어", age: "21", address: "서울 서초" },
    { nickname: "입영장병", age: "23", address: "서울 방배" },
    { nickname: "입영장병", age: "23", address: "경기 구리" },
    { nickname: "입영장병", age: "23", address: "경기 화성" },
    // ... 추가적인 데이터
  ];

  return (
    <SendContainer>
      {sendData.map((data, index) => (
        <SendBox key={index}>
          <NicknameWrapper>
            <Nickname>{data.nickname}</Nickname>
            <Nickname>{data.age}</Nickname>
            <Nickname>{data.address}</Nickname>
          </NicknameWrapper>
        </SendBox>
      ))}
    </SendContainer>
  );
};

export default Send;
