// Для блока с информации о компании "about company"
const countsYears = document.querySelector('.number-text_years');
const countsProjects = document.querySelector('.number-text_projects');
const countsEmployeers = document.querySelector('.number-text_employeers');
const supCountsProjects = document.querySelector('sup.counts');

countsYears.classList.remove('counts--if-transition-does-not-work');
countsProjects.classList.remove('counts--if-transition-does-not-work');
countsEmployeers.classList.remove('counts--if-transition-does-not-work');
supCountsProjects.classList.remove('counts--if-transition-does-not-work');

const countsObserver = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			countsYears.classList.add('counts--open');
			countsProjects.classList.add('counts--open');
			countsEmployeers.classList.add('counts--open');
			supCountsProjects.classList.add('counts--open');
			return;
		}
		countsYears.classList.remove('counts--open');
		countsProjects.classList.remove('counts--open');
		countsEmployeers.classList.remove('counts--open');
		supCountsProjects.classList.remove('counts--open');
	});
});
countsObserver.observe(document.querySelector('.number-text'));



// Для блока мотивацией "motivation"
const columnTower = document.querySelector('.motivation_columns_tower');
const columnSuper = document.querySelector('.motivation_columns_super');
const columnLocation = document.querySelector('.motivation_columns_location');


columnTower.classList.remove('motivation_columns--if-transition-does-not-work');
columnSuper.classList.remove('motivation_columns--if-transition-does-not-work');
columnLocation.classList.remove('motivation_columns--if-transition-does-not-work');


const motivationColumnsObserver = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			columnTower.classList.add('motivation_columns--open');
			columnSuper.classList.add('motivation_columns--open');
			columnLocation.classList.add('motivation_columns--open');
			return;
		}
		columnTower.classList.remove('motivation_columns--open');
		columnSuper.classList.remove('motivation_columns--open');
		columnLocation.classList.remove('motivation_columns--open');
	});
});
motivationColumnsObserver.observe(document.querySelector('.motivation_columns'));
