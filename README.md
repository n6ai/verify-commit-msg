# @n6ai/verify-commit-msg

Simple executable to verify the format of a commit message. Intended to be used with [simple-githooks](https://github.com/toplenboren/simple-git-hooks).

## Setup

Install packages:

```bash
npm i -D simple-git-hooks @n6ai/verify-commit-msg
```

Add `postinstall` script and `commit-msg` hook to package.json:

```json
{
  "scripts": {
    "postinstall": "simple-git-hooks"
  },
  "simple-git-hooks": {
    "commit-msg": "@n6ai/verify-commit-msg $1"
  }
}
```

## Commit message

Messages must be matched by the following regex:

```text
/^(revert: )?(feat|fix|docs|dx|refactor|perf|test|workflow|build|ci|chore|types|wip|release|deps)(\(.+\))?: .{1,50}/
```
