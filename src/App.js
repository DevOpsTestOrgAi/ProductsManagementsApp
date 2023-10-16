import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsListing from './pages/ProductListing';
import AddingProduct from './pages/AddingProduct';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<ProductsListing/>}/>
        <Route path="/test" element={<AddingProduct/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
