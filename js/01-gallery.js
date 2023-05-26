import { galleryItems } from './gallery-items.js';
// Change code below this line




const galleryList = document.querySelector('.gallery');


galleryItems.forEach(item => {
    galleryList.insertAdjacentHTML('beforeend', `<li class="gallery__item"><a class="gallery__link" href=${item.original}><img class="gallery__image"
//       src=${item.preview}
//       data-source=${item.original}
//       alt=${item.description} /></a></li> `);
});

function openImage(event) {
    event.preventDefault();
   
    if (event.target.nodeName !== "IMG") {
        return;
    }
    
    const imageLink = event.target.getAttribute('data-source');
    console.log(imageLink);

    basicLightbox.create(`
		<img src='${imageLink}'/>
	`).show();
}

galleryList.addEventListener('click', openImage);








