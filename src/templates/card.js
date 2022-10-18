const Cart = (product) => {
    const { images, title, price } = product;
    return `
        <div class="Card">
            <img
                src="${images[0]}"
                alt="${title}"
            >
            <h2>
                ${title}
                <small>$ ${price}</small>
            </h2>
        </div>
    `
}

export default Cart;