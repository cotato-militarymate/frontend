import React, { useState } from "react";

export default function Mypage() {
  const [userData] = useState({
    닉네임: "그린",
    이메일: "abcedfg@nvaer.com",
    주소: "대구광역시 중구",
    희망날짜: "2023.12",
    희망지역: "경기도 연천",
    mbti: "esfp",
    흡연유무: "비흡연",
    ability: "중",
  });

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={mainTitle}>My Page</h1>
      {Object.entries(userData).map(([key, value], index) => (
        <div key={index} style={itemBoxStyle}>
          <h3 style={keyStyle}>{key}</h3>
          <h3 style={valueStyle}>{value}</h3>
        </div>
      ))}
    </div>
  );
}

const mainTitle = {
  fontSize: "30px",
  textAlign: "center",
  marginBottom: "20px",
  padding: "40px",
  backgroundSize: "cover",
  background: "linear-gradient(#3D523F, white)",
};

const itemBoxStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "30px",
  border: "1px solid #ddd",
  objectFit: "content",
  marginBottom: "20px",
  borderRadius: "5px",
  justifyContent: "center",
  alignItems: "center",
};

const keyStyle = {
  flex: 1,
  marginRight: "40px",
  color: "#666",
};

const valueStyle = {
  flex: 2,
  fontWeight: "bold",
};
