let begin = require('@architect/functions')

// TODO change defaultCSS
let defaultCSS = `
body {
  background: #fbfbfb;
  color: #333333;
  font-family: sans-serif;
}
`

function route(req, res) {
  let request = JSON.stringify(req, null, 2)
  console.log('hello backend', request)
  res({
    css: defaultCSS
  })
}

exports.handler = begin.css.get(route)
