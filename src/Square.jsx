import React from 'react'
import styled from '@emotion/styled'

export default function (props) {
  return (
    <Square onClick={props.onClick}>
      {props.value}
    </Square>
  )
}

const Square = styled.button`
  background: #fff;
  border: 1px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 34px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 34px;
  &:focus {
    outline: none;
    }
`
