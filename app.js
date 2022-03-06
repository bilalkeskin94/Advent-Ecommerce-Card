const menuItems = [
	{
		name: 'French Fries with Ketchup',
		price: 223,
		image: 'plate__french-fries.png',
		alt: 'French Fries',
		count: 0,
	},
	{
		name: 'Salmon and Vegetables',
		price: 512,
		image: 'plate__salmon-vegetables.png',
		alt: 'Salmon and Vegetables',
		count: 0,
	},
	{
		name: 'Spaghetti Meat Sauce',
		price: 782,
		image: 'plate__spaghetti-meat-sauce.png',
		alt: 'Spaghetti with Meat Sauce',
		count: 0,
	},
	{
		name: 'Bacon, Eggs, and Toast',
		price: 599,
		image: 'plate__bacon-eggs.png',
		alt: 'Bacon, Eggs, and Toast',
		count: 0,
	},
	{
		name: 'Chicken Salad with Parmesan',
		price: 698,
		image: 'plate__chicken-salad.png',
		alt: 'Chicken Salad with Parmesan',
		count: 0,
	},
	{
		name: 'Fish Sticks and Fries',
		price: 634,
		image: 'plate__fish-sticks-fries.png',
		alt: 'Fish Sticks and Fries',
		count: 0,
	},
];

class EcommerceCard {
	constructor() {
		this.addToCart = document.querySelectorAll('.add');
		this.img = document.createElement('img');
		this.cardSummary = document.querySelector('.cart .cart-summary');
		this.removeFromCard = document.querySelectorAll('.in-cart');
		this.decrease = document.querySelectorAll('.decrease');
		this.increase = document.querySelectorAll('.increase');

		this.removeCart();
		this.decreaseQuantity();
		this.increaseQuantity();
		this.updateTotals();
		this.addCart();
	}

	addCart() {
		this.img.src = './images/check.svg';
		this.addToCart.forEach((item) => {
			window.onload = item.addEventListener('click', (e) => {
				item.classList.remove('add');
				item.classList.add('in-cart');
				item.innerHTML = `
                    <img src="./images/check.svg" alt="check">
                    In Cart
                `;

				// if (item.parentElement.querySelector('.menu-item').textContent === )
				const cardHtml = `
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
			  var s = document.createElement('li');
			  s.innerHTML = cardHtml;
			 	this.cardSummary.appendChild(s);
				 e.stopPropagation();
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
				const total = quantity * price;
				subtotal.textContent = `$${total.toFixed(2)}`;
			});
		});
	}

	increaseQuantity() {
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
				const total = quantity * price;
				subtotal.textContent = `$${total.toFixed(2)}`;
			});
		});
	}

	updateTotals() {
		// let cardTotal = 0;
		// const totals = document.querySelectorAll('.totals');
		// document.querySelector('.cart-summary').cardSummary.forEach((price) => {
		//     price.parentElement.parentElement.querySelectorAll('.subtotal').forEach((subtotal) => {
		//     });
		// });
		// totals.forEach((item) => {
		//     item.addEventListener('click', () => {
		//     });
		// });
	}
}

new EcommerceCard();
