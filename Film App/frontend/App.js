import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Write from './pages/Write';
import Single from './pages/Single'
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from "react-router-dom";
import "./style.css";

const Layout=()=>{
  return(
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

const router = createBrowserRouter([{
  path: "/login",
  element: <Login/>,
},
{
  path: "/register",
  element: <Register/>,
},
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "/home",
        element: <div>
          <Home/>
          </div>
      },
      {
        path: "/write",
        element: <div>
        <Write/>
        </div>
      },
      {
        path: "/post/:id",
        element: <div>
        <Single/>
        </div>
      },
    ]
  },
  
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}


export default App;
