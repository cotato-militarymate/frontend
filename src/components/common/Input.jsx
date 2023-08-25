import React from 'react'
import styled from 'styled-components'

export default function Input({label, name, placeholder, value, handleOnChange}) {
  const InputStyle = {
    padding: '0.8rem 1rem',
    fontSize:'1rem',
    color: 'black',
    border: '1px solid #9FA6B2',
    borderRadius: '0.5rem',
    boxSizing: 'border-box',
  }
  
  return (
    <InputContainer>
      <label>{label}</label>
      <input 
        type='text'
        name={name}
        value={value}
        placeholder={placeholder}
        style={InputStyle}
        onChange={handleOnChange}
      />
    </InputContainer>
  )
}

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label{
    font-size: 1.125rem;
    font-weight: 500;

  }
`