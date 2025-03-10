import React, { useState, useEffect } from 'react';

function FoodList() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/search.php?s=pasta"
        );
        const data = await response.json();
        setMeals(data.meals);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchMeals();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Restaurant Food List</h1>
      {loading ? (
        <p>Loading food items...</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: '0' }}>
          {meals && meals.length > 0 ? (
            meals.map((meal) => (
              <li key={meal.idMeal} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
                <h3>{meal.strMeal}</h3>
                <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: '100px', borderRadius: '5px' }} />
                <p><strong>Category:</strong> {meal.strCategory}</p>
                <p><strong>Area:</strong> {meal.strArea}</p>
                <p>{meal.strInstructions.substring(0, 100)}...</p> {/* Shortened instructions */}
              </li>
            ))
          ) : (
            <p>No food items found.</p>
          )}
        </ul>
      )}
    </div>
  );
}

export default FoodList;
