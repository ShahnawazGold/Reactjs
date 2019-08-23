import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './components/Home'
import Contact from './components/Contact'

import * as serviceWorker from './serviceWorker';
//=====1.1 step install , npm install --save react-router-dom then import
import {
    BrowserRouter as Router ,
    Route,
    Link 
}  from 'react-router-dom'

ReactDOM.render(<Router>

  {/*======== 1.2 step replace make Router ,then inside write Home and Contact ul after create Route  */}

     <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>

        </ul>

        <Route exact  path ="/" component={Home} />
        <Route   path ="/contact" component={Contact} />

     </div>


</Router>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
