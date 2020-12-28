import React from "react";
import { Link } from "react-router-dom";
import './style.css';
import bg1 from './images/background-1.png';

function Page1() {

    return (
        <div className="background-1">
            <div>
                <p>
                    This is the first page.
                <br />
                    Click on the button below.
                </p>
            </div>
            <Link to="/page2"><button>
                Go to Page 2
         </button>
            </Link>
        </div>
    );

}

export default Page1;