import Article from "../../components/article/Article";
import { useState , useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home(){

const [articles , setArticles] = useState([])

useEffect(()=>{

    axios.get("http://localhost:8000/articles").then(result =>{
        setArticles(result.data)


    }
    )

},[])

    return(
        <>
            
            <div className="container my-16">
            <h2 className="pb-5">مقالات جدید</h2>
            <div className="grid grid-cols-4 gap-5">
                {articles.map(article => (
                    <Link to={`/articles/${article.id}`}>
                    <Article key={article.id} article={article} />
                    </Link>
                ))}
            

            </div>
            </div>



        </>
    )
}