import React from 'react'
import { ReactComponent as LandingBg } from '../../assets/imgs/landing_char.svg'
import { styled } from 'styled-components'
import StyledButton from '../../components/common/StyledButton'
import { useNavigate } from 'react-router-dom'

export default function Landing() {

  const navigate = useNavigate();

  return (
    <Container>
      <ContentWrapper>
        <LandingBg/>
        <MainText>당신의 군메이트를 찾아보세요</MainText>
        <SubText>성격, 취향, 희망 입대 지역 등 본인과 잘 맞는 군메이트의 정보를 확인해보세요</SubText>
        <StyledButton text={'군메이트 찾아보기'} padding={'1rem 1.25rem'} width="16rem" fontSize='1.5rem' handleOnClick={() =>navigate('/signup')} />
      </ContentWrapper>
    </Container>  )
}

const Container = styled.div`
  min-height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  margin-top: -3rem;

`

const MainText = styled.p`
  font-size: 3rem;
  font-weight: 600;
  line-height: 160%;
  letter-spacing: 0.06rem;
`

const SubText = styled.p`
  color: #808080;
  font-weight: 400;
  line-height: 160%; /* 2.4rem */
  font-size: 1.5rem;
  margin-bottom: 1.5rem;

`