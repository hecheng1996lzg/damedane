$('#start').click(() => {
  getCurrentTabId((id) => {
    sendMessageToContentScript({
      cmd: 'start',
      data: {
        id
      }
    });
  })
});