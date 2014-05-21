module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    compass: {
      dev: {
        options: {
          basePath: '_/',
          sassDir: 'sass/',
          cssDir: 'css/',
          importPath: '_/components/',
          environment: 'development',
          outputStyle: 'compact',
          specify: '_/sass/init.scss',
          // require: ['sass-css-importer'],
          trace: true,
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        }
      },

      dist: {
        options: {
          basepath: '_/',
          sassDir: 'sass/',
          cssDir: 'css/',
          importPath: '_/components/',
          environment: 'production',
          outputStyle: 'compressed',
          specify: '_/sass/init.scss',
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        }
      }
    },

    watch: {
      sass: {
        files: [
          '_/sass/*.scss',
          '_/sass/global/*.scss',
          '_/sass/template/*.scss',
          '_/sass/template/layout/*.scss',
          '_/sass/template/partials/*.scss',
        ],
        tasks: ['compass:dev']
      },

      livereload: {
        files: ['_/css/*.css'],
        options: { livereload: true }
      }

    }

  });

  // Load the plugins.
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};