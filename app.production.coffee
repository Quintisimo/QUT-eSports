axis         = require 'axis'
rupture      = require 'rupture'
autoprefixer = require 'autoprefixer-stylus'
js_pipeline  = require 'js-pipeline'
css_pipeline = require 'css-pipeline'
yaml         = require 'roots-yaml'
sitemap      = require 'webriq-roots-sitemap-v2'

module.exports =
  ignores: ['README.md', '**/_*', '.gitignore', 'ship.*conf']

  extensions: [
    js_pipeline(files: 'assets/js/*.coffee', out: 'js/build.js', minify: true, hash: true),
    css_pipeline(files: 'assets/css/*.styl', out: 'css/build.css', minify: true, hash: true),
    yaml(source: 'data'),
    sitemap(url: 'https://qutesports.com', folder: 'public', file: '**/*.html')
  ]

  'coffee-script':
    bare: true

  stylus:
    use: [axis(), rupture(), autoprefixer()]
