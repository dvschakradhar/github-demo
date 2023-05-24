import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './insta.css'
import FirstPage from './FirstPage'
import LandingPage from './LandingPage'


export default function Home(){


    return <>
        <BrowserRouter>
            <Routes>
                <Route> 
                    <Route path="/" element={<FirstPage /> }/>
                </Route>
                <Route path="/home" element= {<LandingPage/>}/>
            </Routes>
        </BrowserRouter>
    </>
}