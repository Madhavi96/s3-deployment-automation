import uuid from "uuid";
import * as dynamoDbLib from "../libs/dynamodb-lib";

export default {
  async get(appId) {
    const params = {
      TableName: process.env.tableName,
      Key: {
        appId: appId,
      },
    };

    try {
      const result = await dynamoDbLib.call("get", params);
      console.log(result);
      if (result.Item) {
        // Return the retrieved item
        return { status: true, payload: result.Item };
      } else {
        return { status: false, payload: { message: "Item not found !" } };
      }
    } catch (e) {
      return {
        status: false,
        payload: { message: "Failed getting deployment !", error: e },
      };
    }
  },

  async getAll() {
    const params = {
      TableName: process.env.tableName,
      // 'KeyConditionExpression' defines the condition for the query
      // - 'userId = :userId': only return items with matching 'userId'
      //   partition key
      // 'ExpressionAttributeValues' defines the value in the condition
      // - ':userId': defines 'userId' to be Identity Pool identity id
      //   of the authenticated user
      //KeyConditionExpression: "userId = :userId",
      //ExpressionAttributeValues: {
      //":userId": userId,
      //},
    };

    try {
      const result = await dynamoDbLib.call("scan", params);
      // Return the matching list of items in response body
      return { status: true, payload: result.Items };
    } catch (e) {
      return {
        status: false,
        payload: { message: "Failed getting deployments !", error: e },
      };
    }
  },

  async save(data) {
    const params = {
      TableName: process.env.tableName,
      Item: data,
    };

    try {
      await dynamoDbLib.call("put", params);
      return { status: true, payload: data };
    } catch (e) {
      return {
        status: false,
        payload: { message: "Saving deployment failed !", error: e },
      };
    }
  },

  async update(appId, data) {
    const params = {
      TableName: process.env.tableName,
      // 'Key' defines the partition key and sort key of the item to be updated
      // - 'userId': Identity Pool identity id of the authenticated user
      // - 'taskId': path parameter
      Key: {
        appId: appId,
      },
      // 'UpdateExpression' defines the attributes to be updated
      // 'ExpressionAttributeValues' defines the value in the update expression
      UpdateExpression: "SET activeBranch = :activeBranch",
      ExpressionAttributeValues: {
        ":activeBranch": data.activeBranch,
      },
      // 'ReturnValues' specifies if and how to return the item's attributes,
      // where ALL_NEW returns all attributes of the item after the update; you
      // can inspect 'result' below to see how it works with different settings
      ReturnValues: "ALL_NEW",
    };

    try {
      const result = await dynamoDbLib.call("update", params);
      return { status: true, payload: result.Attributes };
    } catch (e) {
      return {
        status: false,
        payload: { message: "Updating deployment failed !", error: e },
      };
    }
  },

  async delete(appId) {
    const params = {
      TableName: process.env.tableName,
      // 'Key' defines the partition key and sort key of the item to be removed
      // - 'userId': Identity Pool identity id of the authenticated user
      // - 'taskId': path parameter
      Key: {
        appId: appId,
      },
    };

    try {
      const result = await dynamoDbLib.call("delete", params);
      return { status: true, payload: { status: true } };
    } catch (e) {
      return {
        status: false,
        payload: { message: "Could not delete the deployment !", error: e },
      };
    }
  },
};
