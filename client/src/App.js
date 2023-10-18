import {BrowserRouter , Route , Routes} from "react-router-dom";

import home from "./pages/home";
import login from "./pages/login";
import register from "./pages/register";
function App() {
  return (
    <div >
     <BrowserRouter>
     <Routes>
       <Route path ="/" element = {<home />} />
       <Route path ="/login" element = {<login />} />
       <Route path ="/register" element = {<register />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
