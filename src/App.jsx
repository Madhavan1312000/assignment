import {BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./Main"
import Sub from "./Sub"

const App=()=>{
    return(
        <div>

            <BrowserRouter>
            <Routes>
            <Route path="/" element={<Main/>}/>

                <Route path="/sub/:id" element={<Sub/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App