import {
    ActionTypes
} from '../constants'

export default (state = {
    username: 'Ranjay'
}, action) => {
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