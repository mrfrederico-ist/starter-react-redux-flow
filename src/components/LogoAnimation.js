/* @flow */
import React from 'react'
import styled from 'styled-components'

// Types ===================================
export type Props = {
  onIncrement?: () => void,
  onDecrement?: () => void
}
// Styles ==================================
const Button = styled.button`
    margin:10px;
    color:#222;
`
// =========================================
const LogoAnimation = ({ onIncrement, onDecrement }: Props) =>
  <div className="container text-center">
    <div className="row">
      <h5>Increase or decrease the speed of the logo</h5>
      <Button
        className="btn btn-default btn-lg"
        type="button"
        onClick={onDecrement}>
        -
      </Button>
      <Button
        className="btn btn-default btn-lg"
        type="button"
        onClick={onIncrement}>
        +
      </Button>
    </div>
  </div>

export default LogoAnimation
