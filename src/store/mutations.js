import {
  TEST,
  USER_INFO
} from './mutation-types.js'

export default {
  [TEST] (state, v) {
    state.test = v
  },
  [USER_INFO] (state, v) {
    state.userInfo = v
  }
}
