import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import Posts from "./components/posts";
import MShome from "./components/MShome";
import MSnavbar from "./components/MSnavbar";

function App() {

  return (
      <div className="container-fluid">
      <MSnavbar/>
        <div className="container">
            <div className="content">
                <Switch>
                    <Route path="/" exact component={Posts} />
                    <Route path="/home" component={MShome}/>
                </Switch>
            </div>
        </div>
      </div>
  );
}

export default App;
