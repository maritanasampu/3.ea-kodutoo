window.onload = function () {
  document.getElementById('addBtn').addEventListener('click', addURLstorage)
  showAllURLs()
  // document.getElementById('removeBtn').addEventListener('click', removeURLstorage)
}

function addURLstorage () {
  let newUrl = document.getElementById('url').value
  saveURL(newUrl)
}
//
// function removeURLstorage () {
//   let newUrl = document.getElementById('removeURL').value
//   deleteUrl(newUrl)
// }

function saveURL (url) {
  let arr = []

  if (window.localStorage.length === 0) {
    arr.push(url)
    localStorage.setItem('arr', JSON.stringify(arr))
  } else {
    let stored = JSON.parse(localStorage.getItem('arr'))
    stored.push(url)
    localStorage.setItem('arr', JSON.stringify(stored))
  }
  showAllURLs()
}


//
// function deleteUrl (newUrl) {
//   let stored = JSON.parse(localStorage.getItem('arr'))
//   i = 0
//
//   if (document.getElementById('removeRadio1').checked == true) {
//     for (i=0; i<stored.length; i++) {
//       if (stored[i].tabs1 === newUrl) {
//         stored.splice(i, 1)
//         localStorage.setItem('arr',JSON.stringify(stored))
//         stored = JSON.parse(localStorage.getItem('arr'))
//         i = -1
//       }
//     }
//   } else {
//     for (i=0; i<stored.length; i++) {
//       if (stored[i].tabs2 === newUrl) {
//         stored.splice(i, 1)
//         localStorage.setItem('arr',JSON.stringify(stored))
//         stored = JSON.parse(localStorage.getItem('arr'))
//         i = -1
//       }
//     }
//   }
//
//   document.getElementById('removeURL').value = ''
//   showAllURLs()
// }

function showAllURLs () {
  const results = document.getElementById('kSites');
  let stored = JSON.parse(localStorage.getItem('arr'))

  results.innerHTML = ''

  if (stored !== null) {
    for (let i=0; i<stored.length; i++) {
      results.innerHTML += "<li>"+stored[i]+"</li>"
    }
  }
}
