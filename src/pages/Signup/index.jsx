import React from 'react'
import styled from 'styled-components'
import Input from '../../components/common/Input'
import StyledButton from '../../components/common/StyledButton'

export default function Signup() {
  const handleOnClick = () => {
    // 회원가입 api 연동
  }

  return (
    <ContentWrapper>
      <div>Logo</div>
      <SignupForm>
        <Input label={"아이디"} name={'user_id'} placeholder={'아이디를 입력하세요'}/>
        <Input label={"비밀번호"} name={'user_pwd'} placeholder={'비밀번호를 입력하세요'}/>
        <Input label={"비밀번호 확인"} name={'user_pwd_check'} placeholder={'비밀번호를 다시 입력하세요'}/>
        <StyledButton text={'회원가입'} padding={'0.8rem 1rem'} width={'100%'} fontSize={'1.125rem'} handleOnClick={handleOnClick} />
      </SignupForm>
    </ContentWrapper>
  )
}

const ContentWrapper = styled.div`
  width: 28rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;
`

const SignupForm = styled.form`
  width: 28rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2.5rem 0 1rem 0;
`