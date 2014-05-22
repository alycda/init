module.exports = {
  sass: {
    files: [
      '<%= dirs.sass %>*.scss',
      '<%= dirs.sass %>global/*.scss',
      '<%= dirs.sass %>template/*.scss',
      '<%= dirs.sass %>template/layout/*.scss',
      '<%= dirs.sass %>template/partials/*.scss',
    ],
    tasks: ['compass:dev', 'autoprefixer:no_dest']
  },

  js: {
    files: ['<%= dirs.js %>*.js'],
    tasks: ['requirejs']
  },

  livereload: {
    files: ['<%= dirs.css %>*.css'],
    options: { livereload: true }
  }
};