/* @flow */
import Header from '../components/Header'
import { connect } from 'react-redux'

import type { State } from '../types/index'

const mapStateToProps = ({ animationDuration }: State) => {
  return {
    animationDuration
  }
}

export default connect(mapStateToProps, {})(Header)
