$( document ).ready(function() {
    var feed = new Instafeed({
        get: 'tagged',
        tagName: 'hellomreza',
        resolution: 'low_resolution',
        template: '<div class="col-sm-6 col-md-4"><div class="thumbnail"><a href="{{link}}"><img src="{{image}}" /></a><div class="caption"><p>+{{likes}}</p></div></div></div>',
        clientId: '43330511fd4b4dbf839cfaf10c73c2c5'
    });
    feed.run();
}); 