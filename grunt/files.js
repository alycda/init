// https://github.com/firstandthird/load-grunt-config#grunt-tasks-files

module.exports = function (grunt, options) {
  return {

    grunt: [
      'Gruntfile.js',
      'grunt/*.js'
    ],

    sass: [
      '<%= dirs.sass %>*.scss',
      '<%= dirs.sass %>global/*.scss',
      '<%= dirs.sass %>template/*.scss',
      '<%= dirs.sass %>template/layout/*.scss',
      '<%= dirs.sass %>template/partials/*.scss'
    ],

    // sassRequire: ['sass-css-importer'],

    css: ['<%= dirs.css %>*.css'],

    // autoprefixr: ['<%= dirs.css %><%= package.name %>.css'] //this is the input/output file

    jsConfig: ['<%= dirs.js %>/common.js'],

    js: ['<%= dirs.js %>*.js'],

    //modernizrIgnore: ['<%= dirs.build %>modernizr-latest.js'],
    modernizr: ['<%= dirs.build %>modernizr-custom.js'] //<%= package.name %>
  };
};