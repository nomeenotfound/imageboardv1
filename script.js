const form = document.querySelector('form');
const imagesContainer = document.querySelector('#imagesContainer');

form.addEventListener('submit', event => {
  event.preventDefault();

  const imageInput = document.querySelector('#imageInput');
  const image = imageInput.files[0];

  const imageElement = document.createElement('div');
  imageElement.classList.add('image');

  const imageTag = document.createElement('img');
  imageTag.src = URL.createObjectURL(image);
  imageElement.appendChild(imageTag);

  imagesContainer.appendChild(imageElement);
});
