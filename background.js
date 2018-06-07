'use strict'

chrome.runtime.onInstalled.addListener(function() {
  if (kSites) {
    // Create context menu from kSites Object (from urls.js)
    for (let key of Object.keys(kSites)) {
      if (key !== "") {
        chrome.contextMenus.create({
          id: kSites[key],
          title: key,
          type: 'normal',
          contexts: ['selection']
        });
      }
    }

    // Save kSites Object to Chrome extension storage API
    chrome.storage.sync.set({'kSites': kSites}, function() {
      console.log('initial sites list saved to storage');
      addStorageListener();
    });
  }
})

chrome.contextMenus.onClicked.addListener(function (item, tab) {
  // console.log(item)
  // console.log(item.menuItemId)
  // console.log(item.selectionText)
  let url = item.menuItemId + item.selectionText;
  chrome.tabs.create({url: url, index: tab.index + 1});
})


function addStorageListener() {
  let key;
  chrome.storage.onChanged.addListener(function(changes) {
    // console.log(changes)
    let oldValue = changes.kSites.oldValue;
    let newValue = changes.kSites.newValue;

    for (let key of Object.keys(newValue)) {
      if (key !== "" && !oldValue[key]) {
        chrome.contextMenus.create({
          id: newValue[key],
          title: key,
          type: 'normal',
          contexts: ['selection']
        });
      }
    }

  });
}

