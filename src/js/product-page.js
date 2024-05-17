
const products = [
    { id: 1, title: 'g-sphere', description: 'Elevate your tech experience with the G-Sphere Smart Watch, a fusion of cutting-edge technology, eco-friendliness, and a touch of planetary inspiration.this smartwatch is not just a gadget; its a statement.', price: 300 , rating: '4.8/5', image: 'g-sphere'},
    { id: 2, title: 'S-classic', description: 'Crafted with precision, the S-Classic boasts a sleek and minimalistic design, reminiscent of a classic timepiece. Its round, stainless steel case exudes durability and refinement, complemented by a high-resolution, touch-sensitive display that discreetly integrates into the watch face.', price: 700 ,rating: "4.9/5",  image: 's-classic'},
    { id: 3, title: 'celestia', description: 'Inspired by the wonders of the night sky, the Celestia features a sleek and modern design that mirrors the cosmic beauty it represents. Its round, bezel-less display mimics the vastness of space, providing an immersive experience for users passionate about astronomy.', price: 400 ,rating: "5/5",  image: 'celestia'},
    { id: 4, title: 'noir', description: 'The Noir exudes a sense of mystery and style. Its minimalist design, featuring a smooth rectangular display, adds a touch of urban sophistication to your wrist. The bezel-less screen seamlessly blends into the casing, offering a visually stunning and immersive experience.', price: 550 ,rating: "4.0/5",  image: 'noir'},
    { id: 5, title: 'nova', description: 'The Nova boasts a sleek and compact design, perfect for everyday wear. Its round display is encased in durable materials, ensuring longevity without compromising on aesthetics. The customizable watch faces allow you to personalize your Nova, ', price: 400 ,rating: "4.1/5" , image: 'nova'},
    { id: 6, title: 'onyx', description: 'With its all-white exterior, the Onyx exudes a sense of purity and elegance. The monochromatic design extends from the strap to the bezel, creating a seamless and visually appealing aesthetic. The watchs strength is evident in its materials', price: 450 ,rating: "3.9/5", image: 'onyx' },
    { id: 7, title: 'Aurora', description: 'A captivating blend of style and functionality', price: 250, rating: "4/5", image: 'celestia' },
    { id: 8, title: 'Pulse', description: 'Keep up with your active lifestyle', price: 180, rating: "5/5", image: 'g-sphere' },
    { id: 9, title: 'Eclipse', description: 'Embrace the darkness with a touch of sophistication', price: 350, rating: "4/5", image: 'celestia' },
    { id: 10, title: 'Zenith', description: 'Reach new heights of style and performance', price: 220, rating: "5", image: 'g-sphere' },
    { id: 11, title: 'Spark', description: 'Ignite your passion for fitness', price: 150, rating: "4/5", image: 'celestia' },
    { id: 12, title: 'Ventus', description: 'Conquer the elements in style', price: 450, rating: "5/5", image: 'g-sphere' },
    { id: 13, title: 'Lumina', description: 'Let your inner light shine', price: 280, rating: "4/5", image: 'celestia' },
    { id: 14, title: 'Cygnus', description: 'Reach for the stars with this celestial timepiece', price: 600, rating: "5/5", image: 'g-sphere' },
    { id: 15, title: 'Nyx', description: 'Embrace the mystery of night', price: 320, rating: "4/5", image: 'celestia' },
    { id: 16, title: 'Astra', description: 'A timeless classic for every occasion', price: 200, rating: "5/5", image: 'g-sphere' },
    { id: 17, title: 'Chronos', description: 'Master your time with this precision instrument', price: 500, rating: "4/5", image: 'celestia' },
    { id: 18, title: 'Kairos', description: 'Seize the moment with this stylish timepiece', price: 380, rating: "5/5", image: 'g-sphere' },
    { id: 19, title: 'Nexus', description: 'The perfect blend of form and function', price: 420, rating: "4/5", image: 'celestia' },
    { id: 20, title: 'Zenith Sport', description: 'Push your limits in style and comfort', price: 250, rating: "5/5", image: 'g-sphere' },
    { id: 21, title: 'Mina', description: 'A minimalist design for everyday wear', price: 280, rating: "4/5", image: 'celestia' },
    { id: 22, title: 'Rono', description: 'Rugged and reliable for the adventurer', price: 600, rating: "5/5", image: 'g-sphere' },
    { id: 23, title: 'Fixs', description: 'A statement piece for those who dare to be different', price: 320, rating: "4/5", image: 'celestia' },
    { id: 24, title: 'Adrate', description: 'Sleek and sophisticated for the modern professional', price: 200, rating: "5/5", image: 'g-sphere' },
    { id: 25, title: 'Chromos', description: 'Timeless elegance with a touch of modern luxury', price: 500, rating: "4/5", image: 'celestia' },
    { id: 26, title: 'Kaires', description: 'A perfect blend of style and functionality', price: 380, rating: "5/5", image: 'g-sphere' },
    { id: 27, title: 'Nexer', description: 'The perfect companion for your active lifestyle', price: 420, rating: "4/5", image: 'celestia' }
];

const productId = parseInt(location.search.split('=')[1]);

const productDetails = products.find(product => product.id === productId);

updateProductDetails(productDetails);

function updateProductDetails(productDetails) {
    document.querySelector('.product-name').textContent = productDetails.title;
    document.querySelector('.product-dis').textContent = productDetails.description;
    document.querySelector('.product-price').textContent = `$ ${productDetails.price}`;
    document.querySelector('.img').src = `assets/${productDetails.image}.png`;
    document.querySelector('.rating-ratio').textContent = productDetails.rating;
}