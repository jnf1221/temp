import React from "react";

function NumberButton({handleClick, value}) {
    return(
        <button className="btn btn-primary"
          onClick={() => {handleClick(value)}}>
            {value}
        </button>
    );
}

export default NumberButton;