import { combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import dogReducer from './dogReducer';

const rootReducer = combineReducers({ dog: dogReducer }, composeWithDevTools());

export default rootReducer;
