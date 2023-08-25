import React from 'react'

export default function StyledButton({text, padding, width, fontSize, handleOnClick}) {
  const ButtonStyle = {
    cursor: 'pointer',
    height: 'fit-content',
    color: 'white',
    borderRadius: '0.5rem',
    background: '#3D523F',
    border: 'none',
    padding: `${padding}`,
    width: `${width}`,
    fontSize: `${fontSize}`
  }

  return (
    <>
      <button
        style={ButtonStyle}
        onClick={(e) => {
          e.preventDefault()
          handleOnClick && handleOnClick()
        }}
        >
          {text}
      </button>
    </>
  )
}


