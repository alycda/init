// https://github.com/firstandthird/load-grunt-config

module.exports = {
  base: '_/',
  components: '<%= dirs.base %>components/', // bower installed
  sass: '<%= dirs.base %>sass/',
  css: '<%= dirs.base %>css/',
  js: '<%= dirs.base %>js/',
  build: '<%= dirs.base %>build/'
};