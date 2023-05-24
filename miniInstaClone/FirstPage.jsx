import { Link } from "react-router-dom"

export default function FirstPage() {
    return <>
        <nav>
            <img id="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1025px-Instagram-Icon.png" alt="insta-logo" />
            <Link to="/home"><button id="enter-btn">Enter</button></Link>
        </nav>
    </>

}