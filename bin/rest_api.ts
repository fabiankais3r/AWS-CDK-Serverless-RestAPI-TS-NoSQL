#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { RestApiStack } from "../lib/rest_api-stack";

const app = new cdk.App();
const region = "us-east-1";
const account = "0123456789";
new RestApiStack(app, "RestApiStack", {
  env: { region: region, account: account },
});
