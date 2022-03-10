const menuItems = [
	{
		name: 'French Fries with Ketchup',
		price: 2.23,
		image: 'plate__french-fries.png',
		alt: 'French Fries',
		count: 0,
	},
	{
		name: 'Salmon and Vegetables',
		price: 5.12,
		image: 'plate__salmon-vegetables.png',
		alt: 'Salmon and Vegetables',
		count: 0,
	},
	{
		name: 'Spaghetti Meat Sauce',
		price: 7.82,
		image: 'plate__spaghetti-meat-sauce.png',
		alt: 'Spaghetti with Meat Sauce',
		count: 0,
	},
	{
		name: 'Bacon, Eggs, and Toast',
		price: 5.99,
		image: 'plate__bacon-eggs.png',
		alt: 'Bacon, Eggs, and Toast',
		count: 0,
	},
	{
		name: 'Chicken Salad with Parmesan',
		price: 6.98,
		image: 'plate__chicken-salad.png',
		alt: 'Chicken Salad with Parmesan',
		count: 0,
	},
	{
		name: 'Fish Sticks and Fries',
		price: 6.34,
		image: 'plate__fish-sticks-fries.png',
		alt: 'Fish Sticks and Fries',
		count: 0,
	},
];

let subTotal = document.querySelector('.totals .subtotal');
let tax = document.querySelector('.totals .tax');
let total = document.querySelector('.totals .line-item .total');
let sum = 0;

class EcommerceCard {
	constructor() {
		this.addToCart = document.querySelectorAll('.add');
		this.img = document.createElement('img');
		this.cardSummary = document.querySelectorAll('.cart .cart-summary');
		this.removeFromCard = document.querySelectorAll('.in-cart');
		this.decrease = document.querySelectorAll('.decrease');
		this.increase = document.querySelectorAll('.increase');

		this.removeCart();
		this.decreaseQuantity();
		this.increaseQuantity();
		this.addCart();
	}

	addCart() {
		this.img.src = './images/check.svg';
		this.addToCart.forEach((item) => {
			let cardHtml = `
                <li>
                <div class="plate">
                  ${
										item.parentElement.parentElement.querySelector('.plate')
											.innerHTML
									}
                  <div class="quantity">1</div>
                </div>
                <div class="content">
                  <p class="menu-item">${
										item.parentElement.querySelector('.menu-item').textContent
									}</p>
                  <p class="price">${
										item.parentElement.querySelector('.price').textContent
									}</p>
                </div>
                <div class="quantity__wrapper">
                  <button class="decrease">
                    <img src="images/chevron.svg" />
                  </button>
                  <div class="quantity">1</div>
                  <button class="increase">
                    <img src="images/chevron.svg" />
                  </button>
                </div>
                <div class="subtotal">
                ${item.parentElement.querySelector('.price').textContent}
                </div>
              </li>
              `;

			item.addEventListener('click', () => {
				if (item.classList.contains('in-cart')) {
					return;
				}
				item.classList.remove('add');
				item.classList.add('in-cart');
				item.innerHTML = `
                    <img src="./images/check.svg" alt="check">
                    In Cart
                `;
				this.cardSummary[0].insertAdjacentHTML('beforeend', cardHtml);
			});
		});
	}

	removeCart() {
		this.removeFromCard.forEach((item) => {
			item.addEventListener('click', () => {
				item.classList.remove('in-cart');
				item.classList.add('add');
				item.parentElement.parentElement.remove();
				item.innerHTML = `
                    Add to Cart
                `;
			});
		});
	}

	decreaseQuantity() {
		const extractFunction = (a, b) => {
			return a - b;
		};
		this.decrease.forEach((item) => {
			let subtotal =
				item.parentElement.parentElement.querySelector('.subtotal');
			item.addEventListener('click', () => {
				item.parentElement.querySelector('.quantity').textContent--;
				item.parentElement.previousElementSibling.previousElementSibling.querySelector(
					'.quantity'
				).textContent--;
				if (item.parentElement.querySelector('.quantity').textContent <= 0) {
					item.parentElement.parentElement.remove();
				}
				const quantity =
					item.parentElement.previousElementSibling.previousElementSibling
						.children[1].textContent;
				const price =
					item.parentElement.previousElementSibling.children[1].textContent.substring(
						1
					);

				menuItems.forEach((menuItem) => {
					if (
						menuItem.name ===
						item.parentElement.parentElement.querySelector('.menu-item')
							.textContent
					) {
						sum = extractFunction(sum, Number(price));
						const newTax = `$${parseFloat(sum * 0.0975).toFixed(2)}`;
						const newSubTotal = `$${parseFloat(sum.toFixed(2))}`;
						tax.textContent = newTax >= 0 ? newTax : '$0.00';
						subTotal.textContent = newSubTotal >= 0 ? newSubTotal : '$0.00';
						total.textContent = `$${(
							Number(newTax.substring(1)) + Number(newSubTotal.substring(1))
						).toFixed(2)}`;
					}
				});
				const myTotal = quantity * price;
				subtotal.textContent = `$${myTotal.toFixed(2)}`;
				this.totals.textContent = `$${myTotal.toFixed(2)}`;
			});
		});
	}

	increaseQuantity() {
		const sumFunction = (a, b) => {
			return a + b;
		};
		this.increase.forEach((item) => {
			let subtotal =
				item.parentElement.parentElement.querySelector('.subtotal');
			item.addEventListener('click', () => {
				item.parentElement.querySelector('.quantity').textContent++;
				item.parentElement.previousElementSibling.previousElementSibling.querySelector(
					'.quantity'
				).textContent++;
				const quantity =
					item.parentElement.previousElementSibling.previousElementSibling
						.children[1].textContent;
				const price =
					item.parentElement.previousElementSibling.children[1].textContent.substring(
						1
					);
				menuItems.forEach((menuItem) => {
					if (
						menuItem.name ===
						item.parentElement.parentElement.querySelector('.menu-item')
							.textContent
					) {
						sum = sumFunction(sum, Number(price));
						const newTax = `$${parseFloat(sum * 0.0975).toFixed(2)}`;
						const newSubTotal = `$${parseFloat(sum.toFixed(2))}`;
						tax.textContent = newTax;
						subTotal.textContent = newSubTotal;
						total.textContent = `$${(
							Number(newTax.substring(1)) + Number(newSubTotal.substring(1))
						).toFixed(2)}`;
					}
				});
				const myTotal = quantity * price;
				subtotal.textContent = `$${myTotal.toFixed(2)}`;
				this.totals.textContent = `$${myTotal.toFixed(2)}`;
			});
		});
	}
}

new EcommerceCard();
