import { Link } from "react-router-dom"
export default function Navbar(){

    return(
        <div className="shadow-md">
        <div className="container">
            <ul className="flex gap-5 py-5">
                <Link to="/">لیست مقالات</Link>
                <Link to="newarticle">مقاله جدید</Link>
                <Link to="about">درباره</Link>
            </ul>
        </div>
        </div>
    )
}