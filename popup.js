function showAllURLs () {
  let results = document.getElementById('kSites');
  let stored = JSON.parse(localStorage.getItem('arr'))
  results.innerHTML = ''
  if (stored !== null) {
    for (let i=0; i<stored.length; i++) {
      results.innerHTML += "<li>"+stored[i]+"</li>"
    }
  }
}

showAllURLs()


// function createForm() {
//   chrome.storage.sync.get(['removedContextMenu'], function(list) {
//     let removed = list.removedContextMenu || [];
//     let form = document.getElementById('form');
//     for (let key of Object.keys(kLocales)) {
//       let div = document.createElement('div');
//       let checkbox = document.createElement('input');
//       checkbox.type = 'checkbox';
//       checkbox.checked = true;
//       if (removed.includes(key)) {
//         checkbox.checked = false;
//       }
//       checkbox.name = key;
//       checkbox.value = kLocales[key];
//       let span = document.createElement('span');
//       span.textContent = kLocales[key];
//       div.appendChild(checkbox);
//       div.appendChild(span);
//       form.appendChild(div);
//     }
//   });
// }
//
// createForm();

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('options').addEventListener('click', function () {
    window.open('options.html')
  })
})