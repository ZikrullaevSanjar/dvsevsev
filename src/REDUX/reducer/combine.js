import { combineReducers } from "redux";
import reducerCarts from "./reducerCart";
import langReducer from "./reduceLang";

const rootReduer = combineReducers({
	langueageTarnslate: langReducer,
    cart: reducerCarts
})

export default rootReduer