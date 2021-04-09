import { SET_ITEM, SET_QUANTITY, SET_PRICE } from '../actionTypes/itemActionTypes'

const setItem = (item) => {
	dispatch({
		type: SET_ITEM,
		payload: item
	})
}

const setQuantity = (quantity) => {
	dispatch({
		type: SET_QUANTITY,
		payload: quantity
	})
}

const setPrice = (price) => {
	dispatch({
		type: SET_PRICE,
		payload: price
	})
}

const itemActions = {
	setItem,
	setQuantity,
	setPrice
}

export default itemActions
