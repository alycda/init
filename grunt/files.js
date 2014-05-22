// https://github.com/firstandthird/load-grunt-config#grunt-tasks-files

module.exports = function (grunt, options) {
  return {

    sass: [
      '<%= dirs.sass %>*.scss',
      '<%= dirs.sass %>global/*.scss',
      '<%= dirs.sass %>template/*.scss',
      '<%= dirs.sass %>template/layout/*.scss',
      '<%= dirs.sass %>template/partials/*.scss'
    ],

    // sassRequire: ['sass-css-importer'],

    css: ['<%= dirs.css %>*.css'],

    jsConfig: ['<%= dirs.js %>/common.js'],

    js: ['<%= dirs.js %>*.js']

    //modernizr: []
  };
};