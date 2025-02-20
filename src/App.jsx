import { useEffect, useState } from 'react';

const App = () => {
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
    <>
      <h1>Yummy</h1>

      <ol>
      {
        allFoods.map((singleFood) => {
          return <li key={singleFood.id}>{singleFood.name}</li>
        })
      }
      </ol>
    </>
  )
}

export default App
