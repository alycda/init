module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Templates!
    dirs: {
      base: '_/',
      sass: '<%= dirs.base %>sass/',
      css: '<%= dirs.base %>css/',
      js: '<%= dirs.base %>js/',
      build: '<%= dirs.base %>build/'
    },

    compass: {
      dev: {
        options: {
          sassDir: '<%= dirs.sass %>',
          cssDir: '<%= dirs.css %>', // build/
          importPath: '<%= dirs.base %>components/',
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
          sassDir: '<%= dirs.sass %>',
          cssDir: '<%= dirs.css %>',
          importPath: '<%= dirs.base %>components/',
          environment: 'production',
          outputStyle: 'compressed',
          specify: '<%= dirs.sass %><%= pkg.name %>.scss',
          banner: '/*! <%= pkg.name %> (<%= pkg.version %>), built on <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        }
      }
    },

    autoprefixer: {
      options: {
        // Task-specific options go here.
      },
      no_dest: {
        // Target-specific file lists and/or options go here.
        src: '<%= dirs.css %><%= pkg.name %>.css'
      }
    },

    requirejs: {
      compile: {
        options: {
          mainConfigFile: '<%= dirs.js %>/common.js',
          appDir: '<%= dirs.js %>',
          dir: '<%= dirs.build %>',
          keepBuildDir: true,
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

    }

  });

  // load all grunt tasks matching the `grunt-*` pattern
  require('load-grunt-tasks')(grunt);

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};