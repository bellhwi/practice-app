const searchTerm = document.getElementById('search-bar');
const mealsEl = document.getElementById('meals');

function search() {
  // Show alert if search bar is empty.
  if (searchTerm.value == '') {
    alert('Please enter a search term.');
  } else {
    getMeal();
  }
}

async function getMeal() {
  // Display search result
  document.getElementById(
    'result'
  ).innerHTML = `Search results for '${searchTerm.value}':`;

  // Fetch meal info
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm.value}`
  );
  const data = await res.json();
  const meals = data.meals;

  console.log(meals);

  mealsEl.innerHTML = meals
    .map(
      (meal) => `
  <div>
  <img src="${meal.strMealThumb}"></img>
  </div>`
    )
    .join('');
}
