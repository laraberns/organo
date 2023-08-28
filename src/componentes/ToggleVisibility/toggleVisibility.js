import { useState } from "react";
import { FaWpforms } from "react-icons/fa"
import './toggleVisibility.css'

export default function ToggleVisibility({ children }) {

    const [show, setShow] = useState(true);

    function toggleShow() {
        setShow(!show);
    }

    return (
        <div className="component-container">

            {/*Return empty JSX code “{}” when show = false.
Return children JSX code “{children}” when show = true.*/}
            {show && children}

            <div className="minha-organizacao">
                <h2 className="texto-organizacao"> Minha organização: </h2>
                <span className="escondeFormulario">
                    <FaWpforms
                        onClick={toggleShow}
                    />
                </span>
            </div>
        </div>
    );
}