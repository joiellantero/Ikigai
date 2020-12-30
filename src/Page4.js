import React, { useState } from 'react';
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import logo from "./images/logo.png";
import Rectangle from "./components/Rectangle.js";

import { v4 } from "uuid";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const rect1 = [{ id: v4(), intext: "first rectangle" }];
const rect2 = [{ id: v4(), intext: "second rectangle" }];
const rect3 = [{ id: v4(), intext: "third rectangle" }];
const rect4 = [{ id: v4(), intext: "forth rectangle" }];

const rectangleColumns = {
  [v4()]: {
    heading1: "What the world",
    heading2: "NEEDS",
    color: "#E1E5FF",
    headingColor: "#283972",
    items: rect1,
    hover1: "Stuck? Try these questions:",
    hover2: "Are you helping to solve an actual problem?",
    hover3: "Is what you’re doing bringing beauty or utility to others, helping out, and shaping the world around you?"
  },
  [v4()]: {
    heading1: "What you",
    heading2: "LOVE",
    color: "#CCFFF0",
    headingColor: "#009F6F",
    items: rect2,
    hover1: "Stuck? Try these questions:",
    hover2: "What are some activities truly enjoy doing about? Is there an activity or cause you enthusiastically talk about for hours on end?",
    hover3: "If you weren’t concerned about money, what would you be doing?"
  },
  [v4()]: {
    heading1: "What you are",
    heading2: "GOOD AT",
    color: "#FFE4E4",
    headingColor: "#FF5B5B",
    items: rect3,
    hover1: "Stuck? Try these questions:",
    hover2: "Is there an activity that your friends/family/community have sought your advice/opinion on before?",
    hover3: "Are you among the best in your workplace/community at this? With some more education and experience, could you master what you do?"
  },
  [v4()]: {
    heading1: "What You Can Be",
    heading2: "PAID FOR",
    color: "#FFFCCC",
    headingColor: "#E5C908",
    items: rect4,
    hover1: "Stuck? Try these questions:",
    hover2: "Lately, have you been paid for what you do? Have you ever been paid for what you do? If not, are other people being paid for this work?",
    hover3: "Are you already making a good living doing what it is that you’re doing? Can you eventually make a good living doing this work? Are there other people who can do what you do, but better?"
  },
};


const onDragEnd = (result, columns, setColumn) => {
  if (!result.destination) return;
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
  const [columns, setColumn] = useState(rectangleColumns);

  return (
    <>
      <div className="page-container-4">
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
        <DragDropContext 
          onDragEnd={result => onDragEnd(result, columns, setColumn)}
        >
          <div className='rectangle container'>
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <Droppable droppableId={columnId} direction="horizontal">
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
                      col = {column}
                      columns = {columns}
                      handleColumn={setColumn}
                      isDraggingOver = {snapshot.isDraggingOver}>
                      </Rectangle>
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            );
          })}
          </div>
        </DragDropContext>
        <div className="btn-container center">
          <Link to="/introducing-your-ikigai-chart">
            <button type="button" className="btn-default btn-2 btn-lg">
              Next
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Far;
