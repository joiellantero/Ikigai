import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { render } from "react-dom";
import Far from "./Page5test.jsx";

// class ComponentToPrint extends React.PureComponent {
//     render() {
//         return (
//             <table>
//                 <thead>
//                     <th>column 1</th>
//                     <th>column 2</th>
//                     <th>column 3</th>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td>data 1</td>
//                         <td>data 2</td>
//                         <td>data 3</td>
//                     </tr>
//                 </tbody>
//             </table>
//         );
//     }
// }

const Export = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <div>
            <Far ref={componentRef} />
            <button onClick={handlePrint}>Print this out!</button>
        </div>
    );
};

render(<Export />, document.querySelector("#root"));

export default Export;