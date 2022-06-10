import Movie from "./components/movieData/Movie";
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes, BrowserRouter} from "react-router-dom"
import Details from "./components/movieDetails/Details";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Movie/>}></Route>
        <Route path='/movie/:id' element={<Details/>}></Route>
        </Routes>
    </BrowserRouter>    
    </div>
  );
}

export default App;
