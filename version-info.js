var LVinfo = '';
var CVinfo = '';
var LVinfoURL = 'https://raw.githubusercontent.com/Gamerboss3094/QAG77/main/version-info.json';
var CVinfoURL = './version-info.json';
var LV = '';
var CV = '';
var getLV = new XMLHttpRequest();
getLV.open('GET', LVinfoURL, true);
getLV.responseType = 'json';
getLV.onload = function() {
  if(this.status === 200) {
    LVinfo = this.response;
  }
};
var getCV = new XMLHttpRequest();
getCV.open('GET', CVinfoURL, true);
getCV.responseType = 'json';
getCV.onload = function() {
  if(this.status === 200) {
    CVinfo = this.response;
  }
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function updateAvailable() {
  if(LV.major > CV.major) {
    return true;
  } else {
    if(LV.minor > CV.minor) {
      return true;
    } else {
      if(LV.patch > CV.patch) {
        return true;
      } else {
        return false;
      }
    }
  }
}

async function script() {
  if(navigator.onLine === false) {
    while(navigator.onLine === false) {
      await sleep(1000);
    }
  }
  getLV.send();
  getCV.send();
  while(LVinfo === '' || CVinfo === '') {
    await sleep(5);
  }
  LV = LVinfo.version[0];
  CV = CVinfo.version[0];
  if(updateAvailable()) {
    swal({
      title: 'Update Available!',
      text: 'Newest Version: ' + LV.full + '\n Current Version: ' + CV.full,
      icon: 'warning',
      buttons: {
        cancel: 'Close',
        update: {
          text: 'Update',
          value: 'update'
        }
      }
    }).then((value) => {
      if(value === 'update') {
        location.href = 
      }
    });
  }
}

script();
