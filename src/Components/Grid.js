import './Grid.css';
import React, {useEffect} from 'react';
import {numberOfRows,
    numberOfColumns,
    handleHover} from '../Classes,Variables and functions/VariablesAndFunctions';


export default function Grid() {
    useEffect(()=>{
        const gridContainer = document.getElementById("grid");
        gridContainer.style.gridTemplateColumns = `repeat(${numberOfColumns},1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${numberOfRows},1fr)`;        
  
        for(let index = 0; index < numberOfRows * numberOfColumns; index++){
            const gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");
            gridItem.style.boxShadow = '0px 0px 3px 1px rgba(0, 0, 0, 0.5)';
            gridItem.addEventListener('mousedown', (event) => handleHover(event, index));
            gridItem.addEventListener('mouseover', (event) => handleHover(event, index));
            gridItem.style.backgroundColor = 'rgb(0, 0, 0, 0.1)';
            gridContainer.appendChild(gridItem);
        }
    },[]);

    return (
        <div className='gridwrapper'>
            <div className="grid" id="grid"></div>
        </div>
    )
}
