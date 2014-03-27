// File name shold be same as project name

define(["jquery", "jquery.alpha", "jquery.beta"], function($) {
    $.each(q,function(i,f){$(f)}); // no jQuery tax, part 2

    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    $(function() {
        $('.content').alpha().beta();
    });
});