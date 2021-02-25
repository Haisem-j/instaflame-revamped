import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/index";
import App from "./App";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    {/* <Router basename='/'> */}
    <HashRouter>
      <App />
    </HashRouter>
    {/* </Router> */}
  </Provider>,

  document.getElementById("root")
);
