 export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/products') {
        resolve({
          status: 200,
          message: 'Success',
          data: {
            products: [
              {
                id: 1,
                name: 'Apple iPhone 13 Pro Max',
                description: '6.7-inch Super Retina XDR display with ProMotion. Ceramic Shield.',
                price: 1099,
                quantity: 10,
                category: 'Smartphones',
                brand: 'Apple',
              },
              {
                id: 2,
                name: 'Samsung Galaxy S21 Ultra',
                description: '6.8-inch Dynamic AMOLED 2X display. Gorilla Glass Victus front.',
                price: 1199,
                quantity: 8,
                category: 'Smartphones',
                brand: 'Samsung',
              },
              {
                id: 3,
                name: 'Apple MacBook Air',
                description: '13.3-inch Retina display with True Tone. M1 chip. 8-core CPU.',
                price: 999,
                quantity: 5,
                category: 'Laptops',
                brand: 'Apple',
              },
              {
                id: 4,
                name: 'Dell XPS 13',
                description: '13.4-inch FHD+ InfinityEdge. Intel i7 11th Gen. 16GB RAM.',
                price: 1299,
                quantity: 7,
                category: 'Laptops',
                brand: 'Dell',
              },
              {
                id: 5,
                name: 'Sony WH-1000XM4',
                description: 'Noise canceling over-ear headphones with 30-hour battery life.',
                price: 349,
                quantity: 15,
                category: 'Headphones',
                brand: 'Sony',
              },
              {
                id: 6,
                name: 'Bose QuietComfort 45',
                description: 'High-fidelity noise cancelling headphones. Lightweight comfort.',
                price: 329,
                quantity: 12,
                category: 'Headphones',
                brand: 'Bose',
              },
              {
                id: 7,
                name: 'Samsung Galaxy Tab S8',
                description: '11-inch LCD display, Snapdragon 8 Gen 1, S Pen included.',
                price: 699,
                quantity: 9,
                category: 'Tablets',
                brand: 'Samsung',
              },
              {
                id: 8,
                name: 'Apple iPad Air (5th Gen)',
                description: '10.9-inch Liquid Retina display. M1 chip. Apple Pencil support.',
                price: 599,
                quantity: 10,
                category: 'Tablets',
                brand: 'Apple',
              },
              {
                id: 9,
                name: 'HP Spectre x360',
                description: '13.5" 2-in-1 touch laptop. Intel Evo platform. 16GB RAM.',
                price: 1149,
                quantity: 6,
                category: 'Laptops',
                brand: 'HP',
              },
              {
                id: 10,
                name: 'OnePlus 11',
                description: '6.7-inch AMOLED display, Snapdragon 8 Gen 2, 120Hz refresh.',
                price: 699,
                quantity: 11,
                category: 'Smartphones',
                brand: 'OnePlus',
              },
            ],
          },
        });
      } else {
        reject({
          status: 404,
          message: 'Items list not found.',
        });
      }
    }, 2000);
  });
};
