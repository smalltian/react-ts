import * as constants from '../constants'

// 负责加的类型
export interface IncrementEnthusiasm {
  type: constants.INCREMENT_ENTHUSIASM
}

// 负责减的类型
export interface DecrementEnthusiasm {
  type: constants.DECREMENT_ENTHUSIASM
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm

export function incrementEnthusiasm(): IncrementEnthusiasm {
  return {
    type: constants.INCREMENT_ENTHUSIASM
  }
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
  return {
    type: constants.DECREMENT_ENTHUSIASM
  }
}
