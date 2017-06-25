/* @flow */
import type {
  IncrementLogoSpeed,
  DecrementLogoSpeed
} from '../types/logoAnimation'

// Constants ===============================
export const INCREMENT_LOGO_SPEED = 'INCREMENT_LOGO_SPEED'
export const DECREMENT_LOGO_SPEED = 'DECREMENT_LOGO_SPEED'
// =========================================

export function incrementLogoSpeed(): IncrementLogoSpeed {
  return {
    type: INCREMENT_LOGO_SPEED
  }
}

export function decrementLogoSpeed(): DecrementLogoSpeed {
  return {
    type: DECREMENT_LOGO_SPEED
  }
}
