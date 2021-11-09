import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './contexts/AuthProvider';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MenuBar from './pages/Shared/MenuBar/MenuBar';
import Home from './pages/HomePage/Home/Home';
import LogIn from './pages/Login/Login/Login';
import Signup from './pages/Signup/Signup';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <MenuBar />
          <Switch>
            <Route exact path="/" >
             <Home/>
            </Route>
            <Route exact path="/home" >
             <Home/>
            </Route>
            <Route exact path="/cactuses" >
             <Home/>
            </Route>
            <Route exact path="/dashboard" >
             <Home/>
            </Route>
            <Route exact path="/login" >
             <LogIn/>
            </Route>
            <Route exact path="/signup" >
             <Signup/>
            </Route>
          </Switch>
          </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
