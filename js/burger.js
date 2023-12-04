document.addEventListener('DOMContentLoaded',
	function (){

		// Burger animation
		document.querySelector('#header-link-burger').addEventListener('click' ,function (){
			document.querySelector('#header-link-burger').classList.toggle('header-link-burger-active')
			//The menu opens and closes
			document.querySelector('#nav-menu').classList.toggle('nav-menu-active')
			//The shadow menu opens and closes
			document.querySelector('#shadow-menu').classList.toggle('shadow-menu-active')
		})
		// If I click on the shadow-menu-active everything closes
		document.querySelector('#shadow-menu')
		.addEventListener ('click',function(){
			document.querySelector('#nav-menu').classList.remove('nav-menu-active')
			document.querySelector('#header-link-burger').classList.remove('header-link-burger-active')
			document.querySelector('#shadow-menu').classList.remove('shadow-menu-active')
		}) 
})