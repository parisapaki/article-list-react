import Article from "../../components/article/Article";
import Navbar from "../../components/navbar/Navbar";
import { useState , useEffect } from "react";
import axios from "axios";
import Footer from "../../components/footer/Footer";

export default function Home(){

const [articles , setArticles] = useState([])

useEffect(()=>{

    axios.get("http://localhost:8000/articles").then(result =>{
        setArticles(result.data.data)


    }
    )

},[])

    return(
        <div className="">
            <Navbar />
            <div className="container my-16">
            <h2 className="pb-5">مقالات جدید</h2>
            <div className="grid grid-cols-4 gap-5">
                {articles.map(article => (
                    <Article key={article.id} article={article} />
                ))}
            

            </div>
            </div>

            <Footer />

        </div>
    )
}