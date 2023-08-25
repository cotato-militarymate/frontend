import React, { useState } from 'react'
import styled from 'styled-components'
import {Link, useNavigate} from 'react-router-dom';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


export default function UserInfo() {
  const [userInfo, setUserInfo] = useState({})
  const [enlistDate, setEnlistDate] = useState(null);

  const navigate = useNavigate()

  const handleDatePicker = (e) =>{
    setEnlistDate(e)
  }

  const handleOnChange = (e) =>{
    console.log(e)
    const {name, value} = e.target;
    setUserInfo((info) => ({...info, [name]: value, ['enlist_date']: enlistDate}))
    console.log("userInfo", userInfo)
  }


  return (
    <ContentWrapper>
      <Title>프로필 작성하기</Title>
      <FormBox>
        <label>닉네임</label>
        <input
          type='text'
          name='nickname'
          value={userInfo.nickname}
          placeholder={'닉네임을 입력하세요'}
          onChange={handleOnChange}
        />

        <label>나이</label>
        <input type="number" name='age' max="40" min="20" defaultValue={20} onChange={handleOnChange}/>

        <label>거주 지역</label>
        <select name="location" onChange={handleOnChange} >
          <option>-선택-</option>
          <option value='1'>서울</option>
          <option value='2'>부산</option>
          <option value='3'>대구</option>
          <option value='4'>인천</option>
          <option value='5'>광주</option>
          <option value='6'>대전</option>
          <option value='7'>울산</option>
          <option value='8'>강원</option>
          <option value='9'>경기</option>
          <option value='10'>경남</option>
          <option value='11'>경북</option>
          <option value='12'>전남</option>
          <option value='13'>전북</option>
          <option value='14'>제주</option>
          <option value='15'>충남</option>
          <option value='16'>충북</option>
        </select>

        <label>입대 희망 날짜</label>
        <ReactDatePicker
          dateFormat="yyyy / MM / dd"
          name={'enlist_date'}
          selected={enlistDate}
          closeOnScroll={true}
          placeholderText={'날짜 선택'}
          onChange={handleDatePicker}
        />

        <label>입대 희망 지역</label>
        <select name="enlist_location" onChange={handleOnChange} >
          <option>-선택-</option>
          <option value='1'>서울</option>
          <option value='2'>부산</option>
          <option value='3'>대구</option>
          <option value='4'>인천</option>
          <option value='5'>광주</option>
          <option value='6'>대전</option>
          <option value='7'>울산</option>
          <option value='8'>강원</option>
          <option value='9'>경기</option>
          <option value='10'>경남</option>
          <option value='11'>경북</option>
          <option value='12'>전남</option>
          <option value='13'>전북</option>
          <option value='14'>제주</option>
          <option value='15'>충남</option>
          <option value='16'>충북</option>
        </select>

        <label>MBTI</label>
        <select name="mbti" onChange={handleOnChange} >
          <option>-선택-</option>
          <option value='ENFJ'>ENFJ</option>
          <option value='ENTJ'>ENTJ</option>
          <option value='ENFP'>ENFP</option>
          <option value='ENTP'>ENTP</option>
          <option value='ENTP'>ENTP</option>
          <option value='ESFJ'>ESFJ</option>
          <option value='ESTP'>ESTP</option>
          <option value='ESTJ'>ESTJ</option>
          <option value='INFP'>INFP</option>
          <option value='INFJ'>INFJ</option>
          <option value='INTP'>INTP</option>
          <option value='ISTP'>ISTP</option>
          <option value='ISFP'>ISFP</option>
          <option value='ISFJ'>ISFJ</option>
          <option value='ISTJ'>ISTJ</option>
          <option value='INTJ'>INTJ</option>
        </select>

        <label>흡연 여부</label>
        <RadioBox>
            <input type='radio' name='isSmoker' value={true} onChange={handleOnChange} /><label>O</label>
            <input type='radio' name='isSmoker' value={false} onChange={handleOnChange} /><label>X</label>
        </RadioBox>

        <label>운동 능력</label>
        <RadioBox>
          <input type='radio' name='workout' value={'high'} onChange={handleOnChange} /><label>상</label>
          <input type='radio' name='workout' value={'middle'} onChange={handleOnChange} /><label>중</label>
          <input type='radio' name='workout' value={'low'} onChange={handleOnChange} /><label>하</label>
        </RadioBox>
      </FormBox>
      <button onClick={() =>navigate('/usersurvey', {state: userInfo})}>다음</button>
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
