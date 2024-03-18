import React from 'react';
import Grid from './Grid';
import ControlPanel from './ControlPanel';
import './Simulator.css';

export default function Simulator() {
    return (
        <div id="simulation-page">
            <div className= 'simulation-box'>
                <Grid></Grid>
                <ControlPanel></ControlPanel>
            </div>
            <div id="use-instructions">
                <h1>Instructions:</h1>
                <ul>
                    <li>You can select some of the nodes in the grid by clicking and hovering over the nodes. Brown color of the nodes shows that the node is part of wall.</li>
                    <li>Once you are done with creating walls in the grid, you can click on the the right navigation button and select a node that you want as start node. You can select only one start node.</li>
                    <li>Now after creating a start node, you can select an end node as well by again clicking the right navigation button and clicking on one of the nodes in the grid. Just like start node, you can select only one end node.</li>
                    <li>You have to make sure that you have selcted both, start and end node. Once you have selected these two, the "Find the shortest path" button will turn green.</li>
                    <li>Now click on this button to find the shortest path between start and end node. You can see how algorithm starts searching for the end node form strat node itself and traverses throughout the grid.</li>
                </ul>
            </div>
        </div>
    )
}
