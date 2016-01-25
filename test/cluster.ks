# Cluster Module
# ---------

return if testingBrowser?

cluster = require 'cluster'

if cluster.isMaster
  test "coffeescript #2737 - cluster module can spawn workers", ->
    cluster.once 'exit', (worker, code) ->
      eq code, 0

    cluster.fork()
else
  process.exit 0
