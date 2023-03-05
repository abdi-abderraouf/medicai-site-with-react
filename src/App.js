import './App.css';
import Navbars from './Components/Nav/Navbar';
import Home from './Pages/Home';
import {Fragment} from 'react';
import {createBrowserRouter,RouterProvider,createRoutesFromElements,Route} from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Contact from './Pages/Contact';

const routes = createBrowserRouter(createRoutesFromElements(
          <Route path='/' element = {<Layout/>}>
                  <Route index path='/Home' element={<Home/>} />
                  <Route path='/contact' element={<Contact/>} />
          </Route>
));

function App() {
  return (
    <Fragment>
      <RouterProvider router={routes}/>
    </Fragment>  

  );
}

export default App;
