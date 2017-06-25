/* @flow */
import type { Store as ReduxStore } from 'redux'
import type { LogoSpeedAction } from './logoAnimation'

export type State = {
  +animationDuration: number
}

export type Store = ReduxStore<State, LogoSpeedAction>
