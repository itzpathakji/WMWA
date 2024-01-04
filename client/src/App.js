import {BrowserRouter , Route , Routes} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedPage from "./components/ProtectedPage";
import Profile from "./pages/Profile";
import { useSelector } from "react-redux";
import Spinner from "./components/Spinner";
import ProjectInfo from "./pages/ProjectInfo";

function App() {
  const {loading} = useSelector((state) => state.loaders);
  return (
    <div >
      {loading && <Spinner />}
     <BrowserRouter>
     <Routes>
       <Route path ="/" element = {<ProtectedPage> <Home/> </ProtectedPage>} />
       <Route path ="/Project/:id" element = {<ProtectedPage> <ProjectInfo/> </ProtectedPage>} />
       <Route path ="/Profile" element = {<ProtectedPage> <Profile/> </ProtectedPage>} />
       <Route path ="/Login" element = {<Login />} />
       <Route path ="/Register" element = {<Register />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
