#!/usr/bin/env node

const versioner = require('../lib/versioner')
const parse = require('../lib/cli/parse')

versioner(parse(process.argv))
