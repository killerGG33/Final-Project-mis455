const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');
const mealResults = document.getElementById('meal-results');
const showAllBtn = document.getElementById('show-all-btn');
let allMeals = [];

searchBtn.addEventListener('click', searchMeals);
showAllBtn.addEventListener('click', showAllMeals);

function searchMeals() {
    const query = searchInput.value.trim();
    if (query === '') return;