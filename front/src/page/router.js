
import { Route, createBrowserRouter } from 'react-router-dom';
import { Home } from './Home/index';
import { Login } from './Login/index';
import { Link } from 'react-router-dom';
export const router = createBrowserRouter([
  {
    path: "/",
    element: <>
      <Home menuToggle={false}/> 
    </>

  },
  {
    path: "/login",
    element: <>
      <Login> 
        <Link to={"/b"}>click me</Link>
      </Login>
    </>
  },
  {
    path: "/b",
    element: <>
         bye
        <Link to="/a">click </Link>
    </>
  },
  
]);
