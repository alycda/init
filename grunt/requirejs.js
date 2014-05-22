// https://github.com/firstandthird/load-grunt-config
// https://github.com/gruntjs/grunt-contrib-requirejs#usage-examples

module.exports = {
  compile: {
    options: {
      mainConfigFile: '<%= files.jsConfig %>',
      appDir: '<%= dirs.js %>',
      dir: '<%= dirs.build %>',
      keepBuildDir: true,
      modules: [
        {
          name: '<%= package.name %>',
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
};