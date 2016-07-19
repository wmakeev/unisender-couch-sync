'use strict'

const co = require('co')
const log = require('debug')('unisender-couch-sync')
const nano = require('_project/nano-promise')

const { COUCHDB_HOST, COUCHDB_DB_NAME } = process.env

const couch = nano(COUCHDB_HOST)
const db = couch.db.use(COUCHDB_DB_NAME)

co(function * () {
  
}).then(res => console.log('Watching for changes ..'))
  .catch(err => console.log('Sync failed: ' + err.message, err.stack))
