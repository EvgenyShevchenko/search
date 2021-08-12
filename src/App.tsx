import './scss/app.scss';
import Search from "./components/Search/Search";
import ItemContainer from "./components/ItemContainer/ItemContainer";
import {Router, Route, Switch} from "react-router-dom";

function App() {

    return (
        <div className='wrapper'>
            <Search/>
            <ItemContainer/>
            <Switch>
                <Route path="/Ip" exact component={ItemContainer}/>
                <Route path="/FullName" exact component={ItemContainer}/>
                <Route path="/Email" exact component={ItemContainer}/>
                <Route path="/NickName" exact component={ItemContainer}/>
                <Route path="/Phone" exact component={ItemContainer}/>
            </Switch>
        </div>
    );
}

export default App;
