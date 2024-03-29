### Lambda functions using Docker in AWS, enabled with Serverless-Offline
[Serverless-offline-lambda-docker](https://www.npmjs.com/package/serverless-offline-lambda-docker-plugin) is a Serverless plugin which allows developers to run Serverless Offline in their local environments; but to use Docker Images when deploying the stack to AWS Cloudformation. It was built to ease Serverless development but leverage Docker images in AWS in a transparent and simple way.

### Cachier, bug fix
Cachier is a persistent, stale-free, local and cross-machine caching for Python functions. It can be installed with `pip install cachier` and used as a decorator.

Fixes a bug that would cause deadlocks under certain conditions. The fix was done in a backwards-compatible fashion and users would need to opt-in.

[Issue](https://github.com/shaypal5/cachier/issues/37) - [Pull request](https://github.com/shaypal5/cachier/pull/36)

### S3rver, bug fix
S3rver aims to be a S3 clone to run in your local environment to ease the development flow. It can be installed with `npm install s3rver` and is a dependency of the `serverless-s3-local` plugin.

S3rver wasn't properly handrling the `Range` request, which made the `smart-open` Python library to fail certain requests.

[Issue](https://github.com/jamhall/s3rver/issues/754) - [Pull request](https://github.com/jamhall/s3rver/pull/755)

### Serverless-Step-Functions-Local-Docker
The Serverless Step Functions Local plugin for Docker contained a bug where the `stage` configuration variable was read from a single, outdated location. The provided fix tries to read the `stage` from the `provider` configuration; and fallsback to legacy value when required.

[Pull request](https://github.com/evennode/serverless-step-functions-local-docker/pull/3)