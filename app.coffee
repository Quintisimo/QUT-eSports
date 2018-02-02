axis         = require 'axis'
rupture      = require 'rupture'
autoprefixer = require 'autoprefixer-stylus'
js_pipeline  = require 'js-pipeline'
css_pipeline = require 'css-pipeline'
contentful   = require 'roots-contentful'
marked       = require 'marked'

module.exports =
  ignores: ['README.md', '**/_*', '.gitignore', 'ship.*conf']

  extensions: [
    js_pipeline(files: 'assets/js/*.coffee'),
    css_pipeline(files: 'assets/css/*.styl'),
    contentful(
      access_token: '3c50469956220004800ddf7e0d54f0ccb54660194c28501cb1bbc5ac5a043b12',
      space_id: '2zktrm0vi1yp'
      content_types:
        sitedefaults:
          id: 'sitedefaults',
        games:
          id: 'games',
          filters: {
            'order': 'sys.createdAt'
          }
    )
  ]

  locals:
    markdown: marked

  stylus:
    use: [axis(), rupture(), autoprefixer()]
    sourcemap: true

  'coffee-script':
    sourcemap: true
    bare: true

  pug:
    pretty: true
