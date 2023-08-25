import React from 'react'
import { NavLink, Link } from 'react-router-dom';

import styled from 'styled-components';

export default function Navbar() {
  return (
    <Header>
      <Link to='/'>
        <div>LOGO</div>
      </Link>
      <Menu>
        <NavLink to='/board'>
          게시판
        </NavLink>
        <NavLink to='/lettermanage'>
          영장 관리
        </NavLink>
        <NavLink to='/mypage'>
          마이페이지
        </NavLink>
      </Menu>
      <LoginBox>
        <NavLink to='/login'>
          로그인
        </NavLink>
        <NavLink to='/signup'>
          회원가입
        </NavLink>
        </LoginBox>
    </Header>
  )
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  height: 4rem;
  padding: 0 10rem;
  align-items: center;
  box-shadow: 0px 4px 16px 0px rgba(196, 196, 196, 0.25);

  a, p{
    text-decoration: none;
    color: var(--font-gray);
    font-size: 1.125rem;
  }

  a:nth-child(1).active {
    backgroun-color: red;
  }
`

const Menu = styled.nav`
  display: flex;
  gap: 3.5rem;

  a{
    padding: 0.25rem 0;
    letter-spacing: 0.02rem;
  }

  a.active{
    font-weight: 600;
    border-bottom: 4px solid var(--main-color);
    color: black;
  }
`
const LoginBox = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  a{
    color: #686868;
  }
`