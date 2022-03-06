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
		this.addCart();
		this.removeCart();
		this.decreaseQuantity();
		this.increaseQuantity();
	}

	addCart() {
		const add = document.querySelectorAll('.add');
		const img = document.createElement('img');
		img.src = './images/check.svg';
		add.forEach((item) => {
			item.addEventListener('click', () => {
				item.classList.remove('add');
				item.classList.add('in-cart');
				item.innerHTML = `
                    <img src="./images/check.svg" alt="check">
                    In Cart
                `;
			});
		});
	}

	removeCart() {
		const remove = document.querySelectorAll('.in-cart');
		remove.forEach((item) => {
			item.addEventListener('click', () => {
				item.classList.remove('in-cart');
				item.classList.add('add');
				item.innerHTML = `
                    Add to Cart
                `;
			});
		});
	}

	decreaseQuantity() {
		const decrease = document.querySelectorAll('.decrease');
		decrease.forEach((item) => {
			item.addEventListener('click', () => {
				if (item.parentElement.querySelector('.quantity').textContent === '0') {
					item.parentElement.parentElement.remove();
				}
				item.parentElement.querySelector('.quantity').textContent--;
				item.parentElement.previousElementSibling.previousElementSibling.querySelector(
					'.quantity'
				).textContent--;
			});
		});
	}

	increaseQuantity() {
		const increase = document.querySelectorAll('.increase');
		increase.forEach((item) => {
			item.addEventListener('click', () => {
				item.parentElement.querySelector('.quantity').textContent++;
				item.parentElement.previousElementSibling.previousElementSibling.querySelector(
					'.quantity'
				).textContent++;
			});
		});
	}
}

new EcommerceCard();
