import { galleryItems } from './gallery-items.js';
// Change code below this line




const galleryList = document.querySelector('.gallery');


// galleryItems.forEach(item => {
//     galleryList.insertAdjacentHTML('beforeend', `<li class="gallery__item"><a class="gallery__link" href=${item.original}><img class="gallery__image"
// //       src=${item.preview}
// //       data-source=${item.original}
// //       alt=${item.description} /></a></li> `);
// });

const gallaryListItems = galleryItems.map((item) => `<li class="gallery__item"><a class="gallery__link" href=${item.original}><img class="gallery__image" src=${item.preview} data-source=${item.original} alt=${item.description} /></a></li> `).join("");



galleryList.insertAdjacentHTML('beforeend', gallaryListItems);

function openImage(event) {
    event.preventDefault();
   
    if (event.target.nodeName !== "IMG") {
        return;
    }
    
    const imageLink = event.target.getAttribute('data-source');
    console.log(imageLink);

    const instance = basicLightbox.create(`
		<img src='${imageLink}' width='800' height='600'/>
	`);
    instance.show();

    document.addEventListener("keydown", event => {
        if (event.code !== "Escape") {
            return;
        }
        instance.close();
    });
}

galleryList.addEventListener('click', openImage);







