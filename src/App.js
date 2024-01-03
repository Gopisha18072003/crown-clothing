import Homepage from './pages/homepage/homepage.component'
import {Routes, Route} from 'react-router-dom';
import './App.css';
const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/shop/hats" element={<HatsPage />} />
      </Routes>
    </div>
  );
}

export default App;
