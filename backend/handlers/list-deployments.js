import DeploymentService from "../services/deployment.service";
import { success, failure } from "../libs/response-lib";

export async function main(event, context) {
  //const userId = event.requestContext.identity.cognitoIdentityId;

  const result = await DeploymentService.getAll();

  if (result.status) {
    return success(result.payload);
  } else {
    return failure(result.payload);
  }
}
