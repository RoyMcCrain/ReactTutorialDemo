import React from 'react'
import styled from '@emotion/styled'
import Square from './Square'

export default function (props) {
  const renderSquare = (i) => {
    const handleClick = (e) => {
      e.preventDefault()
      return props.onClick(i)
    }
    return (
      <Square
        value={props.squares[i]}
        onClick={handleClick}
      />
    )
  }

  return (
    <div>
      <BoardRow>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </BoardRow>
      <BoardRow>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </BoardRow>
      <BoardRow>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </BoardRow>
    </div>
  )
}

const BoardRow = styled.div`
  &:after {
    clear: both;
    content: "";
    display: table;
  }
`
