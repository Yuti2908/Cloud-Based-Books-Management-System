import { awsConfig } from '../awsConfig';
import { CognitoUserPool, CognitoUserAttribute, AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';

const adminUserPool = new CognitoUserPool({
    UserPoolId: awsConfig.adminUserPoolId,
    ClientId: awsConfig.adminClientId,
  });

  export default adminUserPool;