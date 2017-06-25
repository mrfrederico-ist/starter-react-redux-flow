/* @flow */
import { fromJS } from 'immutable'

import type { State } from '../types'
import type { LogoSpeedAction } from '../types/logoAnimation'

import {
  INCREMENT_LOGO_SPEED,
  DECREMENT_LOGO_SPEED
} from '../actions/logoAnimation'

const logoAnimation = (state: State, action: LogoSpeedAction): State => {
  switch (action.type) {
    case INCREMENT_LOGO_SPEED:
      if (state.animationDuration === 1) {
        return state
      }
      return fromJS(state)
        .update('animationDuration', (value: number) => value - 1)
        .toObject()
    case DECREMENT_LOGO_SPEED:
      return fromJS(state)
        .update('animationDuration', (value: number) => Math.max(value + 1))
        .toObject()
    default:
      return state
  }
}

export default logoAnimation
