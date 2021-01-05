import React, { useState, useEffect } from 'react';
import { Container, Form, OverlayTrigger, Tooltip} from 'react-bootstrap';
import {EditText } from 'react-edit-text';
import * as d3 from "d3";
import * as venn from "venn.js";
import { v4 } from 'uuid';
import Trash from '../components/trash.js';
import Info from '../components/info.js';

const initialNotes = []

const Circle = (props) => {
    const [notes, setNote] = React.useState(initialNotes);
    const [text, setText] = React.useState('');

    const [isShown, setIsShown] = useState(false);

    function handleChange(event) {
        setText(event.target.value);
    }

    function handleAdd(event) {
        if (!text){
            return;
        }
        const newList = notes.concat({ intext: text, id: v4()});
        setNote(newList);
     
        setText('');
    }

    const handleEdit = ({name, value}) => {
        for (let i = 0; i < notes.length; i++){
            if (name === notes[i].id){
                notes[i].intext = value;
            }
        }
    }

    function Note(props) {
        return (
        <div 
            variant = 'light'
            className='circle rounded-pill with-btn-delete' 
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
        >
            <span className="intext">
                {props.intext}
            </span>

            <EditText
                name={props.id}
                className="edit-text"
                value={props.intext}
                onSave={handleEdit}
            />

            {isShown && (
                <span className="btn-delete-container" onClick={() => props.deleteNote(props.id)}>
                    <Trash />
                </span>
            )}
        </div>
        )
    }


    const deleteNote = (id) => {
        setNote(notes.filter((note) => note.id !== id))
    }

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
          if (!text){
            return;
        }

        const newList = notes.concat({ intext: text, id: v4()});
        setNote(newList);
     
        setText('');
        }
    }

    const [sets, setSets] = useState([
        { sets: ["L"], size: 100, label: "love"},
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
        .style("stroke", function(d,i) { return colors[i]; });

        d3.selectAll("#venn .venn-circle text")
        .style("fill", function(d,i) { return colors[i]})
        .style("font-size", "24px")
        .style("font-weight", "100")
        .style("background-color", "grey");
    }, [sets]);

    function handleAdd2() {
        const newList = sets.concat({ sets: ["N", "G", "P"], size: 30, label: ["ngp", "something"] });
        setSets(newList);
    }

    function handleAdd3(){
        const newList2 = sets.concat({ sets: ["N", "G", "P", "L"], size: 8, label: ["ikigai"] });
        setSets(newList2);
    }
    
    return ( 
        <>
            {/* <div className={props.id}>
                <div className="circle-container" style={{border: props.border}}>
                    <span className="title-container" style={{color: props.headingColor}}>
                        {props.heading1}<br></br><strong>{props.heading2}</strong>
                    </span>
                    
                    <div className="pills-location">
                        <Container className="pill-container">
                            {notes.map((element) => <Note key={element.id.toString()} intext={element.intext} id={element.id} deleteNote={deleteNote}></Note>)}
                        </Container>

                        <Container>
                            <Form.Control className='form rounded-pill' value={text} onChange={handleChange} onBlur={handleAdd} onKeyPress={handleKeyPress} placeholder="Type here..."/>
                        </Container>
                    </div>
                </div>
            </div> */}
            <button onClick={handleAdd2}>click me 1!</button>
            <button onClick={handleAdd3}>click me 2!</button>
            <div id="venn" style={{ textAlign: "center" }}></div>
        </>
    );
}

export default Circle;