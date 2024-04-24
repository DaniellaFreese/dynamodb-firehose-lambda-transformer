# Typescript Quickstart AWS Lambda Function for Transforming a AWS Kinesis Event in AWS Firehose

This is a quickstart project for creating a Typescript AWS Lambda function that transforms a Kinesis event in AWS Firehose. The project is based on the [AWS Lamdba Deploying transpiled Typescript with .zip file](https://docs.aws.amazon.com/lambda/latest/dg/typescript-package.html) documentation.

## Instructions to Build and Deploy the Lambda Function

1. Navigated to hello-world dir and execute npm build:

    ```console
    cd hello-world
    npm run build
    ```

This will create a `dist` directory with the transpiled code, and the index.zip file.

2. Create the lambda IAM execution role, navigate to the root directory and execute the following command:

    ```console
    aws iam create-role --role-name lambda-role --assume-role-policy-document file://role.json
    ```

3. Next create the lambda function:

    ```console
    aws lambda create-function --function-name dynamodb-firehose-lambda-transformer --runtime "nodejs18.x" --role arn:aws:iam::<your-aws-account-id>:role/lambda-role --zip-file "fileb://dist/index.zip" --timeout 60 --handler index.handler
    ```

4. Next you need to navigate to AWS Firehose, enable the data transformation and select the lambda function you just created.

## References

- [AWS Firehose Data Transformation Event](https://docs.aws.amazon.com/firehose/latest/dev/data-transformation.html)

- [AWS Lamdba Deploying transpiled Typescript with .zip file](https://docs.aws.amazon.com/lambda/latest/dg/typescript-package.html)

- [AWS CLI Lambda Function Example (lambda role)](https://medium.com/@corymaklin/tutorial-amazon-web-services-part-3-lambda-functions-with-aws-cli-ba9f53c5f5ec)
