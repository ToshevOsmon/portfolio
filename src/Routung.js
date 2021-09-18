import React from 'react';
import './styles/main.scss';
import './styles/animation.scss';
import './styles/responsive.scss';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Home from './home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Portfolio from './portfolio/Portfolio';
import Setap from './setap/Setap';
import About from './about/About';


function Routing() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/skills" exact component={Setap} />
          <Route path="/about" exact component={About} />
        </Switch>
      </Router>

    </>
  );
}

export default Routing;
