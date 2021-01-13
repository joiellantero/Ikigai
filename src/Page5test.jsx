import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { useReactToPrint } from 'react-to-print';
import logo from './images/logo.png';
import Circle from './components/Circle.js';
import { render } from "react-dom";
import { v4 } from 'uuid';

const cir1 = [
    { id: v4(), intext: ['hello i am a first note'] },
];

const cir2 = [
    { id: v4(), intext: ['hello i am a second note'] },
];

const cir3 = [
    { id: v4(), intext: ['hello i am a first note'] },
];

const cir4 = [
    { id: v4(), intext: ['hello i am a first note'] },
];

const circleItems = {
    [v4()]: {
        id: "c1",
        heading1: "What the world",
        heading2: "NEEDS",
        headingColor: '#283972',
        color: '#E1E5FF',
        border: '10px solid #293972',
        items: []
    },
    [v4()]: {
        id: "c2",
        heading1: "What you",
        heading2: "LOVE",
        headingColor: '#009F6F',
        color: '#CCFFF0',
        border: '10px solid #009F6F',
        items: []
    },
    [v4()]: {
        id: "c3",
        heading1: "What you are",
        heading2: "GOOD AT",
        headingColor: '#FF5B5B',
        color: '#FFE4E4',
        border: '10px solid #FF5C5B',
        items: []
    },
    [v4()]: {
        id: "c4",
        heading1: "What You Can Be",
        heading2: "PAID FOR",
        headingColor: '#E5C908',
        color: '#FFFCCC',
        border: '10px solid #E5C907',
        items: []
    }
};

class Far extends React.PureComponent {
    render() {
        return (
            <>
                <section className="page-container-5">
                    <div className="main-header-text">
                        <p>Let’s find our ikigai! <br /> <br /> Start by adding activites or values you are currently doing into each of these four quadrants.
                    <br /> Feel free to add as many as you can think of!
                    </p>
                    </div>
                    <div className="main-logo">
                        <img src={logo} alt="cs-logo" />
                    </div>
                    <div className="container circle">
                        {Object.entries(circleItems).map(([itemId, item], index) => {
                            console.log(item);
                            return (<Circle
                                id={item.id}
                                data={item}
                                key={itemId}
                                heading1={item.heading1}
                                heading2={item.heading2}
                                color={item.color}
                                border={item.border}
                                headingColor={item.headingColor} />);
                        })}
                    </div>
                </section>
            </>
        );
    }
}

//export default Far;

const Export = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        < div >
            <Far ref={componentRef} />
            <button onClick={handlePrint}>Print this out!</button>
        </div >
    );
};

render(<Export />, document.querySelector("#root"));

export default Export;