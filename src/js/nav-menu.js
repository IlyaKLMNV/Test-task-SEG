const mobileNavigationButton = document.querySelector('#mobile-navigation-button');
const menuWrapper = document.querySelector('.mobile-navigation-bar_menu--wrapper');
const menuContent = document.querySelector('.mobile-navigation-bar_menu_content');


const showMenu = () => {
	mobileNavigationButton.classList.toggle('button-x');
	if (menuWrapper.style.display == '') {
		menuWrapper.style.display = 'block';
		menuContent.style.transform = 'translateX(0vw)';
	} 
	else {
		menuWrapper.style.display = '';
		menuContent.style.transform = 'translateX(100vw)';
	}
}


mobileNavigationButton.addEventListener('click', showMenu);

