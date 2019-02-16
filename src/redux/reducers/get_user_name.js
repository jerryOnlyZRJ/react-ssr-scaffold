import {
    ActionTypes
} from '../constants'

const defaultState = {
    username: 'Ranjay'
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.GET_USER_NAME:
            {
                return {
                    ...state,
                    username: 'Jerry'
                }
            }
        default:
            return state
    }
}