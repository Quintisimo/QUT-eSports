axis         = require 'axis'
rupture      = require 'rupture'
autoprefixer = require 'autoprefixer-stylus'
js_pipeline  = require 'js-pipeline'
css_pipeline = require 'css-pipeline'
contentful   = require 'roots-contentful'
marked       = require 'marked'
sitemap      = require 'webriq-roots-sitemap-v2'

module.exports =
  ignores: ['README.md', '**/_*', '.gitignore', 'ship.*conf']

  extensions: [
    js_pipeline(files: 'assets/js/*.coffee', out: 'js/build.js', minify: true, hash: true),
    css_pipeline(files: 'assets/css/*.styl', out: 'css/build.css', minify: true, hash: true),
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
    ),
    sitemap(url: 'https://qutesports.com', folder: 'public', file: '**/*.html')
  ]

  locals:
    markdown: marked

  'coffee-script':
    bare: true

  stylus:
    use: [axis(), rupture(), autoprefixer()]
