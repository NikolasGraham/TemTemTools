import React, {useEffect, useState} from 'react';
import {Button, Input} from "reactstrap";
import {useTypeCalculator} from "../Hooks/useTypeCalculator";

const CalculatorDisplay = () => {

    const TypeCalc = useTypeCalculator();

    const [typeDisplay, setTypeDisplay] = useState("");

    useEffect(() => {
        console.log("StartingUpCalculatorDisplay");
    }, []);


    const setText = () => {
        console.log(TypeCalc.effectiveTypes);
        if(TypeCalc.effectiveTypes !== undefined){
            setTypeDisplay(<div>
                <a style={{backgroundColor: "grey"}}>Neutral: {TypeCalc.effectiveTypes.neutral}</a>
                -
                <a style={{backgroundColor: "#ff726f"}}>Fire: {TypeCalc.effectiveTypes.fire}</a>
                -
                <a style={{backgroundColor: "blue"}}>Water: {TypeCalc.effectiveTypes.water}</a>
                -
                <a style={{backgroundColor: "green"}}>Nature: {TypeCalc.effectiveTypes.nature}</a>
                -
                <a style={{backgroundColor: "#e6e600"}}>Electric: {TypeCalc.effectiveTypes.electric}</a>
                -
                <a style={{backgroundColor: "brown"}}>Earth: {TypeCalc.effectiveTypes.earth}</a>
                -
                <a style={{backgroundColor: "purple"}}>Mental: {TypeCalc.effectiveTypes.mental}</a>
                -
                <a style={{backgroundColor: "lightGreen"}}>Wind: {TypeCalc.effectiveTypes.wind}</a>
                -
                <a style={{backgroundColor: "darkGrey"}}>Digital: {TypeCalc.effectiveTypes.digital}</a>
                -
                <a style={{backgroundColor: "orange"}}>Melee: {TypeCalc.effectiveTypes.melee}</a>
                -
                <a style={{backgroundColor: "red"}}>Crystal: {TypeCalc.effectiveTypes.crystal}</a>
                -
                <a style={{backgroundColor: "#330033"}}>Toxic: {TypeCalc.effectiveTypes.toxic}</a>
            </div>);
        }

        else {
            alert("No type selected!")
        }
    };

    return (
        <div style={{color: "white"}}>
            <h2>TemTem Typing Calculator</h2>
            <h5>TypeOne: {TypeCalc.typeOne ? TypeCalc.typeOne.name : "?"}   TypeTwo: {TypeCalc.typeTwo !== undefined ? TypeCalc.typeTwo.name : "?"}</h5>
            <h4>{typeDisplay ? typeDisplay : "..."}</h4>
            <Button onClick={() => {
                setTypeDisplay("")
                TypeCalc.setTypeOne();
                TypeCalc.setTypeTwo();
            }}>Clear</Button>
            <Button style={{backgroundColor: "lightGrey"}} color="primary" onClick={() => TypeCalc.setTypeOne(TypeCalc.defendingBonus.neutral)}>TypeOne: Neutral</Button>
            <Button style={{backgroundColor: "lightGrey"}} color="secondary" onClick={() => TypeCalc.setTypeTwo(TypeCalc.defendingBonus.neutral)}>TypeTwo: Neutral</Button>
            <Button color="danger" onClick={() => setText()}>Calculate</Button>
            <br />
            <Button style={{backgroundColor: "#ff726f"}} color="primary" onClick={() => TypeCalc.setTypeOne(TypeCalc.defendingBonus.fire)}>TypeOne: Fire</Button>
            <Button style={{backgroundColor: "#ff726f"}} color="secondary" onClick={() => TypeCalc.setTypeTwo(TypeCalc.defendingBonus.fire)}>TypeTwo: Fire</Button>
            <br />
            <Button style={{backgroundColor: "blue"}} color="primary" onClick={() => TypeCalc.setTypeOne(TypeCalc.defendingBonus.water)}>TypeOne: Water</Button>
            <Button style={{backgroundColor: "blue"}} color="secondary" onClick={() => TypeCalc.setTypeTwo(TypeCalc.defendingBonus.water)}>TypeTwo: Water</Button>
            <br />
            <Button style={{backgroundColor: "green"}} color="primary" onClick={() => TypeCalc.setTypeOne(TypeCalc.defendingBonus.nature)}>TypeOne: Nature</Button>
            <Button style={{backgroundColor: "green"}} color="secondary" onClick={() => TypeCalc.setTypeTwo(TypeCalc.defendingBonus.nature)}>TypeTwo: Nature</Button>
            <br />
            <Button style={{backgroundColor: "#e6e600"}} color="primary" onClick={() => TypeCalc.setTypeOne(TypeCalc.defendingBonus.electric)}>TypeOne: Electric</Button>
            <Button style={{backgroundColor: "#e6e600"}} color="secondary" onClick={() => TypeCalc.setTypeTwo(TypeCalc.defendingBonus.electric)}>TypeTwo: Electric</Button>
            <br />
            <Button style={{backgroundColor: "brown"}} color="primary" onClick={() => TypeCalc.setTypeOne(TypeCalc.defendingBonus.earth)}>TypeOne: Earth</Button>
            <Button style={{backgroundColor: "brown"}} color="secondary" onClick={() => TypeCalc.setTypeTwo(TypeCalc.defendingBonus.earth)}>TypeTwo: Earth</Button>
            <br />
            <Button style={{backgroundColor: "purple"}} color="primary" onClick={() => TypeCalc.setTypeOne(TypeCalc.defendingBonus.mental)}>TypeOne: Mental</Button>
            <Button style={{backgroundColor: "purple"}} color="secondary" onClick={() => TypeCalc.setTypeTwo(TypeCalc.defendingBonus.mental)}>TypeTwo: Mental</Button>
            <br />
            <Button style={{backgroundColor: "lightGreen"}} color="primary" onClick={() => TypeCalc.setTypeOne(TypeCalc.defendingBonus.wind)}>TypeOne: Wind</Button>
            <Button style={{backgroundColor: "lightGreen"}} color="secondary" onClick={() => TypeCalc.setTypeTwo(TypeCalc.defendingBonus.wind)}>TypeTwo: Wind</Button>
            <br />
            <Button style={{backgroundColor: "darkGrey"}} color="primary" onClick={() => TypeCalc.setTypeOne(TypeCalc.defendingBonus.digital)}>TypeOne: Digital</Button>
            <Button style={{backgroundColor: "darkGrey"}} color="secondary" onClick={() => TypeCalc.setTypeTwo(TypeCalc.defendingBonus.digital)}>TypeTwo: Digital</Button>
            <br />
            <Button style={{backgroundColor: "orange"}} color="primary" onClick={() => TypeCalc.setTypeOne(TypeCalc.defendingBonus.melee)}>TypeOne: Melee</Button>
            <Button style={{backgroundColor: "orange"}} color="secondary" onClick={() => TypeCalc.setTypeTwo(TypeCalc.defendingBonus.melee)}>TypeTwo: Melee</Button>
            <br />
            <Button style={{backgroundColor: "red"}} color="primary" onClick={() => TypeCalc.setTypeOne(TypeCalc.defendingBonus.crystal)}>TypeOne: Crystal</Button>
            <Button style={{backgroundColor: "red"}} color="secondary" onClick={() => TypeCalc.setTypeTwo(TypeCalc.defendingBonus.crystal)}>TypeTwo: Crystal</Button>
            <br />
            <Button style={{backgroundColor: "#330033"}} color="primary" onClick={() => TypeCalc.setTypeOne(TypeCalc.defendingBonus.toxic)}>TypeOne: Toxic</Button>
            <Button style={{backgroundColor: "#330033"}} color="secondary" onClick={() => TypeCalc.setTypeTwo(TypeCalc.defendingBonus.toxic)}>TypeTwo: Toxic</Button>
        </div>
    )

};

export default CalculatorDisplay;