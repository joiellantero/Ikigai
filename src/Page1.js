import React from "react";
import { Link } from "react-router-dom";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Page1() {

    return (
        <div className="background-1">
            <Link to="/intro">
                <button type="button" class="btn-default btn-lg">Next</button>
            </Link>
        </div>
    );

}

export default Page1;