# @n6ai/verify-commit-msg

Verifies the format of a commit message. Intended to be used with [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks).

## Setup

1. Install packages:

```bash
npm i -D simple-git-hooks
```

2. Add `postinstall` script and add a `commit-msg` hook to package.json:

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

3. Register Git Hooks:

```bash
npm i
```

## Commit message

Messages must be matched by the following regex:

```text
/^(revert: )?(feat|fix|docs|style|refactor|perf|test|build|ci|chore|types|release|deps)(\(.+\))?(\!)?: .{1,50}/
```
