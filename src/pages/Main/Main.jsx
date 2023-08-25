import styled from "styled-components";
import armys from "./army.json";
import MainItem from "./MainItem";
import Posts from "../Board/Posts";

const StyledH1 = styled.h1`
  margin-top: 40px;
  text-align: left;
  margin-left: 240px;
  font-size: 20px;
`;
const StyledH2 = styled.h1`
  margin-top: 40px;
  text-align: left;
  margin-left: 240px;
  font-size: 20px;
  margin-bottom: -180px;
`;

const Main = () => {
  return (
    <div>
      <StyledH1>당신의 예비 군메이트</StyledH1>
      <MainItem armys={armys.army} />
      <StyledH2>내 군메이트 찾기 게시판</StyledH2>
      <Posts />
    </div>
  );
};

export default Main;
