import { CognitoUserPool } from 'amazon-cognito-identity-js';
import { awsConfig } from '../awsConfig';

const poolData = {
  UserPoolId: awsConfig.userPoolId,
  ClientId: awsConfig.clientId,
};

const userPool = new CognitoUserPool(poolData);

export default userPool;
