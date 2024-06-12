import { Routes, Route } from "react-router-dom"
import { Toaster } from 'react-hot-toast';
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
function App() {  
  
  return (
   <div>
    <Header/>
    <Blogs/>
   </div>    
  )
}

export default App


