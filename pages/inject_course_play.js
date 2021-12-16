/*
detectPlay();
function detectPlay() {
  document.addEventListener('DOMContentLoaded', function (event) {
    console.log(window.frames["course"].document.getElementById("currentTimeLabel"));

    // 3秒检测一次时间变化，没有动就暂停再播放一次
    console.log($('#currentTimeLabel'), $('#totalTimeLabel'));
    let prevTime = $('#currentTimeLabel').html();
    let totalTime = $('#totalTimeLabel').html();
    window.setInterval(() => {
      console.log($(".currentTimeLabel"))
      let currentTime = $('#currentTimeLabel').html();
      if (prevTime === currentTime && currentTime !== totalTime) {
        $('#toPause').click();
        window.setTimeout(() => {
          $('#toPlay').click();
        }, 600);
      }
    }, 3000);
  });
}
*/
