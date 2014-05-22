module.exports = {
  sass: {
    files: [
      '<%= dirs.sass %>*.scss',
      '<%= dirs.sass %>global/*.scss',
      '<%= dirs.sass %>template/*.scss',
      '<%= dirs.sass %>template/layout/*.scss',
      '<%= dirs.sass %>template/partials/*.scss',
    ],
    tasks: ['newer:compass:dev', 'newer:autoprefixer:no_dest']
  },

  js: {
    files: ['<%= dirs.js %>*.js'],
    tasks: ['newer:requirejs']
  },

  livereload: {
    files: ['<%= dirs.css %>*.css'],
    options: { livereload: true }
  }
};