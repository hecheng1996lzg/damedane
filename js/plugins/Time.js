/***
 * xx:xx:xx转秒数
 * @param str
 * @returns {number}
 */
function formatToSec(str){
  let time = str.split(':');
  let sec = 0;
  sec += parseInt(time[0]*60*60);
  sec += parseInt(time[1]*60);
  sec += parseInt(time[2]);
  return sec;
}