(function(exports) {
    'use strict';
    //initialize the app
    var settings = {
        Model: JSONMediaModel,
        PlayerView: PlayerView,
        PlaylistView: PlaylistPlayerView,
        dataURL: "https://glex.nathanvangheem.com/@firetv?token=foobar",
        showSearch: true,
        displayButtons:false,
        skipLength: 10,
        controlsHideTime: 3000,
        networkTimeout: 20,
        retryTimes: 3
    };

    exports.app = new App(settings);
}(window));
