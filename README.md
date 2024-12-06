# tRPC Authentication Session

[![npm version](https://badge.fury.io/js/@universal-packages%2Ftrpc-authentication-session.svg)](https://www.npmjs.com/package/@universal-packages/trpc-authentication-session)
[![Testing](https://github.com/universal-packages/universal-trpc-authentication-session/actions/workflows/testing.yml/badge.svg)](https://github.com/universal-packages/universal-trpc-authentication-session/actions/workflows/testing.yml)
[![codecov](https://codecov.io/gh/universal-packages/universal-trpc-authentication-session/branch/main/graph/badge.svg?token=CXPJSN8IGL)](https://codecov.io/gh/universal-packages/universal-trpc-authentication-session)

Session dynamics for trpc authentication.

## Install

```shell
npm install @universal-packages/trpc-authentication-session

npm install @universal-packages/trpc-authentication
```

## Dynamics

By installing this package the default authentication controllers dynamics related to session (`user-from-context` and `set-session`) will be overridden to use express-session capabilities.

## Context Creator

#### `createSessionContext`

You can compound your context to include the session object coming form the request with this context creator.

```ts
function createContext(options) {
  return {
    ...createSessionContext(options)
  }
}
```

## Typescript

This library is developed in TypeScript and shipped fully typed.

## Contributing

The development of this library happens in the open on GitHub, and we are grateful to the community for contributing bugfixes and improvements. Read below to learn how you can take part in improving this library.

- [Code of Conduct](./CODE_OF_CONDUCT.md)
- [Contributing Guide](./CONTRIBUTING.md)

### License

[MIT licensed](./LICENSE).
