document.addEventListener('DOMContentLoaded', () => {
    const paintings = [
        {
            title: 'Flower',
            price: '1 OMR',
            description: 'Hi',
            imageUrl: 'm/k.png',
            detailsPage: 'painting_details1.html'
        },
        {
            title: 'Sunset',
            price: '2 OMR',
            description: 'Beautiful sunset over the ocean',
            imageUrl: 'm/sunset.png',
            detailsPage: 'painting_details2.html'
        }
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
                <p>Price: ${painting.price}</p>
            </div>
        `;

        gallery.appendChild(paintingElement);
    });
});
