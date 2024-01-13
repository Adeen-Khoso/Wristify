
const products = [
    { id: 1, title: 'g-sphere', description: 'Elevate your tech experience with the G-Sphere Smart Watch, a fusion of cutting-edge technology, eco-friendliness, and a touch of planetary inspiration.this smartwatch is not just a gadget; its a statement.', price: 300 , rating: '4.8/5', image: 'g-sphere'},
    { id: 2, title: 'S-classic', description: 'Crafted with precision, the S-Classic boasts a sleek and minimalistic design, reminiscent of a classic timepiece. Its round, stainless steel case exudes durability and refinement, complemented by a high-resolution, touch-sensitive display that discreetly integrates into the watch face.', price: 700 ,rating: "4.9/5",  image: 's-classic'},
    { id: 3, title: 'celestia', description: 'Inspired by the wonders of the night sky, the Celestia features a sleek and modern design that mirrors the cosmic beauty it represents. Its round, bezel-less display mimics the vastness of space, providing an immersive experience for users passionate about astronomy.', price: 400 ,rating: "5/5",  image: 'celestia'},
    { id: 4, title: 'noir', description: 'The Noir exudes a sense of mystery and style. Its minimalist design, featuring a smooth rectangular display, adds a touch of urban sophistication to your wrist. The bezel-less screen seamlessly blends into the casing, offering a visually stunning and immersive experience.', price: 550 ,rating: "4.0/5",  image: 'noir'},
    { id: 5, title: 'nova', description: 'The Nova boasts a sleek and compact design, perfect for everyday wear. Its round display is encased in durable materials, ensuring longevity without compromising on aesthetics. The customizable watch faces allow you to personalize your Nova, ', price: 400 ,rating: "4.1/5" , image: 'nova'},
    { id: 6, title: 'onyx', description: 'With its all-white exterior, the Onyx exudes a sense of purity and elegance. The monochromatic design extends from the strap to the bezel, creating a seamless and visually appealing aesthetic. The watchs strength is evident in its materials', price: 400 ,rating: "3.9/5", image: 'onyx' },
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