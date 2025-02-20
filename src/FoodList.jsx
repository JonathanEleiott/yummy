import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
        return <Link key={singleFood.id} to={`/foods/${singleFood.id}`} >{singleFood.name}</Link>
      })
    }
    </ol>
  )
}

export default FoodList;