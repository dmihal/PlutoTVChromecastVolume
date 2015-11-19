var ALL_ELEMENTS = {
  'pluto.tv': [
    makeScript('content.js'),
    makeStyleSheet('ui.css')
  ],
  'www.youtube.com': [
    makeScript('player.js')
  ]
};

// Inject elements
var doc = (document.head||document.documentElement);
var elements = ALL_ELEMENTS[location.host];
for (var i = 0; i < elements.length; i++) {
  doc.appendChild(elements[i])
};


function makeScript(filename){
  var script = document.createElement('script');
  script.src = chrome.extension.getURL(filename);
  script.onload = function() {
    this.parentNode.removeChild(this);
  };
  return script;
}

function makeStyleSheet(filename){
  var stylesheet = document.createElement('link');
  stylesheet.type = 'text/css';
  stylesheet.rel = 'stylesheet';
  stylesheet.href = chrome.extension.getURL(filename);
  return stylesheet;
}
