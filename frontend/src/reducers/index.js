import { combineReducers } from "redux";
import initialState from "../store/initialState";
import { LOAD_DEPLOYMENTS } from "../actions/actionTypes";
import { createReducer } from "../reduxHelpers";

const deployments = createReducer(LOAD_DEPLOYMENTS, initialState.deployments);

export default combineReducers({
  deployments,
});
