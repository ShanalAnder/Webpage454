document.addEventListener('DOMContentLoaded', function() {
    const likeButtons = document.querySelectorAll('.like-btn');

    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.textContent === '♥') {
                this.textContent = '❤️'; 
            } else {
                this.textContent = '♥'; 
            }
        });
    });

    const cartButtons = document.querySelectorAll('.add-to-cart');

    cartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productInfo = this.parentNode;
            addToCart(productInfo);
        });
    });

    function addToCart(product) {
        console.log('Added to cart: ', product.querySelector('h3').textContent);

    }
});

function scrollToLiked() {
    const likedSection = document.getElementById('liked-products');
    likedSection.scrollIntoView({ behavior: 'smooth' });
}


function scrollToCart() {
    const cartSection = document.getElementById('shopping-cart');
    cartSection.scrollIntoView({ behavior: 'smooth' });
}


document.getElementById('liked-link').addEventListener('click', function(event) {
    event.preventDefault(); 
    scrollToLiked(); 
});


document.getElementById('cart-link').addEventListener('click', function(event) {
    event.preventDefault(); 
    scrollToCart(); 
});

function addToCart(product) {
    const productName = product.querySelector('h3').textContent;
    console.log('Added to cart: ', productName);

    
    const shoppingCart = document.getElementById('shopping-cart');
    const cartItem = document.createElement('div');
    cartItem.textContent = productName;
    shoppingCart.appendChild(cartItem);
}

function toggleLike(button) {
    if (button.textContent === '♥') {
        button.textContent = '❤️'; 

       
        const productName = button.parentNode.querySelector('h3').textContent;
        const likedProducts = document.getElementById('liked-products');
        const likedItem = document.createElement('div');
        likedItem.textContent = productName;
        likedProducts.appendChild(likedItem);
    } else {
        button.textContent = '♥'; 

        
        const productName = button.parentNode.querySelector('h3').textContent;
        const likedProducts = document.getElementById('liked-products');
        const items = likedProducts.getElementsByTagName('div');
        for (let i = 0; i < items.length; i++) {
            if (items[i].textContent === productName) {
                likedProducts.removeChild(items[i]);
                break;
            }
        }
    }
}


const likeButtons = document.querySelectorAll('.like-btn');
likeButtons.forEach(button => {
    button.addEventListener('click', function() {
        toggleLike(this);
    });
});

s
const cartButtons = document.querySelectorAll('.add-to-cart');
cartButtons.forEach(button => {
    button.addEventListener('click', function() {
        addToCart(this.parentNode);
    });
});
