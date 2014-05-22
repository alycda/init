// https://github.com/firstandthird/load-grunt-config#aliases

module.exports = {
  default: ['watch'],
  build: ['concurrent:first', 'concurrent:second'],
  test: []
}