# template-posthtml-plugin

[![Build Status](https://travis-ci.com/metonym/template-posthtml-plugin.svg?branch=master)](https://travis-ci.com/metonym/template-posthtml-plugin)

> Template for developing and publishing PostHTML plugins.

Inspired by the [`posthtml-plugin-boilerplate`](https://github.com/posthtml/posthtml-plugin-boilerplate) this project provides a boilerplate to develop and build [PostHTML](https://github.com/posthtml) plugins using TypeScript.

Rudimentary typings for PostHTML are included in [`src/types/posthtml.d.ts`](src/types/posthtml.d.ts).

## Scripts

### Develop

This command builds the project in watch mode. The source (i.e. entry) is in `src`, which is outputted in the designated folder `lib`.

```bash
yarn develop
```

### Build

The following command first removes the `lib` folder before building the project. The production configuration is located in [`tsconfig.prod.json`](tsconfig.prod.json).

The only difference between the production and development TypeScript configurations is that the `src/tests` folder is ignored.

```bash
yarn build
```

### Test

[Jest](https://jestjs.io/) and [ts-jest](https://github.com/kulshekhar/ts-jest) are used for unit testing. The following command runs all test suites and outputs the coverage.

```bash
yarn test
```

#### Test-driven Development mode (TDD)

The following command runs jest in [watch mode](https://jestjs.io/docs/en/cli#watch).

```bash
yarn test:tdd
```

## Continuous Integration (CI)

[Travis CI](https://travis-ci.org/) is used to build and test pushed commits.

```yaml
language: node_js
node_js: stable
cache: yarn
install: yarn
# After installing, Travis CI executes the `yarn test` script by default
# The test coverage should be printed to the Travis build log
```

## Linting, formatting and committing

This project uses `prettier`, `tslint` and git hooks (via `husky`) to automate the linting and formatting of code and commit messages.

[Commitlint](https://github.com/conventional-changelog/commitlint) is used to enforce [semantic commit messages](https://seesparkbox.com/foundry/semantic_commit_messages).

## License

[MIT](LICENSE)
