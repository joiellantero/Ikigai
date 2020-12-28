import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Page1 from "./Page1";
import Page2 from "./Page2";

/*import Far from './test';

ReactDOM.render( < Far / > , document.getElementById('root')); */

const rootElement = document.getElementById("root");
ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Page1} />
            <Route path="/page2" component={Page2} />
        </Switch>
    </BrowserRouter>,
    rootElement
);
