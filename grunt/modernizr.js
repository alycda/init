// https://github.com/firstandthird/load-grunt-config
// https://github.com/Modernizr/grunt-modernizr#config-options

module.exports = {
  dist: {
    // [REQUIRED] Path to the build you're using for development.
    "devFile" : "<%= dirs.build %>modernizr-latest.js",

    // [REQUIRED] Path to save out the built file.
    "outputFile" : "<%= dirs.build %>modernizr-custom.js", //<%= package.name %>

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
};