//your code here
let bandNames = ['The Beatles', 'Aerosmith', 'Led Zeppelin', 'The Who', 'The Rolling Stones', 'Pink Floyd'];

// Function to strip articles from band names
function stripArticles(name) {
  return name.replace(/^(a|an|the)\s/i, '');
}

// Sorting the band names in lexicographic order excluding articles
bandNames.sort((a, b) => stripArticles(a) > stripArticles(b) ? 1 : -1);

// Getting the ul element by its ID
let bandList = document.getElementById('band');

// Looping over the sorted band names and adding them as li elements to the ul
for (let i = 0; i < bandNames.length; i++) {
  let listItem = document.createElement('li');
  listItem.innerText = bandNames[i];
  bandList.appendChild(listItem);
}
			