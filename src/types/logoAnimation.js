/* @flow */
export type IncrementLogoSpeed = {
  type: 'INCREMENT_LOGO_SPEED'
}

export type DecrementLogoSpeed = {
  type: 'DECREMENT_LOGO_SPEED'
}

export type LogoSpeedAction = IncrementLogoSpeed | DecrementLogoSpeed
