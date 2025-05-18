document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const cartCount = document.createElement('div');
    cartCount.id = 'cart-count';
    cartCount.textContent = `🛒 ${cart.length}`;
    document.querySelector('.navbar').appendChild(cartCount);

    const updateCart = () => {
        localStorage.setItem('cart', JSON.stringify(cart));
        cartCount.textContent = `🛒 ${cart.length}`;
    };

    document.querySelectorAll('.product-card .btn').forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const productCard = button.closest('.product-card');
            const title = productCard.querySelector('.product-title').textContent;
            const price = productCard.querySelector('.product-price')?.textContent || 'R$ 0,00';
            const image = productCard.querySelector('.product-img')?.getAttribute('src') || '';

            cart.push({ title, price, image });
            updateCart();
            alert(`"${title}" adicionado ao carrinho!`);
        });
    });

    // Clique no ícone do carrinho leva ao checkout
    cartCount.addEventListener('click', () => {
        window.location.href = 'checkout.html';
    });
});

   if(typeof navigator.serviceWorker != 'undefined'){
        navigator.serviceWorker.register('pwabuilder-sw.js')
    };