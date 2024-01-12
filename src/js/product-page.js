
const products = [
    { id: 1, title: 'g-sphere', description: 'Elevate your tech experience with the G-Sphere Smart Watch, a fusion of cutting-edge technology, eco-friendliness, and a touch of planetary inspiration.this smartwatch is not just a gadget; its a statement.', price: 300 , rating: '4.8/5', image: 'g-sphere'},
    { id: 2, title: 'S-classic', description: 'Description for S-classic', price: 700 ,rating: "4.9/5",  image: 's-classic'},
    { id: 3, title: 'celestia', description: 'Description for celestia', price: 400 ,rating: "5/5",  image: 'celestia'},
    { id: 4, title: 'noir', description: 'Description for noir', price: 550 ,rating: "4.0/5",  image: 'noir'},
    { id: 5, title: 'nova', description: 'Description for nova', price: 400 ,rating: "4.1/5" , image: 'nova'},
    { id: 6, title: 'onyx', description: 'Description for onyx', price: 400 ,rating: "3.9/5", image: 'onyx' },
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