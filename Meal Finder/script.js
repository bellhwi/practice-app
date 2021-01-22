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
  const meals = data.meals;

  Object.keys(meals).forEach((key) => {
    const gridItem = document.querySelector('.grid-item');
    const thumb = meals[key].strMealThumb;
    Object.keys(thumb).forEach((image) => {
      gridItem.classList.add('image');
      gridItem.innerHTML = `<img src="${image}"></img>`;
    });

    /*
    document.querySelector(
      '.grid-item'
    ).innerHTML = `<img src="${meals[key].strMealThumb}"></img>`;
    */
  });

  document.getElementById(
    'result'
  ).innerHTML = `Search results for '${searchTerm.value}':`;
}
