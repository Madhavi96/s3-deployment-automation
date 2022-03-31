import DeploymentService from "../services/deployment.service";
import { success, failure } from "../libs/response-lib";

export async function main(event) {
  //const userId = event.requestContext.identity.cognitoIdentityId;
  const appId = event.pathParameters.appId;
  const data = JSON.parse(event.body);

  const result = await DeploymentService.update(appId, data);

  if (result.status) {
    return success(result.payload);
  } else {
    return failure(result.payload);
  }
}
