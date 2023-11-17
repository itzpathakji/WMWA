import {BrowserRouter , Route , Routes} from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import ProtectedPage from "./components/ProtectedPage";
import Profile from "./pages/Profile";

function App() {
  return (
    <div >
     <BrowserRouter>
     <Routes>
       <Route path ="/" element = {<ProtectedPage>
        <Home />
       </ProtectedPage>} />

       <Route path ="/profile" element = {<ProtectedPage>
        <Profile />
       </ProtectedPage>} />
       <Route path ="/login" element = {<Login />} />
       <Route path ="/register" element = {<Register />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
