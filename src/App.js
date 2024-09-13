import logo from './logo.svg';
import './App.css';
import Product from './components/Product.js';
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom';
import Dashboard from './components/Dashboard.js';
import Cart from './components/Cart.js';
import RootLayout from './components/RootLayout.js';


function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Dashboard/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Route>
  ))
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
