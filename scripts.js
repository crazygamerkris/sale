document.addEventListener('DOMContentLoaded', () => {
    const paintings = [
       
    ];

    const gallery = document.getElementById('gallery');

    paintings.forEach(painting => {
        const paintingElement = document.createElement('a');
        paintingElement.classList.add('painting');
        paintingElement.href = painting.detailsPage;

        paintingElement.innerHTML = `
            <img src="${painting.imageUrl}" alt="${painting.title}">
            <div class="painting-details">
                <h2>${painting.title}</h2>
                <p>Description: ${painting.description}</p>
                <p>Price: ${painting.price}</p>
            </div>
        `;

        gallery.appendChild(paintingElement);
    });
});
