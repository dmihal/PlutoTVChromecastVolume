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
var attachSlider = function(){
  var div = document.createElement('div');
  div.style.cssText = "position: absolute; width: 100px; top: -50px; color: white; border: 1px solid #333; padding: 0 7px;";
  div.innerHTML = '<div class="progress"><div class="seekbar"></div><div class="episode-progress" style="width: 61%;"></div></div>';
  document.querySelector('li.control.mute').appendChild(div);
};
