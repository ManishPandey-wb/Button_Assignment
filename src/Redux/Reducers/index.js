import { combineReducers } from "redux";
import { colorReducer } from "./reducer";

const reducer = combineReducers({buttonColor : colorReducer});

export default reducer;