import javaScript from "../../assets/images/JavaScript.png"
export default function Article(props){

    return(
        <div className="shadow-md">
            <img src={javaScript} alt="#" />
            <div className="m-3">
            <h2 className="">{props.article.title}</h2>
            <h3 className="text-gray-400">خواندن {props.article.readingTime} دقیقه ای</h3>
            </div>
        </div>
    )
}