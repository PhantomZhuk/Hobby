export function getTotalPrice() {
    let totalPrice = 0;
    const products = localStorage.getItem('cardProducts');
    if (products) {
        const parsedProducts = JSON.parse(products);
        for (const product of parsedProducts) {
            totalPrice += product.price * product.quantity;
        }
    }
    return totalPrice;
}