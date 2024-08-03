import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/Project';
import ProjectDetails from './pages/ProjectDetails';
import './index.css';
import ExperiencePage from './pages/ExperiencePage';
import FormationPage from './pages/FormationPage';
import ContactPage from './pages/ContactPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
              <Router>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route  path="/details" component={ProjectDetails} />
                  <Route  path="/projets" component={Project} />
                  <Route path="/experience" component={ExperiencePage} />
                  <Route path="/formation" component={FormationPage} />
                  <Route path="/contact" component={ContactPage} /> 
                </Switch>
              </Router>
  </React.StrictMode>
);


