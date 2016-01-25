<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
  <title>KavaScript</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="canonical" href="http://kavascript.org" />
  <link rel="stylesheet" type="text/css" href="documentation/css/docs.css" />
  <link rel="stylesheet" type="text/css" href="documentation/css/tomorrow.css" />
  <link rel="shortcut icon" href="documentation/images/favicon.ico" />
</head>
<body>

  <div id="fadeout"></div>

  <div id="flybar">
    <div class="navigation title">
      <div class="button">
        <a id="logo" href="#top">KavaScript</a>
      </div>
    </div>
    <div class="navigation toc">
      <div class="button">
        Table of Contents
      </div>
      <div class="contents menu">
        <a href="#overview">Overview</a>
        <a href="#installation">Installation</a>
        <a href="#usage">Usage</a>
        <a href="#verbose">Verbose KavaScript</a>
        <a href="#language">Language Reference</a>
        <a href="#literals">Literals: Functions, Objects and Arrays</a>
        <a href="#lexical-scope">Lexical Scoping and Variable Safety</a>
        <a href="#conditionals">If, Else, Unless, and Conditional Assignment</a>
        <a href="#splats">Splats...</a>
        <a href="#loops">Loops and Comprehensions</a>
        <a href="#slices">Array Slicing and Splicing</a>
        <a href="#expressions">Everything is an Expression</a>
        <a href="#operators">Operators and Aliases</a>
        <a href="#classes">Classes, Inheritance, and Super</a>
        <a href="#destructuring">Destructuring Assignment</a>
        <a href="#fat-arrow">Bound and Generator Functions</a>
        <a href="#embedded">Embedded JavaScript</a>
        <a href="#switch">Switch and Try/Catch</a>
        <a href="#comparisons">Chained Comparisons</a>
        <a href="#strings">String Interpolation, Block Strings, and Block Comments</a>
        <a href="#regexes">Block Regular Expressions</a>
        <a href="#kake">Kake, and Kakefiles</a>
        <a href="#source-maps">Source Maps</a>
        <a href="#scripts">"text/kavascript" Script Tags</a>
        <a href="#resources">Books, Screencasts, Examples and Resources</a>
        <a href="#changelog">Change Log</a>
      </div>
    </div>
    <div class="navigation try">
      <div class="button">
        Try KavaScript
        <div class="repl_bridge"></div>
      </div>
      <div class="contents repl_wrapper">
        <div class="code">
          <div class="screenshadow tl"></div>
          <div class="screenshadow tr"></div>
          <div class="screenshadow bl"></div>
          <div class="screenshadow br"></div>
          <div id="repl_source_wrap">
            <textarea id="repl_source" rows="100" spellcheck="false">alert "Hello KavaScript!"</textarea>
          </div>
          <div id="repl_results_wrap"><pre id="repl_results"></pre></div>
          <div class="minibutton dark run" title="Ctrl-Enter">Run</div>
          <a class="minibutton permalink" id="repl_permalink">Link</a>
          <br class="clear" />
        </div>
      </div>
    </div>
    <div class="navigation annotated">
      <div class="button">
        Annotated Source
      </div>
      <div class="contents menu">
        <a href="documentation/docs/grammar.html">Grammar Rules &mdash; src/grammar</a>
        <a href="documentation/docs/lexer.html">Lexing Tokens &mdash; src/lexer</a>
        <a href="documentation/docs/rewriter.html">The Rewriter &mdash; src/rewriter</a>
        <a href="documentation/docs/nodes.html">The Syntax Tree &mdash; src/nodes</a>
        <a href="documentation/docs/scope.html">Lexical Scope &mdash; src/scope</a>
        <a href="documentation/docs/helpers.html">Helpers &amp; Utility Functions &mdash; src/helpers</a>
        <a href="documentation/docs/kavascript.html">The KavaScript Module &mdash; src/kavascript</a>
        <a href="documentation/docs/kake.html">Kake &amp; Kakefiles &mdash; src/kake</a>
        <a href="documentation/docs/command.html">"ks" Command-Line Utility &mdash; src/command</a>
        <a href="documentation/docs/optparse.html">Option Parsing &mdash; src/optparse</a>
        <a href="documentation/docs/repl.html">Interactive REPL &mdash; src/repl</a>
        <a href="documentation/docs/sourcemap.html">Source Maps &mdash; src/sourcemap</a>
      </div>
    </div>
  </div>

  <div class="container">
    <span class="bookmark" id="top"></span>

    <p>
      <b>KavaScript is a little language that compiles into JavaScript.</b>
      Underneath that awkward Java-esque patina, JavaScript has always had
      a gorgeous heart. KavaScript is an attempt to expose
      the good parts of JavaScript in a simple way.
    </p>

    <p>
      The golden rule of KavaScript is: <i>"It's just JavaScript"</i>. The code
      compiles one-to-one into the equivalent JS, and there is
      no interpretation at runtime. You can use any existing JavaScript library
      seamlessly from KavaScript (and vice-versa). The compiled output is
      readable and pretty-printed, will work in every JavaScript runtime, and tends
      to run as fast or faster than the equivalent handwritten JavaScript.
    </p>

    <p>
      <b>Latest Version:</b>
      <a href="http://github.com/appjudo/kavascript/tarball/1.10.0">1.10.0</a>
    </p>

    <pre>npm install -g kavascript</pre>

    <h2>
      <span id="overview" class="bookmark"></span>
      Overview
    </h2>

    <p><i>KavaScript on the left, compiled JavaScript output on the right.</i></p>

    <%= codeFor('overview', 'cubes', false) %>

    <h2>
      <span id="installation" class="bookmark"></span>
      Installation
    </h2>

    <p>
      The KavaScript compiler is itself
      <a href="documentation/docs/grammar.html">written in KavaScript</a>,
      using the <a href="http://jison.org">Jison parser generator</a>. The
      command-line version of <code>ks</code> is available as a
      <a href="http://nodejs.org/">Node.js</a> utility. The
      <a href="extras/kavascript.js">core compiler</a> however, does not
      depend on Node, and can be run in any JavaScript environment, or in the
      browser (see "Try KavaScript", above).
    </p>

    <p>
      To install, first make sure you have a working copy of the latest stable version of
      <a href="http://nodejs.org/">Node.js</a>. You can then install KavaScript globally
      with <a href="http://npmjs.org">npm</a>:
    </p>

    <pre>
npm install -g kavascript</pre>

    <p>
      When you need KavaScript as a dependency, install it locally:
    </p>

    <pre>
npm install --save kavascript</pre>

    <p>
      If you'd prefer to install the latest <b>master</b> version of KavaScript, you
      can clone the KavaScript
      <a href="http://github.com/appjudo/kavascript">source repository</a>
      from GitHub, or download
      <a href="http://github.com/appjudo/kavascript/tarball/master">the source</a> directly.
      To install the latest master KavaScript compiler with npm:
    </p>

<pre>
npm install -g kavascript</pre>

    <p>
      Or, if you want to install to <code>/usr/local</code>, and don't want to use
      npm to manage it, open the <code>kavascript</code> directory and run:
    </p>

  <pre>
sudo bin/kake install</pre>

    <h2>
      <span id="usage" class="bookmark"></span>
      Usage
    </h2>

    <p>
      Once installed, you should have access to the <code>ks</code> command,
      which can execute scripts, compile <code>.ks</code> files into <code>.js</code>,
      and provide an interactive REPL. The <code>ks</code> command takes the
      following options:
    </p>

    <table>
      <tr>
        <td><code>-c, --compile</code></td>
        <td>
          Compile a <code>.ks</code> script into a <code>.js</code> JavaScript file
          of the same name.
        </td>
      </tr>
      <tr>
        <td><code>-m, --map</code></td>
        <td>
          Generate source maps alongside the compiled JavaScript files. Adds
          <code>sourceMappingURL</code> directives to the JavaScript as well.
        </td>
      </tr>
      <tr>
        <td width="25%"><code>-i, --interactive</code></td>
        <td>
          Launch an interactive KavaScript session to try short snippets.
          Identical to calling <code>ks</code> with no arguments.
        </td>
      </tr>
      <tr>
        <td><code>-o, --output [DIR]</code></td>
        <td>
          Write out all compiled JavaScript files into the specified directory.
          Use in conjunction with <code>--compile</code> or <code>--watch</code>.
        </td>
      </tr>
      <tr>
        <td><code>-j, --join [FILE]</code></td>
        <td>
          Before compiling, concatenate all scripts together in the order they
          were passed, and write them into the specified file.
          Useful for building large projects.
        </td>
      </tr>
      <tr>
        <td><code>-w, --watch</code></td>
        <td>
          Watch files for changes, rerunning the specified command when any
          file is updated.
        </td>
      </tr>
      <tr>
        <td><code>-p, --print</code></td>
        <td>
          Instead of writing out the JavaScript as a file, print it
          directly to <b>stdout</b>.
        </td>
      </tr>
      <tr>
        <td><code>-s, --stdio</code></td>
        <td>
          Pipe in KavaScript to STDIN and get back JavaScript over STDOUT.
          Good for use with processes written in other languages. An example:<br />
          <code>cat src/kake.ks | ks -sc</code>
        </td>
      </tr>
      <tr>
        <td><code>-l, --verbose</code></td>
        <td>
          Parses the code as Verbose KavaScript. You only need to specify
          this when passing in code directly over <b>stdio</b>, or using some sort
          of extension-less file name.
        </td>
      </tr>
      <tr>
        <td><code>-e, --eval</code></td>
        <td>
          Compile and print a little snippet of KavaScript directly from the
          command line. For example:<br /><code>ks -e "console.log num for num in [10..1]"</code>
        </td>
      </tr>
      <tr>
        <td><code>-b, --bare</code></td>
        <td>
          Compile the JavaScript without the
          <a href="#lexical-scope">top-level function safety wrapper</a>.
        </td>
      </tr>
      <tr>
        <td><code>-t, --tokens</code></td>
        <td>
          Instead of parsing the KavaScript, just lex it, and print out the
          token stream: <code>[IDENTIFIER square] [ASSIGN =] [PARAM_START (]</code> ...
        </td>
      </tr>
      <tr>
        <td><code>-n, --nodes</code></td>
        <td>
          Instead of compiling the KavaScript, just lex and parse it, and print
          out the parse tree:
<pre class="no_bar">
Expressions
  Assign
    Value "square"
    Code "x"
      Op *
        Value "x"
        Value "x"</pre>
        </td>
      </tr>
      <tr>
        <td><code>--nodejs</code></td>
        <td>
          The <code>node</code> executable has some useful options you can set,
          such as<br /> <code>--debug</code>, <code>--debug-brk</code>, <code>--max-stack-size</code>,
          and <code>--expose-gc</code>. Use this flag to forward options directly to Node.js.
          To pass multiple flags, use <code>--nodejs</code> multiple times.
        </td>
      </tr>
    </table>

    <p>
      <b>Examples:</b>
    </p>

    <ul>
      <li>
        Compile a directory tree of <code>.ks</code> files in <code>src</code> into a parallel
        tree of <code>.js</code> files in <code>lib</code>:<br />
        <code>ks --compile --output lib/ src/</code>
      </li>
      <li>
        Watch a file for changes, and recompile it every time the file is saved:<br />
        <code>ks --watch --compile experimental.ks</code>
      </li>
      <li>
        Concatenate a list of files into a single script:<br />
        <code>ks --join project.js --compile src/*.ks</code>
      </li>
      <li>
        Print out the compiled JS from a one-liner:<br />
        <code>ks -bpe "alert i for i in [0..10]"</code>
      </li>
      <li>
        All together now, watch and recompile an entire project as you work on it:<br />
        <code>ks -o lib/ -cw src/</code>
      </li>
      <li>
        Start the KavaScript REPL (<code>Ctrl-D</code> to exit, <code>Ctrl-V</code>for multi-line):<br />
        <code>ks</code>
      </li>
    </ul>

    <h2>
      <span id="verbose" class="bookmark"></span>
      Verbose KavaScript
    </h2>

    <p>
      Besides being used as an ordinary programming language, KavaScript may
      also be written in "verbose" mode. If you name your file with a
      <code>.vks</code> extension, you can write it as a Markdown document &mdash;
      a document that also happens to be executable KavaScript code. The compiler
      will treat any indented blocks (Markdown's way of indicating source code)
      as code, and ignore the rest as comments.
    </p>

    <p>
      Just for kicks, a little bit of the compiler is currently implemented in this fashion:
      See it
      <a href="https://gist.github.com/jashkenas/3fc3c1a8b1009c00d9df">as a document</a>,
      <a href="https://raw.github.com/appjudo/kavascript/master/src/scope.vks">raw</a>,
      and <a href="http://cl.ly/LxEu">properly highlighted in a text editor</a>.
    </p>

    <h2>
      <span id="language" class="bookmark"></span>
      Language Reference
    </h2>

    <p>
      <i>
        This reference is structured so that it can be read from top to bottom,
        if you like. Later sections use ideas and syntax previously introduced.
        Familiarity with JavaScript is assumed.
        In all of the following examples, the source KavaScript is provided on
        the left, and the direct compilation into JavaScript is on the right.
      </i>
    </p>

    <p>
      <i>
        Many of the examples can be run (where it makes sense) by pressing the <b>run</b>
        button on the right, and can be loaded into the "Try KavaScript"
        console by pressing the <b>load</b> button on the left.
      </i>
    <p>
      First, the basics: KavaScript uses significant whitespace to delimit blocks of code.
      You don't need to use semicolons <code>;</code> to terminate expressions,
      ending the line will do just as well (although semicolons can still
      be used to fit multiple expressions onto a single line).
      Instead of using curly braces
      <code>{ }</code> to surround blocks of code in <a href="#literals">functions</a>,
      <a href="#conditionals">if-statements</a>,
      <a href="#switch">switch</a>, and <a href="#try">try/catch</a>,
      use indentation.
    </p>

    <p>
      You don't need to use parentheses to invoke a function if you're passing
      arguments. The implicit call wraps forward to the end of the line or block expression.<br />
      <code>console.log sys.inspect object</code> &rarr; <code>console.log(sys.inspect(object));</code>
    </p>

    <p>
      <span id="literals" class="bookmark"></span>
      <b class="header">Functions</b>
      Functions are defined by an optional list of parameters in parentheses,
      an arrow, and the function body. The empty function looks like this:
      <code>-></code>
    </p>
    <%= codeFor('functions', 'cube(5)') %>
    <p>
      Functions may also have default values for arguments, which will be used
      if the incoming argument is missing (<code>null</code> or <code>undefined</code>).
    </p>
    <%= codeFor('default_args', 'fill("cup")') %>

    <p>
      <span id="objects_and_arrays" class="bookmark"></span>
      <b class="header">Objects and Arrays</b>
      The KavaScript literals for objects and arrays look very similar to
      their JavaScript cousins. When each property is listed on its own line,
      the commas are optional. Objects may be created using indentation instead
      of explicit braces, similar to <a href="http://yaml.org">YAML</a>.
    </p>
    <%= codeFor('objects_and_arrays', 'song.join(" ... ")') %>
    <p>
      In JavaScript, you can't use reserved words, like <code>class</code>, as properties
      of an object, without quoting them as strings. KavaScript notices reserved words
      used as keys in objects and quotes them for you, so you don't have to worry
      about it (say, when using jQuery).
    </p>
    <%= codeFor('objects_reserved') %>

    <p>
      <span id="lexical-scope" class="bookmark"></span>
      <b class="header">Lexical Scoping and Variable Safety</b>
      The KavaScript compiler takes care to make sure that all of your variables
      are properly declared within lexical scope &mdash; you never need to write
      <code>var</code> yourself.
    </p>
    <%= codeFor('scope', 'inner') %>
    <p>
      Notice how all of the variable declarations have been pushed up to
      the top of the closest scope, the first time they appear.
      <b>outer</b> is not redeclared within the inner function, because it's
      already in scope; <b>inner</b> within the function, on the other hand,
      should not be able to change the value of the external variable of the same name, and
      therefore has a declaration of its own.
    </p>
    <p>
      This behavior is effectively identical to Ruby's scope for local variables.
      Because you don't have direct access to the <code>var</code> keyword,
      it's impossible to shadow an outer variable on purpose, you may only refer
      to it. So be careful that you're not reusing the name of an external
      variable accidentally, if you're writing a deeply nested function.
    </p>
    <p>
      Although suppressed within this documentation for clarity, all
      KavaScript output is wrapped in an anonymous function:
      <code>(function(){ ... })();</code> This safety wrapper, combined with the
      automatic generation of the <code>var</code> keyword, make it exceedingly difficult
      to pollute the global namespace by accident.
    </p>
    <p>
      If you'd like to create top-level variables for other scripts to use,
      attach them as properties on <b>window</b>, or on the <b>exports</b>
      object in CommonJS. The <b>existential operator</b> (covered below), gives you a
      reliable way to figure out where to add them; if you're targeting both
      CommonJS and the browser: <code>exports ? this</code>
    </p>

    <p>
      <span id="conditionals" class="bookmark"></span>
      <b class="header">If, Else, Unless, and Conditional Assignment</b>
      <b>If/else</b> statements can be written without the use of parentheses and
      curly brackets. As with functions and other block expressions,
      multi-line conditionals are delimited by indentation. There's also a handy
      postfix form, with the <code>if</code> or <code>unless</code> at the end.
    </p>
    <p>
      KavaScript can compile <b>if</b> statements into JavaScript expressions,
      using the ternary operator when possible, and closure wrapping otherwise. There
      is no explicit ternary statement in KavaScript &mdash; you simply use
      a regular <b>if</b> statement on a single line.
    </p>
    <%= codeFor('conditionals') %>

    <p>
      <span id="splats" class="bookmark"></span>
      <b class="header">Splats...</b>
      The JavaScript <b>arguments object</b> is a useful way to work with
      functions that accept variable numbers of arguments. KavaScript provides
      splats <code>...</code>, both for function definition as well as invocation,
      making variable numbers of arguments a little bit more palatable.
    </p>
    <%= codeFor('splats', true) %>

    <p>
      <span id="loops" class="bookmark"></span>
      <b class="header">Loops and Comprehensions</b>
      Most of the loops you'll write in KavaScript will be <b>comprehensions</b>
      over arrays, objects, and ranges. Comprehensions replace (and compile into)
      <b>for</b> loops, with optional guard clauses and the value of the current array index.
      Unlike for loops, array comprehensions are expressions, and can be returned
      and assigned.
    </p>
    <%= codeFor('array_comprehensions') %>
    <p>
      Comprehensions should be able to handle most places where you otherwise
      would use a loop, <b>each</b>/<b>forEach</b>, <b>map</b>, or <b>select</b>/<b>filter</b>, for example:
      <code>shortNames = (name for name in list when name.length &lt; 5)</code><br />
      If you know the start and end of your loop, or would like to step through
      in fixed-size increments, you can use a range to specify the start and
      end of your comprehension.
    </p>
    <%= codeFor('range_comprehensions', 'countdown') %>
    <p>
      Note how because we are assigning the value of the comprehensions to a
      variable in the example above, KavaScript is collecting the result of
      each iteration into an array. Sometimes functions end with loops that are
      intended to run only for their side-effects. Be careful that you're not
      accidentally returning the results of the comprehension in these cases,
      by adding a meaningful return value &mdash; like <code>true</code> &mdash; or <code>null</code>,
      to the bottom of your function.
    </p>
    <p>
      To step through a range comprehension in fixed-size chunks,
      use <code>by</code>, for example:<br />
      <code>evens = (x for x in [0..10] by 2)</code>
    </p>
    <p>
      If you don't need the current iteration value you may omit it:<br />
      <code>browser.closeCurrentTab() for [0...count]</code>
    </p>
    <p>
      Comprehensions can also be used to iterate over the keys and values in
      an object. Use <code>of</code> to signal comprehension over the properties of
      an object instead of the values in an array.
    </p>
    <%= codeFor('object_comprehensions', 'ages.join(", ")') %>
    <p>
      If you would like to iterate over just the keys that are defined on the
      object itself, by adding a <code>hasOwnProperty</code>
      check to avoid properties that may be inherited from the prototype, use<br />
      <code>for own key, value of object</code>
    </p>
    <p>
      The only low-level loop that KavaScript provides is the <b>while</b> loop. The
      main difference from JavaScript is that the <b>while</b> loop can be used
      as an expression, returning an array containing the result of each iteration
      through the loop.
    </p>
    <%= codeFor('while', 'lyrics.join("\\n")') %>
    <p>
      For readability, the <b>until</b> keyword is equivalent to <code>while not</code>,
      and the <b>loop</b> keyword is equivalent to <code>while true</code>.
    </p>
    <p>
      When using a JavaScript loop to generate functions, it's common to insert
      a closure wrapper in order to ensure that loop variables are closed over,
      and all the generated functions don't just share the final values. KavaScript
      provides the <code>do</code> keyword, which immediately invokes a passed function,
      forwarding any arguments.
    </p>
    <%= codeFor('do') %>

    <p>
      <span id="slices" class="bookmark"></span>
      <b class="header">Array Slicing and Splicing with Ranges</b>
      Ranges can also be used to extract slices of arrays.
      With two dots (<code>3..6</code>), the range is inclusive (<code>3, 4, 5, 6</code>);
      with three dots (<code>3...6</code>), the range excludes the end (<code>3, 4, 5</code>).
      Slices indices have useful defaults. An omitted first index defaults to
      zero and an omitted second index defaults to the size of the array.
    </p>
    <%= codeFor('slices', 'middle') %>
    <p>
      The same syntax can be used with assignment to replace a segment of an array
      with new values, splicing it.
    </p>
    <%= codeFor('splices', 'numbers') %>
    <p>
      Note that JavaScript strings are immutable, and can't be spliced.
    </p>
    <p>
      <span id="expressions" class="bookmark"></span>
      <b class="header">Everything is an Expression (at least, as much as possible)</b>
      You might have noticed how even though we don't add return statements
      to KavaScript functions, they nonetheless return their final value.
      The KavaScript compiler tries to make sure that all statements in the
      language can be used as expressions. Watch how the <code>return</code> gets
      pushed down into each possible branch of execution in the function
      below.
    </p>
    <%= codeFor('expressions', 'eldest') %>
    <p>
      Even though functions will always return their final value, it's both possible
      and encouraged to return early from a function body writing out the explicit
      return (<code>return value</code>), when you know that you're done.
    </p>
    <p>
      Because variable declarations occur at the top of scope, assignment can
      be used within expressions, even for variables that haven't been seen before:
    </p>
    <%= codeFor('expressions_assignment', 'six') %>
    <p>
      Things that would otherwise be statements in JavaScript, when used
      as part of an expression in KavaScript, are converted into expressions
      by wrapping them in a closure. This lets you do useful things, like assign
      the result of a comprehension to a variable:
    </p>
    <%= codeFor('expressions_comprehension', 'globals') %>
    <p>
      As well as silly things, like passing a <b>try/catch</b> statement directly
      into a function call:
    </p>
    <%= codeFor('expressions_try', true) %>
    <p>
      There are a handful of statements in JavaScript that can't be meaningfully
      converted into expressions, namely <code>break</code>, <code>continue</code>,
      and <code>return</code>. If you make use of them within a block of code,
      KavaScript won't try to perform the conversion.
    </p>

    <p>
      <span id="operators" class="bookmark"></span>
      <b class="header">Operators and Aliases</b>
      Because the <code>==</code> operator frequently causes undesirable coercion,
      is intransitive, and has a different meaning than in other languages,
      KavaScript compiles <code>==</code> into <code>===</code>, and <code>!=</code> into
      <code>!==</code>.
      In addition, <code>is</code> compiles into <code>===</code>,
      and <code>isnt</code> into <code>!==</code>.
    </p>
    <p>
      You can use <code>not</code> as an alias for <code>!</code>.
    </p>
    <p>
      For logic, <code>and</code> compiles to <code>&amp;&amp;</code>, and <code>or</code>
      into <code>||</code>.
    </p>
    <p>
      Instead of a newline or semicolon, <code>then</code> can be used to separate
      conditions from expressions, in <b>while</b>,
      <b>if</b>/<b>else</b>, and <b>switch</b>/<b>when</b> statements.
    </p>
    <p>
      As in <a href="http://yaml.org/">YAML</a>, <code>on</code> and <code>yes</code>
      are the same as boolean <code>true</code>, while <code>off</code> and <code>no</code> are boolean <code>false</code>.
    </p>
    <p>
      <code>unless</code> can be used as the inverse of <code>if</code>.
    </p>
    <p>
      As a shortcut for <code>this.property</code>, you can use <code>@property</code>.
    </p>
    <p>
      You can use <code>in</code> to test for array presence, and <code>of</code> to
      test for JavaScript object-key presence.
    </p>
    <p>
      To simplify math expressions, <code>**</code> can be used for exponentiation
      and <code>//</code> performs integer division. <code>%</code> works just like in
      JavaScript, while <code>%%</code> provides
      <a href="http://en.wikipedia.org/wiki/Modulo_operation">“dividend dependent modulo”</a>:
    </p>
    <%= codeFor('modulo') %>
    <p>
      All together now:
    </p>

    <table class="definitions">
      <tr><th>KavaScript</th><th>JavaScript</th></tr>
      <tr><td><code>is</code></td><td><code>===</code></td></tr>
      <tr><td><code>isnt</code></td><td><code>!==</code></td></tr>
      <tr><td><code>not</code></td><td><code>!</code></td></tr>
      <tr><td><code>and</code></td><td><code>&amp;&amp;</code></td></tr>
      <tr><td><code>or</code></td><td><code>||</code></td></tr>
      <tr><td><code>true</code>, <code>yes</code>, <code>on</code></td><td><code>true</code></td></tr>
      <tr><td><code>false</code>, <code>no</code>, <code>off</code></td><td><code>false</code></td></tr>
      <tr><td><code>@</code>, <code>this</code></td><td><code>this</code></td></tr>
      <tr><td><code>of</code></td><td><code>in</code></td></tr>
      <tr><td><code>in</code></td><td><i><small>no JS equivalent</small></i></td></tr>
      <tr><td><code>a ** b</code></td><td><code>Math.pow(a, b)</code></td></tr>
      <tr><td><code>a // b</code></td><td><code>Math.floor(a / b)</code></td></tr>
      <tr><td><code>a %% b</code></td><td><code>(a % b + b) % b</code></td></tr>
    </table>

    <%= codeFor('aliases') %>

    <p>
      <b class="header">The Existential Operator</b>
      It's a little difficult to check for the existence of a variable in
      JavaScript. <code>if (variable) ...</code> comes close, but fails for zero,
      the empty string, and false. KavaScript's existential operator <code>?</code> returns true unless
      a variable is <b>null</b> or <b>undefined</b>, which makes it analogous
      to Ruby's <code>nil?</code>
    </p>
    <p>
      It can also be used for safer conditional assignment than <code>||=</code>
      provides, for cases where you may be handling numbers or strings.
    </p>
    <%= codeFor('existence', 'footprints') %>
    <p>
      The accessor variant of the existential operator <code>?.</code> can be used to soak
      up null references in a chain of properties. Use it instead
      of the dot accessor <code>.</code> in cases where the base value may be <b>null</b>
      or <b>undefined</b>. If all of the properties exist then you'll get the expected
      result, if the chain is broken, <b>undefined</b> is returned instead of
      the <b>TypeError</b> that would be raised otherwise.
    </p>
    <%= codeFor('soaks') %>
    <p>
      Soaking up nulls is similar to Ruby's
      <a href="https://rubygems.org/gems/andand">andand gem</a>, and to the
      <a href="http://docs.groovy-lang.org/latest/html/documentation/index.html#_safe_navigation_operator">safe navigation operator</a>
      in Groovy.
    </p>

    <p>
      <span id="classes" class="bookmark"></span>
      <b class="header">Classes, Inheritance, and Super</b>
      JavaScript's prototypal inheritance has always been a bit of a
      brain-bender, with a whole family tree of libraries that provide a cleaner
      syntax for classical inheritance on top of JavaScript's prototypes:
      <a href="http://code.google.com/p/base2/">Base2</a>,
      <a href="http://prototypejs.org/">Prototype.js</a>,
      <a href="http://jsclass.jcoglan.com/">JS.Class</a>, etc.
      The libraries provide syntactic sugar, but the built-in inheritance would
      be completely usable if it weren't for a couple of small exceptions:
      it's awkward to call <b>super</b> (the prototype object's
      implementation of the current function), and it's awkward to correctly
      set the prototype chain.
    </p>
    <p>
      Instead of repetitively attaching functions to a prototype, KavaScript
      provides a basic <code>class</code> structure that allows you to name your class,
      set the superclass, assign prototypal properties, and define the constructor,
      in a single assignable expression.
    </p>
    <p>
      Constructor functions are named, to better support helpful stack traces.
      In the first class in the example below, <code>this.constructor.name is "Animal"</code>.
    </p>
    <%= codeFor('classes', true) %>
    <p>
      If structuring your prototypes classically isn't your cup of tea, KavaScript
      provides a couple of lower-level conveniences. The <code>extends</code> operator
      helps with proper prototype setup, and can be used to create an inheritance
      chain between any pair of constructor functions; <code>::</code> gives you
      quick access to an object's prototype; and <code>super()</code>
      is converted into a call against the immediate ancestor's method of the same name.
    </p>
    <%= codeFor('prototypes', '"one_two".dasherize()') %>
    <p>
      Finally, class definitions are blocks of executable code, which make for interesting
      metaprogramming possibilities. Because in the context of a class definition,
      <code>this</code> is the class object itself (the constructor function), you
      can assign static properties by using <br /><code>@property: value</code>, and call
      functions defined in parent classes: <code>@attr 'title', type: 'text'</code>
    </p>

    <p>
      <span id="destructuring" class="bookmark"></span>
      <b class="header">Destructuring Assignment</b>
      Just like JavaScript (since ES2015), KavaScript has destructuring assignment
      syntax. When you assign an array or object literal to a value, KavaScript
      breaks up and matches both sides against each other, assigning the values
      on the right to the variables on the left. In the simplest case, it can be
      used for parallel assignment:
    </p>
    <%= codeFor('parallel_assignment', 'theBait') %>
    <p>
      But it's also helpful for dealing with functions that return multiple
      values.
    </p>
    <%= codeFor('multiple_return_values', 'forecast') %>
    <p>
      Destructuring assignment can be used with any depth of array and object nesting,
      to help pull out deeply nested properties.
    </p>
    <%= codeFor('object_extraction', 'name + "-" + street') %>
    <p>
      Destructuring assignment can even be combined with splats.
    </p>
    <%= codeFor('patterns_and_splats', 'contents.join("")') %>
    <p>
      Expansion can be used to retrieve elements from the end of an array without having to assign the rest of its values. It works in function parameter lists as well.
    </p>
    <%= codeFor('expansion', 'first + " " + last') %>
    <p>
      Destructuring assignment is also useful when combined with class constructors
      to assign properties to your instance from an options object passed to the constructor.
    </p>
    <%= codeFor('constructor_destructuring', 'tim.age + " " + tim.height') %>
    <p>
      The above example also demonstrates that if properties are missing in the
      destructured object or array, you can, just like in JavaScript, provide
      defaults. The difference with JavaScript is that KavaScript, as always,
      treats both null and undefined the same.
    </p>

    <p>
      <span id="fat-arrow" class="bookmark"></span>
      <b class="header">Bound Functions, Generator Functions</b>
      In JavaScript, the <code>this</code> keyword is dynamically scoped to mean the
      object that the current function is attached to. If you pass a function as
      a callback or attach it to a different object, the original value of <code>this</code>
      will be lost. If you're not familiar with this behavior,
      <a href="http://www.digital-web.com/articles/scope_in_javascript/">this Digital Web article</a>
      gives a good overview of the quirks.
    </p>
    <p>
      The fat arrow <code>=&gt;</code> can be used to both define a function, and to bind
      it to the current value of <code>this</code>, right on the spot. This is helpful
      when using callback-based libraries like Prototype or jQuery, for creating
      iterator functions to pass to <code>each</code>, or event-handler functions
      to use with <code>on</code>. Functions created with the fat arrow are able to access
      properties of the <code>this</code> where they're defined.
    </p>
    <%= codeFor('fat_arrow') %>
    <p>
      If we had used <code>-&gt;</code> in the callback above, <code>@customer</code> would
      have referred to the undefined "customer" property of the DOM element,
      and trying to call <code>purchase()</code> on it would have raised an exception.
    </p>
    <p>
      When used in a class definition, methods declared with the fat arrow will
      be automatically bound to each instance of the class when the instance is
      constructed.
    </p>
    <p>
      KavaScript functions also support
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*">ES6 generator functions</a>
      through the <code>yield</code> keyword. There's no <code>function*(){}</code>
      nonsense &mdash; a generator in KavaScript is simply a function that yields.
    </p>
    <%= codeFor('generators', 'ps.next().value') %>
    <p>
      <code>yield*</code> is called <code>yield from</code>, and <code>yield return</code>
      may be used if you need to force a generator that doesn't yield.
    </p>

    <p>
      <span id="embedded" class="bookmark"></span>
      <b class="header">Embedded JavaScript</b>
      Hopefully, you'll never need to use it, but if you ever need to intersperse
      snippets of JavaScript within your KavaScript, you can
      use backticks to pass it straight through.
    </p>
    <%= codeFor('embedded', 'hi()') %>

    <p>
      <span id="switch" class="bookmark"></span>
      <b class="header">Switch/When/Else</b>
      <b>Switch</b> statements in JavaScript are a bit awkward. You need to
      remember to <b>break</b> at the end of every <b>case</b> statement to
      avoid accidentally falling through to the default case.
      KavaScript prevents accidental fall-through, and can convert the <code>switch</code>
      into a returnable, assignable expression. The format is: <code>switch</code> condition,
      <code>when</code> clauses, <code>else</code> the default case.
    </p>
    <p>
      As in Ruby, <b>switch</b> statements in KavaScript can take multiple
      values for each <b>when</b> clause. If any of the values match, the clause
      runs.
    </p>
    <%= codeFor('switch') %>

    <p>
      Switch statements can also be used without a control expression, turning them in to a cleaner alternative to if/else chains.
    </p>
    <%= codeFor('switch_with_no_expression') %>

    <p>
      <span id="try" class="bookmark"></span>
      <b class="header">Try/Catch/Finally</b>
      Try-expressions have the same semantics as try-statements in JavaScript,
      though in KavaScript, you may omit <em>both</em> the catch and finally
      parts. The catch part may also omit the error parameter if it is not needed.
    </p>
    <%= codeFor('try') %>

    <p>
      <span id="comparisons" class="bookmark"></span>
      <b class="header">Chained Comparisons</b>
      KavaScript borrows
      <a href="http://docs.python.org/reference/expressions.html#notin">chained comparisons</a>
      from Python &mdash; making it easy to test if a value falls within a
      certain range.
    </p>
    <%= codeFor('comparisons', 'healthy') %>

    <p>
      <span id="strings" class="bookmark"></span>
      <b class="header">String Interpolation, Block Strings, and Block Comments</b>
      Ruby-style string interpolation is included in KavaScript. Double-quoted
      strings allow for interpolated values, using <code>#{ ... }</code>,
      and single-quoted strings are literal. You may even use interpolation in
      object keys.
    </p>
    <%= codeFor('interpolation', 'sentence') %>
    <p>
      Multiline strings are allowed in KavaScript. Lines are joined by a single space unless they end with a backslash. Indentation is ignored.
    </p>
    <%= codeFor('strings', 'mobyDick') %>
    <p>
      Block strings can be used to hold formatted or indentation-sensitive text
      (or, if you just don't feel like escaping quotes and apostrophes). The
      indentation level that begins the block is maintained throughout, so
      you can keep it all aligned with the body of your code.
    </p>
    <%= codeFor('heredocs', 'html') %>
    <p>
      Double-quoted block strings, like other double-quoted strings, allow interpolation.
    </p>
    <p>
      Sometimes you'd like to pass a block comment through to the generated
      JavaScript. For example, when you need to embed a licensing header at
      the top of a file. Block comments, which mirror the syntax for block strings,
      are preserved in the generated code.
    </p>
    <%= codeFor('block_comment') %>

    <p>
      <span id="regexes" class="bookmark"></span>
      <b class="header">Block Regular Expressions</b>
      Similar to block strings and comments, KavaScript supports block regexes &mdash;
      extended regular expressions that ignore internal whitespace and can contain
      comments and interpolation. Modeled after Perl's <code>/x</code> modifier, KavaScript's
      block regexes are delimited by <code>///</code> and go a long way towards making complex
      regular expressions readable. To quote from the KavaScript source:
    </p>
    <%= codeFor('heregexes') %>


    <h2>
      <span id="kake" class="bookmark"></span>
      Kake, and Kakefiles
    </h2>

    <p>
      KavaScript includes a (very) simple build system similar to
      <a href="http://www.gnu.org/software/make/">Make</a> and
      <a href="http://rake.rubyforge.org/">Rake</a>. Naturally,
      it's called Kake, and is used for the tasks that build and test the KavaScript
      language itself. Tasks are defined in a file named <code>Kakefile</code>, and
      can be invoked by running <code>kake [task]</code> from within the directory.
      To print a list of all the tasks and options, just type <code>kake</code>.
    </p>

    <p>
      Task definitions are written in KavaScript, so you can put arbitrary code
      in your Kakefile. Define a task with a name, a long description, and the
      function to invoke when the task is run. If your task takes a command-line
      option, you can define the option with short and long flags, and it will
      be made available in the <code>options</code> object. Here's a task that uses
      the Node.js API to rebuild KavaScript's parser:
    </p>
    <%= codeFor('kake_tasks') %>
    <p>
      If you need to invoke one task before another &mdash; for example, running
      <code>build</code> before <code>test</code>, you can use the <code>invoke</code> function:
      <code>invoke 'build'</code>. Kake tasks are a minimal way to expose your
      KavaScript functions to the command line, so
      <a href="documentation/docs/kake.html">don't expect any fanciness built-in</a>.
      If you need dependencies, or async callbacks, it's best to put them in your
      code itself &mdash; not the kake task.
    </p>

    <h2>
      <span id="source-maps" class="bookmark"></span>
      Source Maps
    </h2>

    <p>
      KavaScript 1.6.1 and above include support for generating source maps,
      a way to tell your JavaScript engine what part of your KavaScript
      program matches up with the code being evaluated. Browsers that support it
      can automatically use source maps to show your original source code
      in the debugger. To generate source maps alongside your JavaScript files,
      pass the <code>--map</code> or <code>-m</code> flag to the compiler.
    </p>

    <p>
      For a full introduction to source maps, how they work, and how to hook
      them up in your browser, read the
      <a href="http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/">HTML5 Tutorial</a>.
    </p>

    <h2>
      <span id="scripts" class="bookmark"></span>
      "text/kavascript" Script Tags
    </h2>

    <p>
      While it's not recommended for serious use, KavaScripts may be included
      directly within the browser using <code>&lt;script type="text/kavascript"&gt;</code>
      tags. The source includes a compressed and minified version of the compiler
      (<a href="extras/kavascript.js">Download current version here, 39k when gzipped</a>)
      as <code>extras/kavascript.js</code>. Include this file on a page with
      inline KavaScript tags, and it will compile and evaluate them in order.
    </p>

    <p>
      In fact, the little bit of glue script that runs "Try KavaScript" above,
      as well as the jQuery for the menu, is implemented in just this way.
      View source and look at the bottom of the page to see the example.
      Including the script also gives you access to <code>KavaScript.compile()</code>
      so you can pop open Firebug and try compiling some strings.
    </p>

    <p>
      The usual caveats about KavaScript apply &mdash; your inline scripts will
      run within a closure wrapper, so if you want to expose global variables or
      functions, attach them to the <code>window</code> object.
    </p>

    <h2>
      Resources
    </h2>

    <ul>
      <li>
        <a href="http://github.com/appjudo/kavascript/">Source Code</a><br />
        Use <code>bin/ks</code> to test your changes,<br />
        <code>bin/kake test</code> to run the test suite,<br />
        <code>bin/kake build</code> to rebuild the KavaScript compiler, and <br />
        <code>bin/kake build:parser</code> to regenerate the Jison parser if you're
        working on the grammar. <br /><br />
        <code>git checkout lib &amp;&amp; bin/kake build:full</code> is a good command to run when you're working
        on the core language. It'll refresh the lib directory
        (in case you broke something), build your altered compiler, use that to
        rebuild itself (a good sanity test) and then run all of the tests. If
        they pass, there's a good chance you've made a successful change.
      </li>
      <li>
        <a href="http://github.com/appjudo/kavascript/issues">KavaScript Issues</a><br />
        Bug reports, feature proposals, and ideas for changes to the language belong here.
      </li>
    </ul>

    <h2>
      <span id="changelog" class="bookmark"></span>
      Change Log
    </h2>

    <p>
      <%= releaseHeader('2016-01-24', '1.10.0', '1.10.0') %>
      <ul>
        <li>
          Initial release, forked from CoffeeScript 1.10.0.
        </li>
      </ul>
    </p>

  </div>

  <script type="text/kavascript">
    sourceFragment = "try:"

    # Set up the compilation function, to run when you stop typing.
    compileSource = ->
      source = $('#repl_source').val()
      results = $('#repl_results')
      window.compiledJS = ''
      try
        window.compiledJS = KavaScript.compile source, bare: on
        el = results[0]
        if el.innerText
          el.innerText = window.compiledJS
        else
          results.text(window.compiledJS)
        results.removeClass 'error'
        $('.minibutton.run').removeClass 'error'
      catch {location, message}
        if location?
          message = "Error on line #{location.first_line + 1}: #{message}"
        results.text(message).addClass 'error'
        $('.minibutton.run').addClass 'error'

      # Update permalink
      $('#repl_permalink').attr 'href', "##{sourceFragment}#{encodeURIComponent source}"

    # Listen for keypresses and recompile.
    $('#repl_source').keyup -> compileSource()

    # Eval the compiled js.
    evalJS = ->
      try
        eval window.compiledJS
      catch error then alert error

    # Load the console with a string of KavaScript.
    window.loadConsole = (ks) ->
      $('#repl_source').val ks
      compileSource()
      $('.navigation.try').addClass('active')
      false

    # Helper to hide the menus.
    closeMenus = ->
      $('.navigation.active').removeClass 'active'

    $('.minibutton.run').click -> evalJS()

    # Bind navigation buttons to open the menus.
    $('.navigation').click (e) ->
      return if e.target.tagName.toLowerCase() is 'a'
      return false if $(e.target).closest('.repl_wrapper').length
      if $(this).hasClass('active')
        closeMenus()
      else
        closeMenus()
        $(this).addClass 'active'
      false

    # Dismiss console if Escape pressed or click falls outside console
    # Trigger Run button on Ctrl-Enter
    $(document.body)
      .keydown (e) ->
        closeMenus() if e.which == 27
        evalJS() if e.which == 13 and (e.metaKey or e.ctrlKey) and $('.minibutton.run:visible').length
      .click (e) ->
        return false if $(e.target).hasClass('minibutton')
        closeMenus()

    $("#repl_permalink").click (e) ->
        window.location = $(this).attr("href")
        false

    # If source code is included in location.hash, display it.
    hash = decodeURIComponent location.hash.replace(/^#/, '')
    if hash.indexOf(sourceFragment) == 0
        src = hash.substr sourceFragment.length
        loadConsole src

    compileSource()

  </script>

  <script src="documentation/vendor/jquery-1.6.4.js"></script>
  <script src="extras/kavascript.js"></script>

</body>
</html>
