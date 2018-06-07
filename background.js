'use strict';
// Add a listener to create the initial context menu items,
// context menu items only need to be created at runtime.onInstalled
chrome.runtime.onInstalled.addListener(function() {
  let stored = JSON.parse(localStorage.getItem('arr'))
  console.log(stored)
  if (stored !== null) {
    for (let i=0; i<stored.length; i++) {
      let name = "element"+i
      chrome.contextMenus.create({
        id: stored[i],
        title: stored[i],
        type: 'normal',
        contexts: ['selection']
      });
    }
  }



  // for (let key of Object.keys(kSites)) {
  //   chrome.contextMenus.create({
  //     id: key,
  //     title: kSites[key],
  //     type: 'normal',
  //     contexts: ['selection']
  //   });
  // }
});

chrome.contextMenus.onClicked.addListener(function (item, tab) {
  console.log(item)
  console.log(item.menuItemId)
  console.log(item.selectionText)
  let url = item.menuItemId + item.selectionText;
  chrome.tabs.create({url: url, index: tab.index + 1});
});
