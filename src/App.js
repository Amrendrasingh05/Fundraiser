
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

//css files
import "./assets/css/bootstrap.min.css"
import "./assets/css/animate.css"
import "./assets/css/icons.css"
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import "./assets/css/custom.css"
import "./assets/css/responsive.css"
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

//js file
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/wowjs/dist/wow.min';


import Home from './pages/Home/index';
import About from './pages/About/index';
import FundRaising from './pages/VirtualFund/index';
import Login from './pages/Login/index';
import Event from './pages/Event/index';
import EventDetail from './pages/Event/detail';

import CreateEvent from './pages/Create_Event/index';

import CareerPage from './pages/Career/index';
import TermsConditions from './pages/Terms/index';
import PrivacyPolicy from './pages/Privacy/index';
import ContactUs from './pages/Contact/index';
import ContactUss from './pages/Home/home2';

import ProtectedRoute from './Protected';



function App() {
  return (
    <Router>
    <Switch>
      <Route exact path='/' component={Home}/>

      <Route exact path='/home' component={ContactUss}/>

      <Route exact path='/about-us' component={About}/>
      <Route exact path='/virtual-fundraising' component={FundRaising}/>
      <Route exact path='/career' component={CareerPage}/>
      <Route exact path='/terms-and-conditions' component={TermsConditions}/>
      <Route exact path='/privacy-policy' component={PrivacyPolicy}/>
      <Route exact path='/contact-us' component={ContactUs}/>



      <Route exact path='/login' component={Login}/>
     
      <ProtectedRoute exact path='/event' component={Event}/>
      <ProtectedRoute exact  path='/create-event' component={CreateEvent}/>
      <ProtectedRoute exact  path='/event/details/:id' component={EventDetail}/>

    </Switch>
  </Router>
  );
}

export default App;
