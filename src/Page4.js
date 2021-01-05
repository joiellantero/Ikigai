import React, { useState } from 'react';
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import logo from "./images/logo.png";
import Rectangle from "./components/Rectangle.js";
import { REC } from './RectangleVar.js'
//import * as rectangleColumns from './RectangleVar.js'
import { v4 } from "uuid";
import { DragDropContext, Droppable } from "react-beautiful-dnd";


const onDragEnd = (result, columns, setColumn) => {

  if (!result.destination) {
    return;
  }

  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumn({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    });

  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumn({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    });
  }
};


const Far = () => {
  const [columns, setColumn] = useState(REC);

  return (
    <div className="page-container-4">
      <DragDropContext
        onDragEnd={result => onDragEnd(result, columns, setColumn)}>
        <div className="main-header-text">
          <p>
            Let’s find our ikigai! <br /> <br /> Start by adding activites or
            values you are currently doing into each of these four quadrants.
            <br /> Feel free to add as many as you can think of!
          </p>
        </div>
        <div className="main-logo">
          <img src={logo} alt="cs-logo" />
        </div>

        <div className='rectangle container'>
          {Object.entries(columns).map(([columnId, column], index) => {
            return (

              <Droppable droppableId={columnId} key={columnId} direction="horizontal">
                {(provided, snapshot) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    <Rectangle
                      data={column.items}
                      key={columnId}
                      id={columnId}
                      heading1={column.heading1}
                      heading2={column.heading2}
                      color={column.color}
                      headingColor={column.headingColor}
                      hover1={column.hover1}
                      hover2={column.hover2}
                      hover3={column.hover3}
                      col={column}
                      columns={columns}
                      handleColumn={setColumn}
                      isDraggingOver={snapshot.isDraggingOver}>
                    </Rectangle>
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            );
          })}
        </div>
        <div className="btn-container center">
          <Link to="/introducing-your-ikigai-chart">
            <button type="button" className="btn-default btn-2 btn-lg">
              Next
            </button>
          </Link>
        </div>
      </DragDropContext>
    </div>
  );
};

export default Far;
