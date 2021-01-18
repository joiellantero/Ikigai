import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import "../style.css";
import Hidden from './Hidden';
import CircleSVG from './CircleSVG';
import Modal1 from "./Modal1";
import Modal2 from "./Modal2";
import Modal3 from "./Modal3";
import Modal4 from "./Modal4";

const Venn = (props) => {
    const { filtered, columns, setColumn } = props;

    return (
        <>
            <div className="venn-container p-0">
                {Object.entries(filtered).map(([columnId, column]) => {
                    return (
                        <Hidden
                            key={columnId}
                            id={columnId}
                            col={column}
                            columns={columns}
                            handleColumn={setColumn}
                            top={column.top}
                            left={column.left}
                            width={column.width}
                            maxWidth={column.maxWidth}
                            height={column.height}>
                        </Hidden>
                    );
                })}
                <CircleSVG />
            </div>
        </>
    );
};

export default Venn;