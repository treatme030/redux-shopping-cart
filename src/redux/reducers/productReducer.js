import { SET_PRODUCTS, SELECTED_PRODUCT, REMOVE_SELECTED_PRODUCT} from '../contents/action-types'

const initialState = {
    products: [{
        id: 1,
        title: 'Dipesh',
        category: 'programmer',
    }]
}
export const productReducer = (state, {type, payload}) => {
    switch(type){
        case SET_PRODUCTS:
            return state;
        default: return state;
    }
}