import {BrowserRouter , Route , Routes} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedPage from "./components/ProtectedPage";
import Profile from "./pages/Profile";

function App() {
  return (
    <div >
     <BrowserRouter>
     <Routes>
       <Route path ="/" element = {<ProtectedPage> <Home/> </ProtectedPage>} />
       <Route path ="/profile" element = {<ProtectedPage> <Profile/> </ProtectedPage>} />
       <Route path ="/Login" element = {<Login />} />
       <Route path ="/Register" element = {<Register />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
