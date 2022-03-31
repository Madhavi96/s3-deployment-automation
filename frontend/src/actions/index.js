import { action } from "../reduxHelpers";
import { LOAD_DEPLOYMENTS } from "./actionTypes";

const loadDeployments = () => action(LOAD_DEPLOYMENTS.REQUEST);

export { loadDeployments };
