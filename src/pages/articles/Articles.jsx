import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Spinner from "../../components/spinner/Spinner"
export default function Articles(){
    const params = useParams()
    const[article , setArticle]=useState({})
    const [isloading , setIsloading] =useState(false)

    useEffect(()=>{
        setIsloading(true)
        axios.get(`http://localhost:8000/articles/${params.id}`).then((result) =>{
            setArticle(result.data)
            setIsloading(false)
        })

    },[])


    return(
    <div className="container my-16">
        {
            isloading ? <Spinner /> : (
                <>
                <h2 className="font-bold text-2xl pb-1">{article.title}</h2>
                <div className="flex gap-5 text-gray-400 pb-2">
                <span>{article.date}</span>
                <span>{article.athor}</span>
                <span>خواندن {article.readingTime} دقیقه ای</span>
                </div>
                <div className="flex gap-5">
                <img src={article.image} alt="" />
                <p className="flex items-center">
                {article.content}
                </p>
                </div>
                </>
            )
        }
  </div>  )  
}