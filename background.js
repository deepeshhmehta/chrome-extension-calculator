chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('calc.html', {
    'bounds': {
      'width': 180,
      'height': 200
    }
  });
});