import Home from "./pages/home/Home";
import NewArticle from "./pages/newArticle/NewArticle";
import Articles from "./pages/articles/Articles";
import About from "./pages/about/About";
import { Route,Routes } from "react-router-dom";

export default function App() {
  return (
  <div className="App rtl">
    <Routes>
      <Route  path="/" element={<Home />}/>
      <Route  path="newarticle" element={<NewArticle />}/>
      <Route  path="articles" element={<Articles />}/>
      <Route  path="about" element={<About />}/>
    </Routes>
    
    </div>
    )
}
