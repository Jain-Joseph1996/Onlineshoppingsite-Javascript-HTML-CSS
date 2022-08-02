let carts = document.querySelectorAll('.add-cart');
let products=[
{
	name:'Grey TShirt',
	tag:'greyTshirt',
	price:15,
	inCart:0
},
{
	name:'Black TShirt',
	tag:'blackTshirt',
	price:10,
	inCart:0
	},
{
	name:'Red TShirt',
	tag:'redTshirt',
	price:25,
	inCart:0
},
{
	name:'Green TShirt',
	tag:'greenTshirt',
	price:17,
	inCart:0
},
{
	name:'Blue TShirt',
	tag:'blueTshirt',
	price:25,
	inCart:0
},
{
	name:'Pink TShirt',
	tag:'pinkTshirt',
	price:17,
	inCart:0
}
];
for (let i=0; i < carts.length;i++){
	carts[i].addEventListener('click',() => {
		cartNumbers(products[i]);
	})
}
function onLoadCartNumbers(){
	let productNumbers = localStorage.getItem('cartNumbers');
	if(productNumbers){
		document.querySelector('.nav-item span').textContent = productNumbers;
	}
}

function cartNumbers(product){
	console.log("---",product);
	let productNumbers = localStorage.getItem('cartNumbers');
	productNumbers = parseInt(productNumbers);
	if(productNumbers){
		localStorage.setItem('cartNumbers',productNumbers + 1);
		document.querySelector('.nav-item span').textContent =productNumbers + 1;
	}else{
		localStorage.setItem('cartNumbers',1);
		document.querySelector('.nav-item span').textContent = 1;
	}
	
}
onLoadCartNumbers();