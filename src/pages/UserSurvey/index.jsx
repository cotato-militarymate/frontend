import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import {useLocation} from 'react-router-dom'

export default function UserSurvey() {
  const userInfo = useLocation()
  const [userAnswer, setAnswer] = useState({})

  const [profile, setProfile] = useState({})


  const handleOnChange = (e) => {
    const {name, value} = e.target;
    setAnswer((answer) => ({...answer, [name]: value}))
    setProfile(() => ({...userInfo.state, ['userAnswer']: userAnswer}))
    console.log(userAnswer)
    console.log(profile)
  }

  return (

    <ContentWrapper>
      <Title>질문지 작성하기</Title>
      <FormBox>
      <label>1. 휴무날이다. 당신이 휴무를 보내는 방법은?</label>
      <RadioBox>
        <input type='radio' name='q1' value={'0'} onChange={handleOnChange} /><label>활동적인 풋살 or 축구</label>
        <input type='radio' name='q1' value={'1'} onChange={handleOnChange} /><label>생활관에서 휴대폰 게임</label>
      </RadioBox>

      <label>2. 드디어 일병이 된 당신, 행정반에서 5명을 불렀다. 당신이 취하게 될 행동은?</label>
      <RadioBox>
        <input type='radio' name='q2' value={'0'} onChange={handleOnChange} /><label>행정반으로 튀어간다.</label>
        <input type='radio' name='q2' value={'1'} onChange={handleOnChange} /><label>상황을 지켜본다.</label>
      </RadioBox>

      <label>3. 장마철 대비 배수로 작업중이다. 간부님이 자리를 비웠을 때, 분대장인 당신이 분대원들에게 할 말은?</label>
      <RadioBox>
        <input type='radio' name='q3' value={'0'} onChange={handleOnChange} /><label>"야야, 좀 쉬면서 해라."</label>
        <input type='radio' name='q3' value={'1'} onChange={handleOnChange} /><label>"이렇게 해서 언제 다 할래?"</label>
      </RadioBox>

      <label>4. 동반 입대자가 헬스를 하자고 한다. 당신의 선택은?</label>
      <RadioBox>
        <input type='radio' name='q4' value={'0'} onChange={handleOnChange} /><label>다음 달부터 한다고 다짐만 한다.</label>
        <input type='radio' name='q4' value={'1'} onChange={handleOnChange} /><label>바로 단백질 쉐이커를 챙긴다.</label>
      </RadioBox>

      <label>5. 동반 입대자와 함께 분대장 후보에 올랐다. 이 때 자신이 아닌 상대방이 분대장이 되었을 경우,</label>
      <RadioBox>
        <input type='radio' name='q5' value={'0'} onChange={handleOnChange} /><label>"축하한다!"라고 말해준다.</label>
        <input type='radio' name='q5' value={'1'} onChange={handleOnChange} /><label>"내가 더 잘할 수 있는데 속상해.."</label>
      </RadioBox>

      <label>6. 나는 최고의 에이스가 될 거야! vs 나는 욕 안 먹을 정도로 적당히만 할 거야!</label>
      <RadioBox>
        <input type='radio' name='q6' value={'0'} onChange={handleOnChange} /><label>에이스</label>
        <input type='radio' name='q6' value={'1'} onChange={handleOnChange} /><label>적당함</label>
      </RadioBox>

      <label>7. 취침 시간이다.</label>
      <RadioBox>
        <input type='radio' name='q7' value={'0'} onChange={handleOnChange} /><label>간부님 몰래 수다를 떤다.</label>
        <input type='radio' name='q7' value={'1'} onChange={handleOnChange} /><label>칼취침</label>
      </RadioBox>

      <label>8. 선임병에게 꾸중을 들었다. 당신의 속마음은?</label>
      <RadioBox>
        <input type='radio' name='q8' value={'0'} onChange={handleOnChange} /><label>이해가 안 가네.</label>
        <input type='radio' name='q8' value={'1'} onChange={handleOnChange} /><label>다음에는 더 열심히!</label>
      </RadioBox>

      <label>9. 일과 시간, 작업 중 쉬는 시간을 주셨다. 이 때 당신의 행동은?</label>
      <RadioBox>
        <input type='radio' name='q9' value={'0'} onChange={handleOnChange} /><label>흡연장을 향한다.</label>
        <input type='radio' name='q9' value={'1'} onChange={handleOnChange} /><label>그늘에 앉아 쉰다.</label>
      </RadioBox>

      <label>10. 분대장 파견을 가게 된 당신. 미리 60쪽 분량의 자료를 열심히 공부하면 휴가를 받을 수도 있다고 한다!</label>
      <RadioBox>
        <input type='radio' name='q10' value={'0'} onChange={handleOnChange} /><label>가서 대충 하다 와야겠다고 생각한다.</label>
        <input type='radio' name='q10' value={'1'} onChange={handleOnChange} /><label>오늘부터 야간 연등하며 공부한다.</label>
      </RadioBox>
      </FormBox>
      <button >작성 완료</button>
    </ContentWrapper>

  )
}

const ContentWrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  button{
    cursor: pointer;
    display: block;
    margin-top: 1rem;
    border: none;
    padding: 0.8rem;
    border-radius: 0.5rem;
    background-color: #3D523F;
    color: white;
  }

`

const Title = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 1rem 0;
`

const FormBox = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label{
    margin-top: 1rem;
    font-weight: 500;
  }

  input, select{
    padding: 0.8rem 1rem;
    color: black;
    border: 1px solid #9FA6B2;
    border-radius: 0.5rem;
    box-sizing: border-box;
  }

`

const RadioBox = styled.div`
  div{
    display: flex;
    align-items: center;
  }

  label{
    margin: 0;
  }
`
