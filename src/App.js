//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';
import {connect} from 'react-redux'
import Products from './component/Products';
import Home from './component/Home';

function App(props) {
  return (
    <div className="App">
      <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/"><h3>Shopify</h3></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
            
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/home">Home<span className="sr-only"></span></Link>
              </li>
                
              <li className="nav-item">
                <Link className="nav-link" to="/">Product</Link>
              </li>
                    
              <li className="nav-item">
              <Link className="nav-link" to=" ">Cart <span>{props.mycounter}</span></Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/" component={Products}></Route>
        </Switch>
        </Router>
        
    </div>
  );
}

const mapStateToProps=(state)=>{
  return{
    mycounter:state.count
  }
}

export default connect(mapStateToProps)(App);
