module.exports = {
  dev: {
    options: {
      sassDir: '<%= dirs.sass %>',
      cssDir: '<%= dirs.css %>', // build/
      importPath: '<%= dirs.base %>components/',
      environment: 'development',
      outputStyle: 'compact',
      specify: '<%= dirs.sass %>init.scss', //<%= pkg.name %>
      // require: ['sass-css-importer'],
      trace: true
      //banner: '/*! <%= pkg.name %> (<%= pkg.version %>), built on <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    }
  },

  dist: {
    options: {
      sassDir: '<%= dirs.sass %>',
      cssDir: '<%= dirs.css %>',
      importPath: '<%= dirs.base %>components/',
      environment: 'production',
      outputStyle: 'compressed',
      specify: '<%= dirs.sass %><%= pkg.name %>.scss',
      banner: '/*! <%= pkg.name %> (<%= pkg.version %>), built on <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    }
  }
};