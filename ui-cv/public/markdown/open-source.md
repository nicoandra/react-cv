# Cachier
Persistent, stale-free, local and cross-machine caching for Python functions. It can be installed with `pip install cachier`

The bug was causing deadlocks when the application would crash after acquiring a log and before releasing it.

The fix was done in a backwards-compatible fashion and users would need to opt-in.

[Issue](https://github.com/shaypal5/cachier/issues/37) - [Pull request](https://github.com/shaypal5/cachier/pull/36)

