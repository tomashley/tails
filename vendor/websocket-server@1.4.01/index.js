#!/usr/bin/env node
// generated by npm, please don't touch!
var dep = require('path').join(__dirname, "./../.npm/websocket-server/1.4.01/node_modules")
var depMet = require.paths.indexOf(dep) !== -1
var from = "./../.npm/websocket-server/1.4.01/package/lib/ws/server"

if (!depMet) require.paths.unshift(dep)
module.exports = require(from)

if (!depMet) {
  var i = require.paths.indexOf(dep)
  if (i !== -1) require.paths.splice(i, 1)
}
