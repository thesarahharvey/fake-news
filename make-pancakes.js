var nodes = document.querySelectorAll('p, h1, h2, h3, h4, a, li')

for (var i = 0; i < nodes.length; i++) {
  if (nodes[i].innerText.includes('housing')) {
    console.log(nodes[i].innerText);
    nodes[i].innerText = nodes[i].innerText.replace('housing', 'pancakes');
  }
}

var nodes = document.querySelectorAll('p, h1, h2, h3, h4, a, li')

for (var i = 0; i < nodes.length; i++) {
  if (nodes[i].innerText.includes('Housing advocates')) {
    console.log(nodes[i].innerText);
    nodes[i].innerText = nodes[i].innerText.replace('Housing advocates', 'Pancake lovers');
  }
}

var nodes = document.querySelectorAll('p, h1, h2, h3, h4, a, li')

for (var i = 0; i < nodes.length; i++) {
//console.log('i = ', nodes[i].innerText);
  if (nodes[i].innerText.includes('homes')) {
    console.log(nodes[i].innerText);
    nodes[i].innerText = nodes[i].innerText.replace('homes', 'pancakes');
  }
}
document.querySelector("h1").style.color = "#9a4a34"
"#9a4a34"

function addJquery() {
    var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.3.1.min.js';

    document.body.appendChild(script);
}

function fakeNews(cfg) {
var cfg = cfg || {};
var colorTag = (cfg.colorTag === undefined) ? 'a' : cfg.colorTag;
    var color = (cfg.color === undefined) ? 'pink' : cfg.color;
var elems = document.querySelectorAll('p, h1, h2, h3, h4, li, a');
var wordMatches = [];
var matchWord = prompt('What word would you like to replace?');
if (matchWord.length === 0) {
        alert('You must enter a word to replace');
        console.error('Please rerun program');
        return;
    }
var replaceWord = prompt('What would you like to replace it with?');
if (replaceWord.length === 0 || replaceWord === matchWord) {
        alert('You must enter a word to replace with and it cannot be the same as your previous answer');
        console.error('Please rerun program');
        return;
    }
for (var i = 0; i < elems.length; i++) {
var text = elems[i].innerText;

if (text.toLowerCase().includes(matchWord.toLowerCase())) {
console.log(text, elems[i].innerText.replace(matchWord, replaceWord));
            // add ("push") an item to our array: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
            wordMatches.push(elems[i]);
            // replace one piece of text with another: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
            elems[i].innerText = elems[i].innerText.toLowerCase().replace(matchWord.toLowerCase(), replaceWord);
        }
    }


    //$(colorTag).css({color: color});
}
undefined
addJquery();
undefined
fakeNews({
    color: '#9a4a34'
});
