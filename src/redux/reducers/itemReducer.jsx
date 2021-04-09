import { SET_ITEM, SET_PRICE, SET_QUANTITY } from '../actionTypes/itemActionTypes'

const initialState = {
	item: '',
	quantity: 0,
	price: 0
}

const itemReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_ITEM:
			return {
				item: action.payload.item
			}
		case SET_PRICE:
			return {
				price: action.payload.price
			}
		case SET_QUANTITY:
			return {
				price: action.payload.quantity
			}
		default:
			return state
	}
}

export default itemReducer
