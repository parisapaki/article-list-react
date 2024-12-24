import { useState } from "react";
import Input from "../../components/input/Input";
import TextArea from "../../components/textarea/TextArea";
import axios from "axios";

export default function CreateArticle(){
    const [article , setArticle] = useState({
        title:"",
        date:"",
        author:"",
        time:"",
        Message:"",
        image:""
    })
    const handleChangeArticle = (e) => {
                setArticle((prevstate)=>({
                ...prevstate,
                [e.target.name]:e.target.value
                }))
                console.log(article)
    }

    const handleChangeArticleMessage =(e) =>{
        setArticle((prevstate)=>({
            ...prevstate,
            Message:e.target.value
            }))
            console.log(article)
    }

    const handleCreateNewArticle =() =>{
        axios.post("http://localhost:8000/articles" , {
            id: 100,
            title: article.title,
            readingTime: article.time,
            athor: article.author,
            content:article.Message,
            date: article.date,
            image: article.image

        })

    }
    return(
    <div className="container my-16">
        <Input name="title" handleChange={handleChangeArticle} lable="عنوان" />
        <Input name="data" handleChange={handleChangeArticle} lable="تاریخ" />
        <Input name="author" handleChange={handleChangeArticle} lable="نویسنده" />
        <Input name="time" handleChange={handleChangeArticle} lable="مدت زمان خواندن" />
        <Input name="image" handleChange={handleChangeArticle} lable="عکس" />
        <TextArea handleChange={handleChangeArticleMessage} lable="متن"/>
        <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-3" onClick={handleCreateNewArticle}>
        ایجاد مقاله جدید
        </button>

    </div>
    )
}
