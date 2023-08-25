import React, { useState } from "react";
import { styled } from "styled-components";
import Posts from "./Posts"; // 이곳에 Posts 컴포넌트 경로를 지정해주세요

const Writing = (props) => {
  const setSelect = props.setSelect;
  const [titleInput, setTitleInput] = useState("");
  const [descInput, setDescInput] = useState("");
  const handleInput = (e, setValue) => {
    setValue(e.target.value);
  };
  const onClickBack = () => {
    setSelect("board");
  };

  const onClickPost = () => {
    console.log(titleInput, descInput);
    setTitleInput("");
    setDescInput("");
    setSelect("board");
    // api.post(...) 처리 로직은 여기에 추가
  };

  return (
    <div>
      <Section>
        <h1>게시글 작성</h1>
        <h2 style={{ fontSize: "1.6rem", marginBottom: "4px" }}>제목</h2>
        <TitleBox>
          <TitleInput
            placeholder="제목을 입력하세요."
            onChange={(e) => handleInput(e, setTitleInput)}
            maxLength={50}
          />
          <LetterCount
            style={{
              width: "100px",
              position: "absolute",
              right: "260px",
              top: "760px",
            }}
          >
            <span>{titleInput.length}</span>/ 50
          </LetterCount>
        </TitleBox>
        <h2 style={{ fontSize: "1.6rem", marginBottom: "4px" }}>내용</h2>
        <TextInput
          placeholder="내용을 입력하세요."
          onChange={(e) => handleInput(e, setDescInput)}
          maxLength={1000}
        />
        <LetterCount>
          <span>{descInput.length}</span>/ 1000
        </LetterCount>
        <ButtonBox>
          <GoBackButton onClick={onClickBack}>목록으로</GoBackButton>
          <PostButton onClick={onClickPost}>등록하기</PostButton>
        </ButtonBox>
      </Section>
    </div>
  );
};

const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 60px 240px;
  box-sizing: border-box;
  h1 {
    font-size: 1.6rem;
    text-align: center;
    margin-bottom: 80px;
  }
  h3 {
    font-size: 1.2rem;
    margin: 0;
  }
  span {
    font-size: 1.5rem;
    color: #76e481;
    margin-right: 12px;
  }
`;

const TitleBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
`;

const TitleInput = styled.textarea`
  width: 100%;
  height: 60px;
  border-radius: 20px;
  border: 1px solid #727272;
  padding: 16px 24px;
  box-sizing: border-box;
  margin-top: 16px;
  margin-bottom: 32px;
  resize: none;
  font-family: "Pretendard";
  font-size: 1rem;
  color: #000;
  line-height: 150%;
  &::placeholder {
    color: #5e5e5e;
    font-family: "Pretendard";
  }
  &:focus {
    outline: 2px solid #76e481;
    border: none;
  }
`;

const TextInput = styled.textarea`
  width: 100%;
  height: 400px;
  border-radius: 20px;
  border: 1px solid #727272;
  padding: 20px 36px;
  box-sizing: border-box;
  margin-top: 16px;
  resize: none;
  font-family: "Pretendard";
  font-size: 1rem;
  color: #000;
  line-height: 150%;
  &::placeholder {
    color: #5e5e5e;
    font-family: "Pretendard";
  }
  &:focus {
    outline: 2px solid #76e481;
    border: none;
  }
`;

const LetterCount = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 8px;
  font-size: 1rem;
  span {
    font-size: 1rem;
    color: #76e481;
    margin: 0 4px 0 0;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0 36px;
  box-sizing: border-box;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 64px;
`;

const GoBackButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 52px;
  border-radius: 12px;
  border: 1px solid 3D523F;
  background-color: 3D523F;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
`;

const PostButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 52px;
  border: none;
  border-radius: 12px;
  background-color: #3d523f;
  cursor: pointer;
  font-size: 1.2rem;
  color: white;
  font-weight: 600;
`;

export default Writing;
