#!/usr/bin/env node

import { readFileSync } from 'node:fs'

// get $1 from commit-msg script
const msgPath = process.argv[2]
const msg = readFileSync(msgPath, 'utf-8').trim()

const releaseRE = /^v\d/
const commitRE =
  /^(revert: )?(feat|fix|docs|style|refactor|perf|test|build|ci|chore|types|release|deps)(\(.+\))?(\!)?: .{1,50}/

if (!releaseRE.test(msg) && !commitRE.test(msg)) {
  console.error('ERROR: invalid commit message format.')
  process.exit(1)
}
