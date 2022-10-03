# @n6ai/verify-commit-msg

Verifies the format of a commit message. Intended to be used with [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks).

## Setup

Add `postinstall` script and add a `commit-msg` hook to package.json:

```json
{
  "scripts": {
    "postinstall": "simple-git-hooks"
  },
  "simple-git-hooks": {
    "commit-msg": "npx @n6ai/verify-commit-msg@latest $1"
  }
}
```

Install packages and register git hooks:

```bash
npm i -D simple-git-hooks
```

## Commit message

Messages must be matched by the following regex:

```text
/^(revert: )?(feat|fix|docs|dx|refactor|perf|test|workflow|build|ci|chore|types|wip|release|deps)(\(.+\))?: .{1,50}/
```
