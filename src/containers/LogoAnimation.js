/* @flow */
import { connect } from 'react-redux'

import LogoSpeed from '../components/LogoAnimation'
import {
  incrementLogoSpeed,
  decrementLogoSpeed
} from '../actions/logoAnimation'

import type { State } from '../types'
import type { Dispatch } from 'redux'
import type { LogoSpeedAction } from '../types/logoAnimation'

const mapStateToProps = ({ animationDuration }: State) => {
  return {
    animationDuration
  }
}

const mapDispatchToProps = (dispatch: Dispatch<LogoSpeedAction>) => {
  return {
    onIncrement: () => dispatch(incrementLogoSpeed()),
    onDecrement: () => dispatch(decrementLogoSpeed())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogoSpeed)
