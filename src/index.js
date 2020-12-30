import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./test";
import Page5 from "./Page5";
import Page6 from "./Page6";
import Page7 from "./Page7";
import Page8 from "./Page8";

const rootElement = document.getElementById("root");
ReactDOM.render( 
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Page1} />
            <Route path="/intro" component={Page2} />
            <Route path="/what-is-ikigai" component={Page3} />
            <Route path="/lets-find-out-ikigai" component={Page4} />
            <Route path="/introducing-your-ikigai-chart" component={Page5} />
            <Route path="/your-ikigai-chart" component={Page6} />
            <Route path="/discover" component={Page7} />
            <Route path="/export" component={Page8} />
        </Switch>
    </BrowserRouter>,
    rootElement
);
