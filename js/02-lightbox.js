import { galleryItems } from './gallery-items.js';
// Change code below this line



const galleryList = document.querySelector('.gallery');

const gallaryListItems = galleryItems.map((item) => `<li class="gallery__item"><a class="gallery__link" href=${item.original}><img class="gallery__image" src=${item.preview} alt=${item.description} /></a></li> `).join("");

galleryList.insertAdjacentHTML('beforeend', gallaryListItems);

const lightbox = new SimpleLightbox('.gallery a', {
  caption: true,
  captionsData: 'alt',
  captionDelay: 250,
});