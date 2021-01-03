import React from 'react';
import { Route, Switch } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Home from './Home'
import Projects from './Projects'
import OurTeam from './OurTeam'
import Credits from './credits/Credits'
import Project from './Project'
import Vlog from './vlog/Vlog'
import Footer from "./Footer";
import PrivacyPolicy from './PrivacyPolicy'
import DisplayPekoCard from './joinUs/DisplayPekoCard';

const Routes = () => {
    return (
        <>
            <ScrollToTop/>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/projects">
                    <Projects />
                </Route>
                <Route path="/vlog">
                     <Vlog />
                </Route>
                <Route path="/our-team">
                    <OurTeam />
                </Route>
                <Route path="/credits">
                    <Credits />
                </Route>
                <Route path="/project/:projectId/showByDefault/:showByDefault">
                    <Project />
                </Route>
                <Route exact path="/project/:projectId">
                    <Project />
                </Route>
                <Route path="/pekoCard/:pekoCardId">
                    <DisplayPekoCard />
                </Route>
                <Route path="/privacy-policy">
                    <PrivacyPolicy />
                </Route>
            </Switch>
            <Footer />
        </>

    )
}

export default Routes;