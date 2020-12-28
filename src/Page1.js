import React from "react";
import { Link } from "react-router-dom";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import bg1 from './images/background-1.png';

function Page1() {

    return (
        <div className="background-1">
            <Link to="/page2">
                <button type="button" class="btn-default btn-lg">Next</button>
            </Link>
        </div>
    );

}

export default Page1;