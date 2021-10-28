import { ADD_PRODUTO, LIMPAR_CARRINHO } from '../actions/actionTypes'

const initialState = {
    carrinho: [],
    subTotal: 0,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUTO:
            return {
                ...state,
                carrinho: action.payload.carrinho,
                subTotal: action.payload.subTotal,
            }

        case LIMPAR_CARRINHO:
            return {
                ...state,
                carrinho: [],
                subTotal: 0,
            }
            
        default:
            return state
    }
}

export default reducer 