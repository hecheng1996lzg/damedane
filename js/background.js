let chromeStorage = new ChromeStorage();
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.cmd) {
    switch (request.cmd) {
      case 'selected_course':
        let obj = {
          state: 'selected',
          title: request.course_title,
          id: request.course_id,
          elapsed_time: request.course_elapsed_time,
          credit: request.course_credit,
          window_id: request.window_id,
        };
        if (request.window_id && request.window_id !== undefined) {
          obj.window_id = request.window_id;
          chromeStorage.course_list_window_id = request.window_id;
        }
        chromeStorage.set(obj);
        break;
      case 'check_state':
        let state = chromeStorage.get('state');
        sendResponse(state);
        break;
      case 'listening_course':
        let title = chromeStorage.get('title');
        if (title === request.course_title) {
          chromeStorage.set({
            state: 'listening',
            total_time: request.course_total_time
          });
          sendResponse(true);
        } else {
          sendResponse(false);
        }
        break;
      case 'end_play':
        chromeStorage.set({
          state: 'played',
        }, () => {
          chrome.tabs.sendMessage(chromeStorage.course_list_window_id, {cmd: 'end_play'});
        });
        break;
      case 'restart_course':
        chromeStorage.init(() => {
          chrome.tabs.sendMessage(chromeStorage.course_list_window_id, {
            cmd: 'start',
            id: chromeStorage.course_list_window_id
          });
        });
        break;
    }
  }
});
