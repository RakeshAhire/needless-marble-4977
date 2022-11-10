
import './App.css';
import Home from './Pages/Home';
import ProductCard from './Components/ProductCard';
import MensFashion from './Pages/MensFashion';
import Routing from './Pages/Routing';

function App() {
  return (
    <div className="App">

      {/* <Home /> */}
      <Routing/>
      {/* <ProductCard/> */}
      {/* <MensFashion/> */}
      <Home />
      <ProductCard/>
      <MensFashion/>
      hello

    </div>
  );
}

export default App;
