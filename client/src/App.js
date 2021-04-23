import { useEffect } from "react";
import RouterConfig from "./navigation/RouterConfig";

import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import reducers from "./reducers/index";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

import "./styles/main.scss";

const App = () => {
  const store = createStore(reducers, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <HashRouter>
        <RouterConfig />
      </HashRouter>
    </Provider>
  );
};

export default App;
