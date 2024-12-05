"use client";
import React, { useState, useEffect } from "react";

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals || [];
  };

  const loadMealIdeas = async () => {
    if (!ingredient) return;
    const mealList = await fetchMealIdeas(ingredient);
    setMeals(mealList);
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2>Meal Ideas</h2>
      {meals.length === 0 ? (
        <p>Select an item to see meal ideas</p>
      ) : (
        <ul>
          {meals.map((meal) => (
            <li key={meal.idMeal}>
              <image
                src={meal.strMealThumb}
                alt={meal.strMeal}
                style={{ width: "100px", height: "100px" }}
              />
              <p>{meal.strMeal}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MealIdeas;
