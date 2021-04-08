import React from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch
} from 'react-router-dom';

import {useSelector} from 'react-redux';
import OrderPage from './pages/OrderPage'


function App() {
  const orderList = useSelector((state)=> state.listOrders.listOrder)

  return (
    <Router>
      <div className='App'>
      <Switch>
        <Route path='/'>
          <OrderPage/>
          <p>{orderList.nama}</p>
          <p>{orderList.quantity}</p>
          <p>{orderList.price}</p>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
