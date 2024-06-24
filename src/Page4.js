import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { DragDropContext } from "react-beautiful-dnd";
import { v4 } from 'uuid';
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
    let rectData = JSON.parse(JSON.stringify(RECTANGLE_DATA));
    let storedData = localStorage.getItem('cData');
    if (!storedData) {
        return rectData;
    }
    storedData = JSON.parse(storedData);
    for (const name in storedData) {
        const categories = storedData[name].split("");
        for (const cat of categories) {
            rectData[cat].items.push({id: v4(), intext: name });
        }
    }
    return rectData;
}

const storeRectData = (columns) => {
    const toStore = {};
    for (const key in columns) {
        for (const item of columns[key].items) {
            const name = item.intext; 
            if (!(name in toStore)) {
                toStore[name] = [];
            }
            toStore[name].push(key);
        }
    }
    for (const key in toStore) {
        const storedList = [...new Set(toStore[key])];
        storedList.sort();
        toStore[key] = storedList.join('');
    }
    localStorage.setItem('cData', JSON.stringify(toStore));
}

const Far = () => {
    const [columns, setColumn] = useState(initRectData);

    const onUnloadCleanup = React.useCallback(
        (e) => {
            storeRectData(columns);
            return "rectUnloading";
        },
        [columns],
    );

    React.useEffect(
        () => {
            window.addEventListener('beforeunload', onUnloadCleanup);
            return () => {
                window.removeEventListener('beforeunload', onUnloadCleanup);
            };
        },
        [onUnloadCleanup]
    );

    return (
        <>
            <Logo />
            <div className="page-container-4">
                <div className="btn-back">
                    <Link
                        onClick={onUnloadCleanup}
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
                                onClick={onUnloadCleanup}
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