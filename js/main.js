$( document ).ready(function() {
    var feed = new Instafeed({
        get: 'tagged',
        tagName: 'hellomreza',
        resolution: 'low_resolution',
        template: '<div class="col-sm-6 col-md-4"><div class="thumbnail"><a href="{{link}}"><img src="{{image}}" /></a><div class="caption"><p><a href="https://instagram.com/{{model.user.username}}/">{{model.user.username}}</a></p></div></div></div>',
        clientId: '43330511fd4b4dbf839cfaf10c73c2c5'
    });
    feed.run();
}); 


(function ($) {
    "use strict";
    var mainApp = {

        main_fun: function () {

            //ADD REMOVE PADDING CLASS ON SCROLL
            $(window).scroll(function () {
                if ($(".navbar").offset().top >50) {
                    $(".navbar-fixed-top").addClass("navbar-pad-original");
                } else {
                    $(".navbar-fixed-top").removeClass("navbar-pad-original");
                }
            });
        },

        initialization: function () {
            mainApp.main_fun();

        }
    }

    $(document).ready(function () {
        mainApp.main_fun();
    });

}(jQuery));



