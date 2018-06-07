let currentSitesList;

window.onload = function () {
  document.getElementById('addBtn').addEventListener('click', addURLstorage)
  showAllURLs()
}

function addURLstorage () {
  let name = document.getElementById('name').value
  let url = document.getElementById('url').value
  let newValue = { name: url };

  if (name !== "" && url !== "") {
    currentSitesList[name] = url;

    chrome.storage.sync.set({'kSites': currentSitesList}, function() {
      console.log('currentSitesList saved to storage');
    });
  }
}

function showAllURLs () {
  const results = document.getElementById('kSites');

  chrome.storage.sync.get(['kSites'], function(list) {
    currentSitesList = list.kSites;

    if (currentSitesList !== null) {
      results.innerHTML = ''


      for (let key of Object.keys(currentSitesList)) {
        // console.log('key: ', key);
        // console.log('value: ', list[key]);

        results.innerHTML += "<li><strong>"+key+"</strong><div>"+currentSitesList[key]+"</div></li>"
      }
    }
  });
}
