import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import "./u.css";
import Hidden from './Hidden';
import { Col } from 'react-bootstrap';
import CircleSVG from './components/CircleSVG';

const Venn = (props) => {
    const { filtered, columns, setColumn } = props;

    return (
        <>
            <Col xs={9} className="venn-container p-0">
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
            </Col>
        </>
    );
};

export default Venn;