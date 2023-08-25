import React from 'react'
import Input from '../../components/common/Input'
import styled from 'styled-components'
import StyledButton from '../../components/common/StyledButton'

export default function Login() {
  const handleOnClick = () => {
    // 로그인 api 연동
  }

  return (
    <ContentWrapper>
      <div>Logo</div>
      <LoginForm>
        <Input label={"아이디"} name={'user_id'} placeholder={'아이디를 입력하세요'}/>
        <Input label={"비밀번호"} name={'user_pwd'} placeholder={'비밀번호를 입력하세요'}/>
        <StyledButton text={'로그인'} padding={'0.8rem 1rem'} width={'100%'} fontSize={'1.125rem'} handleOnClick={handleOnClick} />
      </LoginForm>
    </ContentWrapper>
  )
}

const ContentWrapper = styled.div`
  width: 28rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12rem;
`

const LoginForm = styled.form`
  width: 28rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2.5rem 0 1rem 0;
`