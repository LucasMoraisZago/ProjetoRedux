import React from "react";
import "./Intervalo.css"

import Card from "./Card";

export default props =>{
    const {min,max} = props
    return(
        <Card title="Intervalo de Números" red>
            <div className="Intervalo">
                <span>
                    <span>Minimo:</span>
                    <input type="number" value={min}/>
                </span>
                <span>
                    <span>Máximo:</span>
                    <input type="number" value={max}/>
                </span>
            </div>
        </Card>
    )
}