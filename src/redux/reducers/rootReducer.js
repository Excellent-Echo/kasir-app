import productNameReducer from './productNameReducer';
import productQuantity from './quantityReducer';
import productPrice from './productPrice';
import listOrder from './listOrderReducer';

const rootReducer = {
    productNames: productNameReducer,
    productQuantities: productQuantity,
    productPrices: productPrice,
    listOrders: listOrder,
}

export default rootReducer;