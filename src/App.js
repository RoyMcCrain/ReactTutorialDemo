import React from 'react'
import { css } from 'emotion'
import Board from './Board'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      stepNumber: 0,
      xIsNext: true
    }
    this.handleClick = this.handleClick.bind(this)
    this.jumpTo = this.jumpTo.bind(this)
  }

  handleClick (i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1)
    const current = history[history.length - 1]
    const squares = current.squares.slice()
    if (calculateWinner(squares) || squares[i]) {
      return
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O'
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    })
  }

  jumpTo (step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    })
  }

  render () {
    const history = this.state.history
    const current = history[this.state.stepNumber]
    const winner = calculateWinner(current.squares)

    const moves = history.map((step, move) => {
      const desc = move ? `${move} に移動する。` : 'ゲームを始める。'
      const handleClick = () => {
        this.jumpTo(move)
      }
      return (
        <li key={move}>
          <button onClick={handleClick}>{desc}</button>
        </li>
      )
    })

    let status
    if (winner) {
      status = `勝者: ${winner}`
    } else {
      status = `次のプレイヤー: ${this.state.xIsNext ? 'X' : 'O'}`
    }

    return (
      <div className={game}>
        <div className={gameBoard}>
          <Board squares={current.squares} onClick={this.handleClick} />
        </div>
        <div className={gameInfo}>
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    )
  }
}
const game = css`
  display: flex;
  flex-direction: row;
`

const gameBoard = css`
  display: flex;
  flex-direction: row;
`

const gameInfo = css`
  margin-left: 30px;
`

function calculateWinner (squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}
