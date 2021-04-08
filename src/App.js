import React from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch
} from 'react-router-dom';

import OrderPage from './pages/OrderPage'


function App() {
  return (
    <Router>
      <div className='App'>
      <Switch>
        <Route path='/'>
          <OrderPage/>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
