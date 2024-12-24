import Home from "./pages/home/Home";
import NewArticle from "./pages/newArticle/NewArticle";
import Articles from "./pages/articles/Articles";
import About from "./pages/about/About";
import { Route,Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import CreateArticle from "./pages/createArticle/CreateArticle";
import NotFound from "./pages/notfound/NotFound";

export default function App() {
  return (
  <div className="App rtl">
    <Navbar />
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />}/>
      <Route path="newarticle" element={<NewArticle />}/>
      <Route path="articles" element={<Articles />}/>
      <Route path="about" element={<About />}/>
      <Route path="articles/:id" element={<Articles />} />
      <Route path="createArticle" element={<CreateArticle />} />
    </Routes>
    <Footer />
    
    </div>
    )
}
