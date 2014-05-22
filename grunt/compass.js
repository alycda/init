// https://github.com/firstandthird/load-grunt-config
// https://github.com/gruntjs/grunt-contrib-compass#options

module.exports = {
  dev: {
    options: {
      sassDir: '<%= dirs.sass %>',
      cssDir: '<%= dirs.css %>', // build?
      importPath: '<%= dirs.components %>',
      environment: 'development',
      outputStyle: 'compact',
      // require: ['<%= files.sassRequire %>'],
      trace: true
    }
  },

  prod: {
    options: {
      sassDir: '<%= dirs.sass %>',
      cssDir: '<%= dirs.css %>',
      importPath: '<%= dirs.components %>',
      environment: 'production',
      outputStyle: 'compressed',
      specify: '<%= dirs.sass %><%= package.name %>.scss',
      banner: '/*! <%= package.name %> (<%= package.version %>), built on <%= grunt.template.today("yyyy-mm-dd") %> */\n' //only works when specify option is used
    }
  }
};