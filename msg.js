const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const msg = urlParams.get('msg');

element = document.getElementById('typewriter')
var lines = msg.split('\n')

for(var i=0; i< lines.length; i++){
    var p = document.createElement('p')
    p.textContent = lines[i]
    element.appendChild(p)
    br = document.createElement('br')
    element.appendChild(br)
}

