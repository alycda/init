// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
// except 'app' ones,
requirejs.config({
    "baseUrl": "_/js/inc",
    "paths": {
      "components": "../../components",
      "jquery": [
        "//code.jquery.com/jquery-latest.min",
        // If the CDN fails, load from this location
        "../../components/jquery/dist/jquery.min"
      ]
    },
    "shim": {
        "jquery.alpha": ["jquery"],
        "jquery.beta": ["jquery"]
    }
});

// Load the main app module to start the app
requirejs(["init"]);