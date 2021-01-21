const searchTerm = document.getElementById('search-bar');

function search() {
  // Show alert if search bar is empty.
  if (searchTerm.value == '') {
    alert('Please enter a search term.');
  } else {
    getMeal();
  }
}

// Fetch meal info
async function getMeal() {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm.value}`
  );
  const data = await res.json();
  const meals = data.meals[0];

  const thumbnail = meals.strMealThumb;

  document.querySelector(
    '.grid-item'
  ).innerHTML = `<img src="${thumbnail}"></img>`;
}

function setMeal() {}
