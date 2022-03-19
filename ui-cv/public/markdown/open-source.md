### Cachier, bug fix
Cachier is a persistent, stale-free, local and cross-machine caching for Python functions. It can be installed with `pip install cachier` and used as a decorator.

The bug was causing deadlocks when the application would crash after acquiring a log and before releasing it, as locks would never expire. The fix was done in a backwards-compatible fashion and users would need to opt-in.

[Issue](https://github.com/shaypal5/cachier/issues/37) - [Pull request](https://github.com/shaypal5/cachier/pull/36)

### S3rver, bug fix
S3rver aims to be a S3 clone to run in your local environment to ease the development flow. It can be installed with `npm install s3rver` and is a dependency of the `serverless-s3-local` plugin.

S3rver had a bug when evaluating the `Range` request header when the range starts with `0` and does not specify an end; ie `Range: bytes 0-`. This wouldn't be a problem per-se, but it became a blocker for my team at SSENSE because the library we use, `smart-open`, relies on the existence of the range header in the response.

[Issue](https://github.com/jamhall/s3rver/issues/754) - [Pull request](https://github.com/jamhall/s3rver/pull/755)

### Serverless-Step-Functions-Local-Docker
The Serverless Step Functions Local plugin for Docker contained a bug where the `stage` configuration variable was read from a single, outdated location. The provided fix tries to read the `stage` from the `provider` configuration; and fallsback to legacy value when required.

[Pull request](https://github.com/evennode/serverless-step-functions-local-docker/pull/3)