$('#start').click(() => {
    getCurrentTabId((id) => {
        console.log(id)
        sendMessageToContentScript({
            cmd: 'start',
            data: {
                id
            }
        });
    })
});
