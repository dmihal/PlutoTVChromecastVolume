require(['main'], function(){
  require(['services/chromecast'], function(chromecast_promise){
    chromecast_promise.then(function(chromecast){
      window.setVolume = function(level){
        if (chromecast.map.isReceiverAvailable){
          chromecast.map.session.setReceiverVolumeLevel(level, function(){console.log('success')}, function(){console.log('fail')});
        }
      };
    });
  });
});
