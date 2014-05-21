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

    },

    modernizr: {
      dist: {
        // [REQUIRED] Path to the build you're using for development.
        "devFile" : "<%= dirs.build %>modernizr-latest.js",

        // [REQUIRED] Path to save out the built file.
        "outputFile" : "<%= dirs.build %>modernizr-custom.js",

        // Based on default settings on http://modernizr.com/download/
        "extra" : {
            "shiv" : false,
            "printshiv" : false,
            "load" : false,
            "mq" : false,
            "cssclasses" : true
        },

        // Based on default settings on http://modernizr.com/download/
        "extensibility" : {
            "addtest" : false,
            "prefixed" : false,
            "teststyles" : false,
            "testprops" : false,
            "testallprops" : false,
            "hasevents" : false,
            "prefixes" : false,
            "domprefixes" : false
        },

        // By default, source is uglified before saving
        "uglify" : false,

        // Define any tests you want to implicitly include.
        "tests" : [],

        // By default, this task will crawl your project for references to Modernizr tests.
        // Set to false to disable.
        "parseFiles" : true,

        // When parseFiles = true, this task will crawl all *.js, *.css, *.scss files, except files that are in node_modules/.
        // You can override this by defining a "files" array below.
        // "files" : {
        //     "src": []
        // },

        // When parseFiles = true, matchCommunityTests = true will attempt to
        // match user-contributed tests.
        "matchCommunityTests" : false,

        // Have custom Modernizr tests? Add paths to their location here.
        "customTests" : []
      }
    }

  });

  // load all grunt tasks matching the `grunt-*` pattern
  require('load-grunt-tasks')(grunt);

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};