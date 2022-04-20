import "./Title.css"
import {Link, NavLink} from "react-router-dom";


export default function Title() {
    return <div className={"title-box"}>
        <div>
            <h1 className={"blog-title"}>Rick & Morty Character Gallery
            </h1>
        </div>

        <div className={"link-box"}>
            <div>
            <Link className={"link"} to={"/home"}> Home </Link>
            </div>

            <div>
            <Link className={"link"} to={"/gallery"}> Gallery </Link>
            </div>
        </div>


    </div>
}