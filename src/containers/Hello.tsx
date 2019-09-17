import Hello from '../components/Hello'
import * as actions from '../actions'
import { StoreState } from '../types'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

export function mapStateToProps({ enthusiasmLevel, languangeName }: StoreState) {
  return {
    enthusiasmLevel,
    languangeName
  }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.incrementEnthusiasm())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello)