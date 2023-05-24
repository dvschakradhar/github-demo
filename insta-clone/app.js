import React, { useEffect, useState } from "react";
import './App.css';
import data from "./data.json"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Link } from 'react-router-dom'

function Slides(props) {
    const { name, location, likes, description, PostImage, date } = props.user
    return (
        <div className='slide'>
            <h1 data-testid={name}>{name}</h1>
            <section className='location'>
                <h5 data-testid={location}>{location}</h5>
                <p>...</p>
            </section>
            <img className="img" src={PostImage} alt="10x Academy logo"></img>
            <section className="likeShare">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                </svg>
                <p data-testid={date}>{date}</p>
            </section>
            <p className='likes'>{likes} likes</p>
            <h4 className='description'>{description}</h4>
        </div>
    )
}

function Pages() {
    const users = data.user
    return <div>
        <nav>
            <div className="instaBar">
                <img className="logos" src="https://th.bing.com/th/id/OIP.eITlf6I46IXgP70oVQn4NQHaHa?pid=ImgDet&rs=1" alt="logo" />
                <h1>Instagram Clone</h1>
                <img className="logos" src="https://th.bing.com/th/id/R.a985528d34da62b66cf3f607eb5d899c?rik=8c0j5u0oNnmaNQ&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2ftransparent-camera-logo%2ftransparent-camera-logo-1.png&ehk=17r4OF1tRrMrF8Mc9ihAfHPyD0Pm2gjVJrKDl7q1gm0%3d&risl=&pid=ImgRaw&r=0" alt="camera" />
            </div>
        </nav>
        <div>
            {
                users.map((user) => {
                    return <Slides user={user} />
                })
            }
        </div>
    </div>
}

function FirstPage() {
    return <div className='firstPage'>
        <h1>Instagram</h1>
        <img src="https://th.bing.com/th/id/OIP.eITlf6I46IXgP70oVQn4NQHaHa?pid=ImgDet&rs=1" alt="logo" />
        <form action="" method="post">
            <input
                type="text"
                placeholder="Name"
            />
            <input
                type="email"
                placeholder="email"
            />
            <input
                type="password"
                placeholder="password"
            />

        </form>
        <Link to="/home"><button data-testid="Enter" id="enter-btn" >Enter</button></Link>
    </div>
}

const App = () => {

    return <div id="main">
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path="/" element={<FirstPage />} />
                </Route>
                <Route path="/Home" element={<Pages />} />
            </Routes>
        </BrowserRouter>
    </div>;
};
export default App;




