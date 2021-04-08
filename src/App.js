import React from "react";

import './App.css';
import FormOrder from "./components/FormOrder";
import OrderPage from "./components/OrderPage";

function App() {

  return (
    <>
      <div className="container">
        <div className="row app-container">
          <h1>
            Buy-n-Enjoy
          </h1>
          <div className="row odr-container">
            <div className="col-md-8">
              <div className="tbl-container">
                <h5>
                  Available Items
                </h5>

                <OrderPage />
              </div>
            </div>
            <div className="col-md-4">
              <div className="pay-container">
                <h5>
                    Buy Items
                </h5>

                <FormOrder />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
