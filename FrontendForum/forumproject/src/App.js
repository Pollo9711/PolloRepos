import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route} from "react-router-dom";
import {Routes} from "react-router-dom";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import ListPost from "./components/core/ListPost/ListPost";
import Home from "./components/core/Home/Home";
import Profile from "./components/core/Profile/Profile";
import Registrati from "./components/core/Registrati/Registrati";
import Login from "./components/core/Login/Login";
import PostHome from "./components/PostHome/PostHome";



function App() {




  return (

      <>
          <Header/>
            <div className="App">
              <Routes>
                <Route path={'/home'} element={<PostHome/>} />
                <Route path={'/post'} element={<ListPost/>} />
                <Route path={'/profile'} element={<Profile/>} />
                <Route path={'/registrati'} element={<Registrati/>}/>
                <Route path={'/login'} element={<Login/>}/>
              </Routes>
            </div>
          <Footer/>
      </>

  );
}

export default App;
