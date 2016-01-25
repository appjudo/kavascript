# This **Browser** compatibility layer extends core KavaScript functions
# to make things work smoothly when compiling code directly in the browser.
# We add support for loading remote Coffee scripts via **XHR**, and
# `text/kavascript` script tags, source maps via data-URLs, and so on.

KavaScript = require './kavascript'
KavaScript.require = require
compile = KavaScript.compile

# Use standard JavaScript `eval` to eval code.
KavaScript.eval = (code, options = {}) ->
  options.bare ?= on
  eval compile code, options

# Running code does not provide access to this scope.
KavaScript.run = (code, options = {}) ->
  options.bare = on
  options.shiftLine = on
  Function(compile code, options)()

# If we're not in a browser environment, we're finished with the public API.
return unless window?

# Include source maps where possible. If we've got a base64 encoder, a
# JSON serializer, and tools for escaping unicode characters, we're good to go.
# Ported from https://developer.mozilla.org/en-US/docs/DOM/window.btoa
if btoa? and JSON? and unescape? and encodeURIComponent?
  compile = (code, options = {}) ->
    options.sourceMap = true
    options.inline = true
    {js, v3SourceMap} = KavaScript.compile code, options
    "#{js}\n//# sourceMappingURL=data:application/json;base64,#{btoa unescape encodeURIComponent v3SourceMap}\n//# sourceURL=kavascript"

# Load a remote script from the current domain via XHR.
KavaScript.load = (url, callback, options = {}, hold = false) ->
  options.sourceFiles = [url]
  xhr = if window.ActiveXObject
    new window.ActiveXObject('Microsoft.XMLHTTP')
  else
    new window.XMLHttpRequest()
  xhr.open 'GET', url, true
  xhr.overrideMimeType 'text/plain' if 'overrideMimeType' of xhr
  xhr.onreadystatechange = ->
    if xhr.readyState is 4
      if xhr.status in [0, 200]
        param = [xhr.responseText, options]
        KavaScript.run param... unless hold
      else
        throw new Error "Could not load #{url}"
      callback param if callback
  xhr.send null

# Activate KavaScript in the browser by having it compile and evaluate
# all script tags with a content-type of `text/kavascript`.
# This happens on page load.
runScripts = ->
  scripts = window.document.getElementsByTagName 'script'
  ksTypes = ['text/kavascript', 'text/verbose-kavascript']
  ksTags = (s for s in scripts when s.type in ksTypes)
  index = 0

  execute = ->
    param = ksTags[index]
    if param instanceof Array
      KavaScript.run param...
      index++
      execute()

  for script, i in ksTags
    do (script, i) ->
      options = verbose: script.type is ksTypes[1]
      source = script.src or script.getAttribute('data-src')
      if source
        KavaScript.load source,
          (param) ->
            ksTags[i] = param
            execute()
          options
          true
      else
        options.sourceFiles = ['embedded']
        ksTags[i] = [script.innerHTML, options]

  execute()

# Listen for window load, both in decent browsers and in IE.
if window.addEventListener
  window.addEventListener 'DOMContentLoaded', runScripts, no
else
  window.attachEvent 'onload', runScripts
