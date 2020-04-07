const form = document.querySelector('#meme-form');
const topTextInput = document.querySelector('input[name ="top-input"]');
const bottomTextInput = document.querySelector('input[name ="bottom-input"]');
const imageTextInput = document.querySelector('input[name ="url-input"]');
const body = document.querySelector('body');


form.addEventListener('submit', function (e) {
  e.preventDefault();
  const newMeme = makeMeme(topTextInput.value, bottomTextInput.value, imageTextInput.value);
  document.body.appendChild(newMeme);
  topTextInput.value = '';
  bottomTextInput.value = '';
  imageTextInput.value = '';
});

function makeMeme(top, bottom, url) {
  const topTextDiv = document.createElement('div');
  const bottomTextDiv = document.createElement('div');
  const divMeme = document.createElement('div');
  const divTrash = document.createElement('div');
  const anchorTrash = document.createElement('a');
  const trashIcon = document.createElement('i');
  const img = new Image(300, 300);
  const topText = document.createTextNode(top);
  const bottomText = document.createTextNode(bottom);

  topTextDiv.classList.add("top-text");
  bottomTextDiv.classList.add("bottom-text");
  divMeme.classList.add("container");
  divMeme.setAttribute('id', 'contain');
  divTrash.classList.add("edit");
  anchorTrash.setAttribute('href', '#');
  anchorTrash.setAttribute('id', 'anchor');
  trashIcon.classList.add("fa");
  trashIcon.classList.add("fa-trash");
  img.classList.add("img");
  img.src = url;

  divMeme.appendChild(img);
  divMeme.appendChild(divTrash);
  divTrash.appendChild(anchorTrash);
  anchorTrash.appendChild(trashIcon);
  topTextDiv.appendChild(topText);
  bottomTextDiv.appendChild(bottomText);
  divMeme.appendChild(topTextDiv);
  divMeme.appendChild(bottomTextDiv);
  return divMeme;

}


body.addEventListener('click', function (e) {
  if (e.target.tagName === 'I') {
    let childI = e.target.parentElement;
    let dad = childI.parentElement;
    dad.parentElement.remove();
  }
});
