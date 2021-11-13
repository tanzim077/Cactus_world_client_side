import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './contexts/AuthProvider';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/HomePage/Home/Home';
import LogIn from './pages/Login/Login/Login';
import Signup from './pages/Signup/Signup';
import Cactuses from './pages/Cactuses/Cactuses';
import ItemDetails from './pages/PrivatePages/ItemDetails/ItemDetails';
import OrderUpdate from './pages/PrivatePages/OrderUpdate/OrderUpdate';
import ItemUpdate from './pages/PrivatePages/ItemUpdate/ItemUpdate';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import DashBoard from './pages/DashBoard/DashBoard/DashBoard';
import NotFound from './pages/PrivatePages/NotFound/NotFound';
import AboutUsHome from './pages/AboutUs/AboutUsHome/AboutUsHome';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" >
             <Home/>
            </Route>
            <Route exact path="/home" >
             <Home/>
            </Route>
            <Route exact path="/items" >
             <Cactuses/>
            </Route>
            <Route exact path="/aboutus" >
             <AboutUsHome/>
            </Route>
            <PrivateRoute path="/itemdetails/:id">
              <ItemDetails></ItemDetails>
            </PrivateRoute>
            <PrivateRoute exact path="/itemupdate/:id">
              <ItemUpdate></ItemUpdate>
            </PrivateRoute>  
            <PrivateRoute exact path="/orderupdate/:id">
              <OrderUpdate></OrderUpdate>
            </PrivateRoute>
            <PrivateRoute path="/dashboard" >
             <DashBoard/>
            </PrivateRoute>
            <Route exact path="/login" >
             <LogIn/>
            </Route>
            <Route exact path="/signup" >
             <Signup/>
            </Route>
            <Route exact path="*">
              <NotFound />
            </Route>
          </Switch>
          </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
