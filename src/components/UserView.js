import AWS from 'aws-sdk';
import { awsConfig } from '../awsConfig';

AWS.config.update({
  region: awsConfig.region,
});

const userPool = new AmazonCognitoIdentity.CognitoUserPool({
  UserPoolId: awsConfig.userPoolId,
  ClientId: awsConfig.clientId,
});