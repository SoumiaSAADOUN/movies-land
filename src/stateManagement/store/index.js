import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers/index";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import promiseMiddleware from "redux-promise-middleware";

const storeConfig = createStore(
    rootReducer,
    composeWithDevTools(
      process.env.NODE_ENV !== 'production'?
      applyMiddleware(thunkMiddleware, promiseMiddleware, createLogger()):
      applyMiddleware(thunkMiddleware, promiseMiddleware)
    )
  );
  
  export default storeConfig;