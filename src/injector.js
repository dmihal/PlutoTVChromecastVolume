var script = document.createElement('script');
script.src = chrome.extension.getURL('content.js');
script.onload = function() {
  this.parentNode.removeChild(this);
};

var stylesheet = document.createElement('link');
stylesheet.type = 'text/css';
stylesheet.rel = 'stylesheet';
stylesheet.href = chrome.extension.getURL('ui.css');

var doc = (document.head||document.documentElement);
doc.appendChild(script);
doc.appendChild(stylesheet);
