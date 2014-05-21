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

    requirejs: {
      compile: {
        options: {
          mainConfigFile: '_/js/common.js',
          appDir: '_/js',
          dir: '_/build',
          // keepBuildDir: true,
          modules: [
            {
              name: 'init',
              include: ['jquery']
              // exclude: [jquery.alpha]
            }
          ]
          // done: function(done, output) {
          //   var duplicates = require('rjs-build-analysis').duplicates(output);

          //   if (duplicates.length > 0) {
          //     grunt.log.subhead('Duplicates found in requirejs build:');
          //     grunt.log.warn(duplicates);
          //     done(new Error('r.js built duplicate modules, please check the excludes option.'));
          //   }

          //   done();
          // }
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

      js: {
        files: ['_/js/*.js'],
        tasks: ['requirejs']
      },

      livereload: {
        files: ['_/css/*.css'],
        options: { livereload: true }
      }

    }

  });

  // Load the plugins.
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};