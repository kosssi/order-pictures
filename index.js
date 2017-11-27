#!/usr/bin/env node

import program from 'commander'
import main from './src'

import { version } from './package.json'

program
  .version(version)
  .arguments('<dir>')
  .action(async (dir, options) => {
    console.log(`Start with folder '${dir}':`)
    main(dir)
  })
  .parse(process.argv)
