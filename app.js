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

const addToCard = document.querySelectorAll('.add');
const img = document.createElement('img');
const cardSummary = document.querySelector('.cart-summary');
const removeFromCard = document.querySelectorAll('.in-cart');
const decrease = document.querySelectorAll('.decrease');
const increase = document.querySelectorAll('.increase');

class EcommerceCard {
	constructor() {
		this.removeCart();
		this.decreaseQuantity();
		this.increaseQuantity();
        this.updateTotals();
		this.addCart();
	}

	addCart() {
		img.src = './images/check.svg';
		addToCard.forEach((item) => {
			item.addEventListener('click', (e) => {
                e.stopImmediatePropagation();
				item.classList.remove('add');
				item.classList.add('in-cart');
                item.innerHTML = `
                    <img src="./images/check.svg" alt="check">
                    In Cart
                `;  
                cardSummary.innerHTML += `
                <li>
                <div class="plate">
                  ${item.parentElement.parentElement.querySelector('.plate').innerHTML}
                  <div class="quantity">1</div>
                </div>
                <div class="content">
                  <p class="menu-item">${item.parentElement.querySelector('.menu-item').textContent}</p>
                  <p class="price">${item.parentElement.querySelector('.price').textContent}</p>
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
			});
		});
	}

	removeCart() {
		removeFromCard.forEach((item) => {
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
		decrease.forEach((item) => {
            let subtotal = item.parentElement.parentElement.querySelector('.subtotal');
			item.addEventListener('click', () => {
				item.parentElement.querySelector('.quantity').textContent--;
				item.parentElement.previousElementSibling.previousElementSibling.querySelector(
					'.quantity'
				).textContent--;
                if (item.parentElement.querySelector('.quantity').textContent <= 0) {
					item.parentElement.parentElement.remove();
				}
                const quantity = item.parentElement.previousElementSibling.previousElementSibling.children[1].textContent
                const price = item.parentElement.previousElementSibling.children[1].textContent.substring(1);
                const total = quantity * price;
                subtotal.textContent = `$${total.toFixed(2)}`;   
			});
		});
	}

	increaseQuantity() {
		increase.forEach((item) => {
            let subtotal = item.parentElement.parentElement.querySelector('.subtotal');
			item.addEventListener('click', (e) => {
                e.stopImmediatePropagation();
                console.log(item);
				item.parentElement.querySelector('.quantity').textContent++;
				item.parentElement.previousElementSibling.previousElementSibling.querySelector(
					'.quantity'
				).textContent++;
                const quantity = item.parentElement.previousElementSibling.previousElementSibling.children[1].textContent
                const price = item.parentElement.previousElementSibling.children[1].textContent.substring(1);
                const total = quantity * price;
                subtotal.textContent = `$${total.toFixed(2)}`;    
			});
		});
	}

    updateTotals() {
        let cardTotal = 0;
        const totals = document.querySelectorAll('.totals');
        const cardSummary = document.querySelectorAll('.cart-summary');
        cardSummary.forEach((price) => {
            price.parentElement.parentElement.querySelectorAll('.subtotal').forEach((subtotal) => {
            });
        });
        totals.forEach((item) => {
            item.addEventListener('click', () => {
            });
        });
    }
}

new EcommerceCard();
