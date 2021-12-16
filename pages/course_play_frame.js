let config = {

};

window.addEventListener("message", function (e) {
  if ('cmd' in e.data) {
    switch (e.data.cmd) {
      case 'end_play':
        chrome.runtime.sendMessage({cmd: 'end_play'}, function (response) {
          window.close();
        });
        break
    }
  }
}, false);
