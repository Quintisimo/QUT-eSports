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
    js_pipeline(files: 'assets/js/*.coffee'),
    css_pipeline(files: 'assets/css/*.styl'),
    yaml(source: 'data'),
    sitemap(url: 'https://qutesports.com', folder: 'public', file: '**/*.html')
  ]

  stylus:
    use: [axis(), rupture(), autoprefixer()]
    sourcemap: true

  'coffee-script':
    sourcemap: true
    bare: true

  pug:
    pretty: true
