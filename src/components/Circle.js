import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import * as d3 from "d3";
import * as venn from "venn.js";
import Modal from './Modal';

const Circle = (props) => {
    const [modalShow, setModalShow] = React.useState(false);

    const [sets, setSets] = useState([
        { sets: ["L"], size: 100, label: "love" },
        { sets: ["G"], size: 100, label: "good" },
        { sets: ["N"], size: 100, label: "needs" },
        { sets: ["P"], size: 100, label: "paid" },
        { sets: ["N", "P"], size: 30, label: "np" },
        { sets: ["N", "G"], size: 30, label: "ng" },
        { sets: ["L", "G"], size: 30, label: "lg" },
        { sets: ["L", "P"], size: 30, label: "lp" },
        { sets: ["N", "P", "L"], size: 30, label: "npl" },
        { sets: ["N", "L", "G"], size: 30, label: "nlg" },
        { sets: ["L", "G", "P"], size: 30, label: "lgp" },
        // { sets: ["N", "G", "P"], size: 30, label: "ngp" },
        // { sets: ["N", "G", "P", "L"], size: 8, label: "Ikigai" }
    ]);


    useEffect(() => {
        let colors = ['#009F6F', '#FF9A9A', '#293972', '#E5C907'];

        let chart = venn.VennDiagram()
            .width(800)
            .height(700);

        d3.select("#venn").datum(sets).call(chart);

        d3.selectAll("#venn .venn-circle path")
            .style("fill-opacity", 0)
            .style("stroke-width", 5)
            .style("stroke-opacity", .8)
            .style("stroke", function (d, i) { return colors[i]; });

        d3.selectAll("#venn .venn-circle text")
            .style("fill", function (d, i) { return colors[i] })
            .style("font-size", "24px")
            .style("font-weight", "100")
            .style("background-color", "grey");
    }, [sets]);

    function handleAdd2() {
        const newList = sets.concat({ sets: ["N", "G", "P"], size: 30, label: ["ngp", "something"] });
        setSets(newList);
    }

    function handleAdd3() {
        const newList2 = sets.concat(
            { sets: ["N", "G", "P", "L"], size: 8, label: ["ikigai"] }
        );
        setSets(newList2);
    }



    return (
        <>
            {props.col.items.map(i => {
                return (
                    console.log(i.intext)
                )
            })}

            <button onClick={handleAdd2}>click me 1!</button>
            <button onClick={handleAdd3}>click me 2!</button>
            <Button className="btn-default" onClick={() => setModalShow(true)}>Add steps</Button>
            <Modal show={modalShow} onHide={() => setModalShow(false)} />
            <div id="venn" style={{ textAlign: "center" }}></div>
        </>
    );
}

export default Circle;