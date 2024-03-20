import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import './App.css';
import ReactGA from 'react-ga';
import {Animated} from "react-animated-css";
import { TransitionGroup, CSSTransition} from 'react-transition-group'
import About from './Components/about/about.js';
import Landingpage from './Components/landing_page/landing_page.js';
import Contact from './Components/contact/contact.js';
import Trans from './transition.js';

const trackingId = "UA-186285153-3";

function App(){

    ReactGA.initialize(trackingId);
    ReactGA.pageview(window.location.pathname + window.location.search);

    const loc = useLocation()
    const [enableTransition, setEnableTransition] = useState(false)
    
    useEffect(() => {
      setEnableTransition(true);
      setTimeout(() => {
        setEnableTransition(false);
      }, 2000);
    }, []);

    const onClickTransition = useCallback(async() => {
      setEnableTransition(true);
      setTimeout(() => {
        setEnableTransition(false);
      }, 2000);
    }, [])

    return (      
      <div style = {{margin: "0px"}} className = 'App'>

          {
            enableTransition 
            ?
            (<div>
              <CSSTransition
                in = {enableTransition}
                timeout = {1500}
                classNames = "loaderTransition">
                <Trans duration = {enableTransition}/>
              </CSSTransition>
            </div>)  
          :
            (<div>
               <div className = 'menu-top'>
                  <div onClick = {onClickTransition} className = 'menu-op'>
                    Portfolio '24
                  </div>

                  <div className = 'menu-op'>
                    <a style={{ textDecoration: 'none', color: 'black' }} href=''>
                      Get in Touch
                    </a>
                  </div>
                </div>
            </div>)
        }

        <TransitionGroup>
        <CSSTransition classNames='fade' key={loc.key}>
        <Routes style = {{margin: "0px"}}>
          <Route style = {{margin: "0px"}} path="/" element={<Landingpage/>}/>
        </Routes>
        </CSSTransition>
        </TransitionGroup>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Tenor+Sans&display=swap" rel="stylesheet"/>



      </div>
    )
}


export default App;