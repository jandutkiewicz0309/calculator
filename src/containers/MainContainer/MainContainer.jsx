import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Temperature from "../../components/Temperature/Temperature"
import CalcForm from "../../components/Calc/CaclForm";
import Tasks from "../../components/Calc/Tasks/Tasks";

const MainContainer = () => {
  const [value, setValue] = useState(0)
  const [option, setOption] = useState("")

  const setAmount = (amount) => {
    setValue(amount)
  }
  const setCalc = (calc) => {
    setOption(calc)
  }
  return (

    <>
      <Header />
     <Temperature/>
     <CalcForm onSubmitValue={setAmount} onSubmitOption={setCalc}/>
     <Tasks/>
    </>
  );
};

export default MainContainer;