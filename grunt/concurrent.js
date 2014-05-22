// https://github.com/firstandthird/load-grunt-config
// https://github.com/sindresorhus/grunt-concurrent#example-config

module.exports = {
  first: ['compass:prod', 'requirejs'],
  second: ['autoprefixer:no_dest', 'modernizr']
}