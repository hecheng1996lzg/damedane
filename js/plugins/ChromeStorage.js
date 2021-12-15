class ChromeStorage {
  constructor() {
    let _self = this;
    let temp = this.getTemplate();
    this.courseStorage = null;
    chrome.storage.sync.get({courseStorage: temp}, function(items) {
      _self.courseStorage = items['courseStorage'];
    });
  }


  getTemplate() {
    let state = {
      'normal': '普通',
      'selected': '选课',
      'listening': '听课',
    };
    return {
      state: 'normal',
      title: false,
      id: false
    }
  }

  get(key){
  }

  set(obj){
    console.log(this);
    for(let key in obj){
      let value = obj[key];
      this.courseStorage[key] = value;
    }
    chrome.storage.sync.set({courseStorage: this.courseStorage}, function(items) {
    });
  }
}