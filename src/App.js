import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import Checkout from "./pages/Checkout";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Signin from "./pages/Signin";
import { HomeTemPlate } from "./template/HomeTemplate";
import { UserTemPlate } from "./template/UserTemplate";

export const history = createBrowserHistory()
function App() {
  return (
    <Router history={history}>
        <HomeTemPlate path="/home" exact Component={Home} />
        <HomeTemPlate path="/detail/:id" exact Component={Detail} />
        <HomeTemPlate path="/checkout/:id" exact Component={Checkout} />

        <UserTemPlate path="/register" exact Component={Register}/>
        <UserTemPlate path="/signin" exact Component={Signin}/>

        
        <HomeTemPlate path="/" exact Component={Home} />  
    </Router>
  );
}

export default App;
