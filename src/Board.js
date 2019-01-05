import React from 'react'
import { css } from 'emotion'
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
      <div className={boardRow}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className={boardRow}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className={boardRow}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}

const boardRow = css`
  &:after {
    clear: both;
    content: "";
    display: table;
  }
`
