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
    
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        .then(response => response.json())
        .then(data => {
            mealResults.innerHTML = '';
            showAllBtn.style.display = 'none';
            allMeals = data.meals || [];
            if (allMeals.length === 0) {
                mealResults.innerHTML = '<p>No meals found.</p>';
                return;
            }
            displayMeals(allMeals.slice(0, 5));
            if (allMeals.length > 5) {
                showAllBtn.style.display = 'block';
            }
        });
}

function displayMeals(meals) {
    mealResults.innerHTML = meals.map(meal => `
        <div class="meal-card">
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <h3>${meal.strMeal}</h3>
            <p><strong>ID:</strong> ${meal.idMeal}</p>
            <p><strong>Category:</strong> ${meal.strCategory}</p>
            <p>${meal.strInstructions.substring(0, 150)}...</p>
        </div>
    `).join('');
}

function showAllMeals() {
    displayMeals(allMeals);
    showAllBtn.style.display = 'none';
}