import React, { useState } from "react";

const CaclResult = ({value, option}) => {
    cosnt [amount,setAmount] = useState(0)
    switch(option) {
        case  "ar":
            setAmount(Math.pow(value,2))
            break
        case "he":
            setAmount(Math.pow(value,4))
            break
        case "cm":
            setAmount(Math.pow(value,5))
            break
        case "m":
            setAmount(Math.pow(value,1))
            break
    }  
    return
}

export default CaclResult;