module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Templates!
    dirs: {
      base: '_/',
      sass: '<%= dirs.base %>sass/',
      js: '<%= dirs.base %>js/'
    },

    compass: {
      dev: {
        options: {
          basePath: '<%= dirs.base %>',
          sassDir: 'sass/',
          cssDir: 'css/',
          importPath: '_/components/',
          environment: 'development',
          outputStyle: 'compact',
          specify: '<%= dirs.sass %><%= pkg.name %>.scss',
          // require: ['sass-css-importer'],
          trace: true,
          banner: '/*! <%= pkg.name %> (<%= pkg.version %>), built on <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        }
      },

      dist: {
        options: {
          basepath: '<%= dirs.base %>',
          sassDir: 'sass/',
          cssDir: 'css/',
          importPath: '_/components/',
          environment: 'production',
          outputStyle: 'compressed',
          specify: '<%= dirs.sass %><%= pkg.name %>.scss',
          banner: '/*! <%= pkg.name %> (<%= pkg.version %>), built on <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        }
      }
    },

    requirejs: {
      compile: {
        options: {
          mainConfigFile: '<%= dirs.js %>/common.js',
          appDir: '<%= dirs.js %>',
          dir: '_/build',
          // keepBuildDir: true,
          modules: [
            {
              name: '<%= pkg.name %>',
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
          '<%= dirs.sass %>*.scss',
          '<%= dirs.sass %>global/*.scss',
          '<%= dirs.sass %>template/*.scss',
          '<%= dirs.sass %>template/layout/*.scss',
          '<%= dirs.sass %>template/partials/*.scss',
        ],
        tasks: ['compass:dev']
      },

      js: {
        files: ['<%= dirs.js %>/*.js'],
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