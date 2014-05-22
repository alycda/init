// https://github.com/firstandthird/load-grunt-config
// https://github.com/gruntjs/grunt-contrib-watch

module.exports = {
  sass: {
    files: ['<%= files.sass %>'],
    tasks: ['compass:dev', 'autoprefixer:no_dest'] // newer:
  },

  js: {
    files: ['<%= files.js %>'],
    tasks: ['requirejs'] // newer:
  },

  livereload: {
    files: ['<%= files.css %>'],
    options: { livereload: true }
  },

  grunt: {
    files: ['<%= files.grunt %>'],
    options: { reload: true }
  }
};