import "./App.css";
import { BrowserRouter, Outlet, Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Prod from "./pages/prod/Prod";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";


const Layout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/product/:id",
        element:<Prod/>
      },
      {
        path:"/products/:id",
        element:<Products/>
      },
    ]
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
