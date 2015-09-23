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
  div.style.cssText = "position: absolute; width: 100px; top: -40px; color: white; border: 1px solid #333; padding: 0 7px; background: black;";
  div.innerHTML = '<div class="progress"><div class="seekbar"></div><div class="episode-progress" style="width: 61%;"></div></div>';
  document.querySelector('li.control.mute').appendChild(div);
  div.addEventListener('mousedown', sliderListener);
  div.addEventListener('click', sliderListener);
};
var sliderListener = function(e){
  e.stopPropagation();
  var pBar = e.currentTarget.querySelector('.progress');
  var x = e.x - $(pBar).offset().left;
  var percent = Math.min(Math.max(x / pBar.offsetWidth, 0), 1);
  percent = Math.round(percent * 20) / 20; // Round to 0.05
  console.log("Set Volume:", percent);
  window.setVolume && setVolume(percent);
};
