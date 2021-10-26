import { ADD_PRODUTO, LIMPAR_CARRINHO } from '../actions/actionTypes'

const initialState = {
    carrinho: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUTO:
            return {
                ...state,
                carrinho: action.payload.carrinho,
            }

        case LIMPAR_CARRINHO:
            return {
                ...state,
                carrinho: [],
            }
            
        default:
            return state
    }
}

export default reducer 