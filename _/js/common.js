requirejs.config({
  baseUrl: "./",
	paths: {
    components: "../components",
		jquery: '../components/jquery/dist/jquery.min'
		//, bootstrap: '...'
	},
  shim: {
    "jquery.alpha": ["jquery"],
    "jquery.beta": ["jquery"]
  }
});