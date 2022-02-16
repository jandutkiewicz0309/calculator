import React, { useState } from "react";
import Button from "../../components/Button/Button"


const CaclForm = ({onSubmitValue, onSubmitOption}) => {
    const [resault, setResault] = useState(0);
    const [option, setOption] = useState("");

    const convert = (e) => {
        e.preventDefault()
        onSubmitValue(resault)
        onSubmitOption(option)
    }
    
    return(
        
        <div className="main-surface">
            <form onSubmit={convert}>
                <input className="surface-quantity"
                    type="text" 
                    placeholder="enter a number"
                    onChange={(e) => {
                        setResault(Number(e.target.value))
                    }} 
                />
                <select className="surface-select" onChange={(e) => {
                    setOption(e.target.value)
                }}>
                    <option value='ar'>ar</option>
                    <option value='ha'>ha</option>
                    <option value= 'm'>m</option>
                    <option value='cm'>cm</option>
                </select>
            </form>
            <Button text='convert' />
        </div>
    )
}

export default CaclForm;