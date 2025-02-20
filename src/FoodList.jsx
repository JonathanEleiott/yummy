import { useState, useEffect } from 'react';

const FoodList = () => {
  const [allFoods, setAllFoods] = useState([]);

  useEffect(() => {
    const getAllFoods = async() => {
      const response = await fetch('/api/v1/foods');
      const retrievedFoods = await response.json();
      setAllFoods(retrievedFoods);
    }
    
    getAllFoods();
  }, []);
  

  return (
    <ol>
    {
      allFoods.map((singleFood) => {
        return <li key={singleFood.id}>{singleFood.name}</li>
      })
    }
    </ol>
  )
}

export default FoodList;