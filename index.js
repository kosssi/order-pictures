#!/usr/bin/env node

import 'babel-polyfill'
import program from 'commander'

import { version } from './package.json'

program
  .version(version)
  .arguments('<dir>')
  .action(async (dir, options) => {
    console.log(`Start: ${dir}`)
  })
  .parse(process.argv)
