import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5_test";
import Page9 from "./page4_temp";


const rootElement = document.getElementById("root");

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Page1} />
            <Route path="/intro" component={Page2} />
            <Route path="/what-is-ikigai" component={Page3} />
            <Route path="/lets-find-out-ikigai" component={Page4} />
            <Route path="/export" component={Page5} />
            <Route path="/new" component={Page9} />
        </Switch>
    </BrowserRouter>,
    rootElement
);
