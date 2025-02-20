import { Routes, Route } from 'react-router-dom';
import FoodList from './FoodList.jsx';

const App = () => {

  return (
    <>
      <h1>Yummy</h1>

      <Routes>
        <Route path='/' element={<FoodList />} />
      </Routes>
    </>
  )
}

export default App
