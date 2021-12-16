class ChromeStorage {
  constructor() {
    this.courseStorage = {};
    this.course_list_window_id = null;
    this.init();
  }

  init(fun){
    this.courseStorage = {};
    let temp = this.getTemplate();
    this.set(temp,fun);
  }

  getTemplate() {
    let state = {
      'normal': '普通',
      'selected': '选课',
      'listening': '听课',
      'played': '播放完成',
    };
    return {
      state: 'normal',
      title: false,
      id: false,
      window_id: false,
      elapsed_time: 0,    // 已学时间
      credit: 0,          // 学分
    }
  }

  /***
   * 返回courseStorage其中一项属性
   * @param key
   * @returns {null|*}
   */
  get(key){
    if(key===undefined)return this.courseStorage;
    let _self = this;
    let temp = this.getTemplate();
    chrome.storage.sync.get({courseStorage: temp}, function(items) {
      _self.courseStorage = items['courseStorage'];
    });
    if(key in this.courseStorage){
      return this.courseStorage[key];
    }else{
      return null;
    }
  }

  set(obj,fun){
    let _self = this;
    for(let key in obj){
      this.courseStorage[key] = obj[key];
    }
    chrome.storage.sync.set({courseStorage: this.courseStorage}, fun);
  }
}