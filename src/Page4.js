import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { DragDropContext } from "react-beautiful-dnd";
import { RECTANGLE_DATA } from './components/GlobalVar';
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import Logo from './components/CS_Logo';
import Rectangle from "./components/Rectangle.js";
import BackButton from './components/BackButton';

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

const initRectData = () => {
    let rectData = Object.assign({}, RECTANGLE_DATA);
    for (const key in rectData) {
        const value = localStorage.getItem(key);
        rectData[key].items = value ? JSON.parse(value) : [];
    }
    return rectData;
}

const Far = () => {
    const [columns, setColumn] = useState(initRectData);

    React.useEffect(() => {
        for (const key in columns) {
            localStorage.setItem(key, JSON.stringify(columns[key].items));
        }
    }, [columns]);

    return (
        <>
            <Logo />
            <div className="page-container-4">
                <div className="btn-back">
                    <Link
                        to={{
                            pathname: "/what-is-ikigai"
                        }}
                    >
                        <BackButton />
                    </Link>
                </div>
                <div className="page-content">
                    <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumn)}>
                        <div className="main-header-text">
                            <p className="subtitle my-5">Let’s find our ikigai!</p>
                            <br />
                            <p>Start by adding activites or values you are currently doing into each of these four quadrants.</p>
                            <p>Feel free to add as many as you can think of!</p>
                        </div>
                        <div className='rec-container'>
                            {Object.entries(columns).map(([columnId, column]) => {
                                return (
                                    <Rectangle
                                        key={columnId}
                                        id={columnId}
                                        col={column}
                                        columns={columns}
                                        handleColumn={setColumn}
                                    />
                                );
                            })}
                        </div>
                        <div className="btn-container center">
                            <Link
                                to={{
                                    pathname: "/your-ikigai-chart"
                                }}
                            >
                                <button type="button" className="btn-default btn-2 btn-lg">
                                    Next
                                </button>
                            </Link>
                        </div>
                    </DragDropContext>
                </div>
            </div>
        </>
    );
};

export default Far;