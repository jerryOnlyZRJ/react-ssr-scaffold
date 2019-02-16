import {
    ActionTypes
} from '../constants'

const defaultState = {
    username: ''
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.GET_USER_NAME:
            {
                const {
                    payload
                } = action
                return {
                    ...state,
                    username: payload.username
                }
            }
        default:
            return state
    }
}