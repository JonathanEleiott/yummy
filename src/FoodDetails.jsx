import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'

const FoodDetails = () => {
  const [singleFood, setSingleFood] = useState({});
  
  const { id } = useParams();

  useEffect(() => {
    const getFoodDetails = async() => {
      const response = await fetch(`/api/v1/foods/${id}`);
      const retrievedFoodDetails = await response.json();
      setSingleFood(retrievedFoodDetails);
    }

    getFoodDetails();
  }, [])

  return (
    <>
      <h2>{singleFood.name}</h2>

      <h2>Price: ${singleFood.cost/100}</h2>

      <p>{singleFood.description}</p>

      <p>Ingredients: {singleFood.ingredients}</p>

      <Link to='/'>Back</Link>
    </>
  )
}

export default FoodDetails