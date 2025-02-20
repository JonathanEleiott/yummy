import { Routes, Route } from 'react-router-dom';
import FoodList from './FoodList.jsx';
import FoodDetails from './FoodDetails.jsx';

const App = () => {

  return (
    <>
      <h1>Yummy</h1>

      <Routes>
        <Route path='/' element={<FoodList />} />
        <Route path='/foods/:id' element={<FoodDetails />} />
      </Routes>
    </>
  )
}

export default App
