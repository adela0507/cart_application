import './App.css';
import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';
import { useGlobalContext } from './context';

function App() {
  const {loading}=useGlobalContext();
  if(loading){
    return (
      <div className="loading">
        <h1>loading</h1>
      </div>
    )
  }
  return (
    <div className="App">
      <Navbar/>
      <CartContainer/>
    </div>
  );
}

export default App;
