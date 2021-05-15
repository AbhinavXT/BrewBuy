import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer, productDetailReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducer'

const reducers = combineReducers({ 
    productList: productListReducer,
    productDetails: productDetailReducer,
    cart: cartReducer
})

const cartItemFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
    cart:{
        cartItems:cartItemFromStorage
    }
}
const middleware = [thunk]

const store = createStore(reducers,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store