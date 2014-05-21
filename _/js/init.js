define(["jquery", "inc/jquery.alpha", "inc/jquery.beta"], function($) {
    $.each(q,function(i,f){$(f)}); // no jQuery tax, part 2

    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    $(function() {
        $('body').alpha().beta();
    });
});
