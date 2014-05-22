// https://github.com/firstandthird/load-grunt-config
// https://github.com/gruntjs/grunt-contrib-compass#options

module.exports = {
  dev: {
    options: {
      sassDir: '<%= dirs.sass %>',
      cssDir: '<%= dirs.css %>', // build/
      importPath: '<%= dirs.base %>components/',
      environment: 'development',
      outputStyle: 'compact',
      // specify: '<%= dirs.sass %><%= package.name %>.scss',
      // require: ['sass-css-importer'],
      trace: true,
      // banner: '/*! <%= package.name %> (<%= package.version %>), built on <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    }
  },

  prod: {
    options: {
      sassDir: '<%= dirs.sass %>',
      cssDir: '<%= dirs.css %>',
      importPath: '<%= dirs.base %>components/',
      environment: 'production',
      outputStyle: 'compressed',
      specify: '<%= dirs.sass %><%= package.name %>.scss',
      banner: '/*! <%= package.name %> (<%= package.version %>), built on <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    }
  }
};