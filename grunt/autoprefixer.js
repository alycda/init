// https://github.com/firstandthird/load-grunt-config
// https://github.com/nDmitry/grunt-autoprefixer#usage-examples

module.exports = {
  options: {
    // Task-specific options go here.
    // browsers: ['last 2 version']
  },
  no_dest: {
    // Target-specific file lists and/or options go here.
    src: '<%= dirs.css %><%= package.name %>.css' // build?
  }
};