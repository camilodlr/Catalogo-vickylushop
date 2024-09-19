let cart = [];
        const cartCount = document.getElementById('cart-count');
        const cartItems = document.getElementById('cart-items');
        const totalPriceElement = document.getElementById('total');

        function addToCart(productName, price) {
            cart.push({ name: productName, price: price });
            updateCart();
        }

        function removeFromCart(index) {
            cart.splice(index, 1);
            updateCart();
        }

        function updateCart() {
            cartCount.textContent = cart.length;
            cartItems.innerHTML = '';
            let total = 0;
            cart.forEach((item, index) => {
                const listItem = document.createElement('li');
                listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
                const removeButton = document.createElement('button');
                removeButton.textContent = 'Eliminar';
                removeButton.onclick = () => removeFromCart(index);
                listItem.appendChild(removeButton);
                cartItems.appendChild(listItem);
                total += item.price;
            });
            totalPriceElement.textContent = `Total: $${total.toFixed(2)}`;
        }

        function toggleCart() {
            const cartDiv = document.getElementById('cart');
            cartDiv.style.display = cartDiv.style.display === 'none' ? 'block' : 'none';
        }

        function checkout() {
            alert('Gracias por tu compra!');
            cart = [];
            updateCart();
            toggleCart();
        }