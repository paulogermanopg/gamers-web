import { ADD_PRODUTO, LIMPAR_CARRINHO } from '../actions/actionTypes'

const initialState = {
    carrinho: [],
    subTotal: 0,
    frete: 0,
    total: 0,
    formaDePagamento: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUTO:
            return {
                ...state,
                carrinho: action.payload.carrinho,
                subTotal: action.payload.subTotal,
                frete: action.payload.frete,
                total: action.payload.total,
                formaDePagamento: action.payload.formaDePagamento,
            }

        case LIMPAR_CARRINHO:
            return {
                ...state,
                carrinho: [],
                subTotal: 0,
                frete: 0,
                total: 0,
                formaDePagamento: '',
            }
            
        default:
            return state
    }
}

export default reducer 