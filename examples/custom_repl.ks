###
Example of embedding the KavaScript REPL, strikingly similar to the Node REPL.
###

# Require 'kavascript/repl' to import the repl module
repl = require '../repl'

console.log 'Custom REPL! Type `sayHi()` to see what it does!'

# Start the REPL with your configuration
r = repl.start
  prompt: 'my-repl> '

# Fields added to the context object are exposed as variables in the REPL
r.context.sayHi = -> console.log 'Hello'

# An exit event is emitted when the user exits the REPL
r.on 'exit', ->
  console.log 'Bye!'
  process.exit()
