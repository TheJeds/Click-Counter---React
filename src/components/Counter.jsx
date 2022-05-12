import React from "react";
import '../css/Counter.css'

function Counter({ clicksC }){
    return(
        <div className="counter">
            {clicksC}
        </div>
    );
}

export default Counter;