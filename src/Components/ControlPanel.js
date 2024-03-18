import React, { useState } from 'react';
import calculateShortestPath from "../Classes,Variables and functions/ShortestPathCalculator";
import printPath from '../Classes,Variables and functions/PrintPath';
import './ControlPanel.css';
import {toggleStates,
        startPointHasBeenCreated,
        endPointHasBeenCreated,
        startNode,
        endNode,
        matrixOfNodes,
        numberOfRows, 
        numberOfColumns,
        previousNode,
        nodeReached,
        clearEverything,
        clearExceptWalls} from '../Classes,Variables and functions/VariablesAndFunctions';


const ControlPanel = () => {
            
    const [result, setResult] = useState("Have not calculated the result yet");
    const [stepNumber, setStepNumber] = useState(1);

    const firstStepString = "Create walls by clicking and hovering over boxes to mark them as part of the path.";
    const secondStepString = "Select a starting point by clicking it.";
    const thirdStepString = "Select an endpoint by clicking on another box to set it as the destination.";

    const stringArray = [firstStepString, secondStepString, thirdStepString];

    const [messageToDisplay, setMessageToDisplay] = useState(firstStepString);

    const moveBackward = () => {
        if(stepNumber == 3){
            document.getElementById("rightnavigationbutton").style.display = 'flex';
        }
        else if(stepNumber == 2){
            document.getElementById("leftnavigationbutton").style.display = 'none';
        }
        toggleStates(stepNumber - 2);
        setMessageToDisplay(stringArray[stepNumber - 2]);
        setStepNumber(stepNumber - 1);
    }

    const moveForward = () => {
        if(stepNumber == 2){
            document.getElementById("rightnavigationbutton").style.display = 'none';
        }
        else if(stepNumber == 1){
            document.getElementById("leftnavigationbutton").style.display = 'flex';
        }
        toggleStates(stepNumber);
        setMessageToDisplay(stringArray[stepNumber]);
        setStepNumber(stepNumber + 1);
    }

    const renderResult = (distance) =>{
        if (distance == -1) setResult(`Unable to reach the end point :(`);
        else{
            printPath();
            setResult(`Minimum distance from startNode to endNode is ${distance} units`);
        }

        document.getElementById('stepsBox').style.display = 'none';
        document.getElementById('resultBox').style.display = 'grid';
        document.getElementById("leftnavigationbutton").style.display = 'none';
        document.getElementById("rightnavigationbutton").style.display = 'none';
    }


    const runer = () =>{
        if(startPointHasBeenCreated && endPointHasBeenCreated){
            const minimumDistancePromise = calculateShortestPath(startNode, endNode, matrixOfNodes, numberOfRows, numberOfColumns, previousNode, nodeReached);
            minimumDistancePromise.then((minimumDistance)=>{
                renderResult(minimumDistance);
            });
            
        }
        else {
            var displayString = "First select"
            var midString = "";
            var endString = "point"
            var last = "";
            if(startPointHasBeenCreated) midString = "end";
            else if(endPointHasBeenCreated) midString = "start";
            else{
                midString = "start and end";
                last = "s";
            }
            alert(displayString + " " + midString + " " + endString + last);
        }
    }

    const clearAll = () => {
        clearEverything();
        toggleStates(0);
        setMessageToDisplay(stringArray[0]);
        setStepNumber(1);
        document.getElementById("rightnavigationbutton").style.display = 'flex';
        document.getElementById("leftnavigationbutton").style.display = 'none';
    }

    const playAgain = () => {
        clearExceptWalls();
        toggleStates(1);
        setMessageToDisplay(stringArray[1]);
        setStepNumber(2);
        document.getElementById("rightnavigationbutton").style.display = 'flex';
        document.getElementById("leftnavigationbutton").style.display = 'flex';
    }

    return (
        <div className='controlpanelbox'>
            <div className="leftnavigationbutton" id='leftnavigationbutton' onClick={moveBackward}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.8vw" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 12H4M4 12l6-6M4 12l6 6"/>
                </svg>
            </div>
            <div className="rightnavigationbutton" id="rightnavigationbutton" onClick={moveForward}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1.8vw" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 12H4M4 12l6-6M4 12l6 6"/>
                </svg>
            </div>
            
            <div className="controlPanelContent">
                <div className="stepsBox" id='stepsBox'>
                    <h2 className='stepNumber'>Step {stepNumber} / 3</h2>
                    <h3 className='messageToDisplay'>{messageToDisplay}</h3>
                    <button className="maker" id="run" onClick={runer}><p>Find the shortest path</p></button>
                </div>
                <div className="resultBox" id='resultBox'>
                    <h2 className='resultMessage'>{result}</h2>
                    <button className="playAgain" onClick={playAgain}>Play Again</button>
                    <button className="clearAll" onClick={clearAll}>Clear All</button>
                </div>
            </div>
        </div>
    )
}

export default ControlPanel;

