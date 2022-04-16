import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import EditAllBlogs from "./components/EditAllBlogs";
import DeleteBlogs from "./components/DeleteBlogs";
import AddBlog from "./components/AddBlog";
import Home from "./components/Home";
import NotFound from "./components/NotFound"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import EditBlog from "./components/EditBlog"


function App() {
    return (
      <BrowserRouter >
        <Navbar / >
        <Routes >
          <Route path = "/" element = { < Home / > }/>
          <Route path = "/alledit" element = { < EditAllBlogs / > } />
          <Route path = "/alldelete" element = { < DeleteBlogs / > } />
          <Route path = "/add" element = { < AddBlog / > } />
          <Route path = "/edit/:id" element = { < EditBlog / > } />
          <Route path = "*" element = { < NotFound / > } />
        </Routes>
      < /BrowserRouter >
    );
}

export default App;
