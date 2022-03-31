import { success, failure } from "../libs/response-lib";
import DeploymentService from "../services/deployment.service";

export async function main(event) {
  // const userId = event.requestContext.identity.cognitoIdentityId;
  const appId = event.pathParameters.id;

  const result = await DeploymentService.get(appId);

  if (result.status) {
    return success(result.payload);
  } else {
    return failure(result.payload);
  }
}
