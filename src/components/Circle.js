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
        { sets: ["L"], size: 1000, label: "love" },
        { sets: ["G"], size: 1000, label: "good" },
        { sets: ["N"], size: 1000, label: "needs" },
        { sets: ["P"], size: 1000, label: "paid" },
        { sets: ["N", "P"], size: 300, label: "np" },
        { sets: ["N", "G"], size: 300, label: "ng" },
        { sets: ["L", "G"], size: 300, label: "lg" },
        { sets: ["L", "P"], size: 300, label: "lp" },
        { sets: ["N", "P", "L"], size: 300, label: "npl" },
        { sets: ["N", "L", "G"], size: 300, label: "nlg" },
        { sets: ["L", "G", "P"], size: 300, label: "lgp" },
        { sets: ["N", "G", "P"], size: 300, label: "ngp" },
        { sets: ["N", "G", "P", "L"], size: 80, label: "Ikigai" }
    ]);

    useEffect(() => {
        var colors = ['green', 'red', '#293972', '#E5C907'];

        let chart = venn.VennDiagram();
        d3.select("#venn").datum(sets).call(chart);

        d3.selectAll("#venn .venn-circle path")
        .style("fill-opacity", 0)
        .style("stroke-width", 5)
        .style("stroke-opacity", .5)
        .style("stroke", function(d,i) { return colors[i]; });

        d3.selectAll("#venn .venn-circle text")
        .style("fill", function(d,i) { return colors[i]})
        .style("font-size", "24px")
        .style("font-weight", "100");
    }, [sets]);
    
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
            <div id="venn" style={{ textAlign: "center" }}></div>
        </>
    );
}

export default Circle;