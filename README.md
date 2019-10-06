# template-posthtml-plugin <img align="right" width="220" height="200" title="PostHTML logo" src="http://posthtml.github.io/posthtml/logo.svg">

[![Build][build]][build-badge]
[![Coverage][codecov-shield]][codecov]

> Template for developing and publishing PostHTML plugins.

Inspired by the [posthtml-plugin-boilerplate](https://github.com/posthtml/posthtml-plugin-boilerplate), this template is used to develop and build [PostHTML](https://github.com/posthtml) plugins with TypeScript.

The `posthtml-plugin-boilerplate` contains an excellent sample [README](https://github.com/posthtml/posthtml-plugin-boilerplate/blob/master/readme.md) to describe and document a plugin.

Don't forget to update the [changelog](CHANGELOG.md) for each release published to the [npm registry](https://www.npmjs.com/).

## Available Scripts

### `yarn build`

Builds the plugin for production.

### `yarn lint`

Lints project files using [tslint](https://github.com/palantir/tslint) and fixes linting errors (if fixable).

### `yarn test`

Runs [Jest](https://jestjs.io/) and [ts-jest](https://github.com/kulshekhar/ts-jest) and outputs testing coverage.

### `yarn test:tdd`

Runs jest in [watch mode](https://jestjs.io/docs/en/cli#watch).

## Continuous Integration (CI)

[Travis CI](https://travis-ci.org/) is used to build and test pushed commits.

```yaml
language: node_js
node_js: stable
cache: yarn
after_success: npx codecov
# Travis CI executes the `yarn test` script by default
# Test coverage should be printed to the Travis build log
```

The Travis CI configuration can be modified in [`.travis.yml`](.travis.yml).

## Other tools

Linters are run in [husky](https://github.com/typicode/husky) hooks to enforce a consistent code and formatting style:

- **[Prettier](https://prettier.io/)**: opinionated code formatter used to lint staged files in the pre-commit husky hook

- **[TSLint](https://github.com/palantir/tslint)**: extensible TypeScript linter used to lint (and fix) errors in the pre-commit husky hook

- **[commitlint](https://github.com/conventional-changelog/commitlint)**: commit message linter used in the commit-msg husky hook to encourage [semantic commit messages](https://seesparkbox.com/foundry/semantic_commit_messages)

## Publishing to npm

When publishing your plugin for the first time, be sure to update the `homepage`, `repository` and `bugs` fields in the `package.json`. Login as your npm user and run the following:

```bash
yarn publish
# OR
npm publish
```

Edit the package keywords in the `keywords` field of `package.json`.

## License

[MIT](LICENSE)

[build]: https://travis-ci.com/metonym/template-posthtml-plugin.svg?branch=master
[build-badge]: https://travis-ci.com/metonym/template-posthtml-plugin
[codecov]: https://codecov.io/gh/metonym/template-posthtml-plugin
[codecov-shield]: https://img.shields.io/codecov/c/github/metonym/template-posthtml-plugin.svg
