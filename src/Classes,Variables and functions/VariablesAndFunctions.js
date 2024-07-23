import { indexToChildNumber, childNumberToIndex } from "./ShortestPathCalculator";
var numberOfRows = 10;
var numberOfColumns = 20;

var startNode = [-1,-1];
var endNode = [-1,-1];

// There are different states of the grid.
// User could be at state where he/she could be making walls, or start node, or end node in the grid.
// following class tracks at which state user is current at.
class state {
    constructor(stepNumber, maxQuantity, color, currNum, notification, mark) {
        this.stepNumber = stepNumber;
        this.maxQuantity = maxQuantity;
        this.color = color;
        this.currNum = currNum;
        this.notification = notification;
        this.mark = mark;
    }
}

const strwalls = 'Max number of walls allowed are already created';
const strstart = 'You can create only one starting point!!';
const strend = 'You can create only one end point!!';

const creatingWalls = new state(1, Math.floor((numberOfRows*numberOfColumns)/2),'rgb(107, 36, 12)', 0, strwalls, -1);

const creatingStartingPoint = new state(2, 1,'rgb(76, 185, 231)', 0, strstart, 0);

const creatingEndingPoints = new state(3, 1,'rgb(93, 18, 210)', 0, strend, 0);

const states = [creatingWalls, creatingStartingPoint, creatingEndingPoints];

var currstate = creatingWalls;

function toggleStates(num){
    currstate = states[num];
}

// Matrix of node stores -1 for cells where is wall and 0 where there is no wall.
var matrixOfNodes = [];

// While calculating shortest path between two nodes, we need to store the previous node for each node.
// Following 2D matrix stores previous node for each node.
var previousNode = [];

// Stores 1 if the shortest distance from start-node to any node is found, otherwise 0.
var nodeReached = [];

for (let i = 0; i < numberOfRows; i++){
    let arr1= [];
    let arr2= [];
    let arr3= [];
    for (let j = 0; j < numberOfColumns; j++){
        arr1.push(0);
        arr2.push(0);
        arr3.push(0);
    }
    matrixOfNodes.push(arr1);
    previousNode.push(arr2);
    nodeReached.push(arr3);
}

var startPointHasBeenCreated = false;
var endPointHasBeenCreated = false;

// Creates walls in the grid.
function handleWalls(event, i, j){
    if (event.target.style.backgroundColor == creatingWalls.color){
        if(matrixOfNodes[i][j] == creatingWalls.mark) matrixOfNodes[i][j] = 0;
        event.target.style.backgroundColor = 'rgb(0, 0, 0, 0.1)';
        creatingWalls.currNum--;
    }
    else if (event.target.style.backgroundColor == creatingStartingPoint.color){
        alert("Can not create wall on the start point!!");
    }
    else if (event.target.style.backgroundColor == creatingEndingPoints.color){
        alert("Can not create wall on the end point!!");
    }
    else{
        if (creatingWalls.currNum < creatingWalls.maxQuantity){
            if(matrixOfNodes[i][j] == 0) matrixOfNodes[i][j] = creatingWalls.mark;
            event.target.style.backgroundColor = creatingWalls.color;
            creatingWalls.currNum++;
        }
        else alert(creatingWalls.notification);
    } 
}

// Creates Start point in the grid.
function handleStart(event, i, j){
    if (event.target.style.backgroundColor == creatingStartingPoint.color){
        matrixOfNodes[i][j] = 0;
        startNode = [-1,-1];
        event.target.style.backgroundColor = 'rgb(0, 0, 0, 0.1)';
        creatingStartingPoint.currNum--;
        startPointHasBeenCreated = false;
        document.getElementById('run').style.setProperty('--before-width', '0');
    }
    else if (event.target.style.backgroundColor == creatingWalls.color){
        alert("Can not create start point on the wall!!");
    }
    else if (event.target.style.backgroundColor == creatingEndingPoints.color){
        alert("Start and end point can not be the same, Please select another start point!!");
    }
    else{
        if (creatingStartingPoint.currNum < creatingStartingPoint.maxQuantity){
            matrixOfNodes[i][j] = creatingStartingPoint.mark;
            startNode = [i,j];
            event.target.style.backgroundColor = creatingStartingPoint.color;
            creatingStartingPoint.currNum++;
            startPointHasBeenCreated = true;
            if(endPointHasBeenCreated) {
                document.getElementById('run').style.setProperty('--before-width', '103%');
            }
        }
        else alert(creatingStartingPoint.notification);
    }      
}

// Creates End point in the grid.
function handleEnd(event, i, j){
    if (event.target.style.backgroundColor == creatingEndingPoints.color){
        matrixOfNodes[i][j] = 0;
        endNode = [-1,-1];
        event.target.style.backgroundColor = 'rgb(0, 0, 0, 0.1)';
        creatingEndingPoints.currNum--;  
        endPointHasBeenCreated = false;
        document.getElementById('run').style.setProperty('--before-width', '0');
    }
    else if (event.target.style.backgroundColor == creatingWalls.color){
        alert("Can not create end point on the wall!!");
    }
    else if (event.target.style.backgroundColor == creatingStartingPoint.color){
        alert("Start and end point can not be the same, Please select another start point!!");
    }
    else{
        if (creatingEndingPoints.currNum < creatingEndingPoints.maxQuantity){
            matrixOfNodes[i][j] = creatingEndingPoints.mark;
            endNode = [i,j];
            event.target.style.backgroundColor = creatingEndingPoints.color;
            creatingEndingPoints.currNum++;
            endPointHasBeenCreated = true;
            if(startPointHasBeenCreated) {
                document.getElementById('run').style.setProperty('--before-width', '103%');
            }
        }
        else alert(creatingEndingPoints.notification);
    }      
}

// If user presses mouse button and hovers over the grid, following function handles that and creates walls, starting point or ending point in the grid depending upon current state.
function handleHover(event, index) {
    const i = Math.floor(index/numberOfColumns);
    const j = index%numberOfColumns;
    if (event.buttons === 1){
        if (currstate.stepNumber == 1) handleWalls(event, i, j); 
        else if (currstate.stepNumber == 2) handleStart(event, i, j);
        else if (currstate.stepNumber == 3) handleEnd(event, i, j);
    }
}

// Clears everything from the grid (walls, start-point, end-point).
function clearEverything(){
    for (let i = 0; i < numberOfRows; i++){
        for (let j = 0; j < numberOfColumns; j++){
            matrixOfNodes[i][j] = 0;
            previousNode[i][j] = 0;
            nodeReached[i][j] = 0;
            document.querySelector(`#grid .grid-item:nth-child(${indexToChildNumber([i,j])})`).style.backgroundColor = 'rgb(0, 0, 0, 0.1)';
            startNode = [-1, -1];
            endNode = [-1, -1];
            document.getElementById('stepsBox').style.display = 'flex';
            document.getElementById('resultBox').style.display = 'none';
            startPointHasBeenCreated = false;
            endPointHasBeenCreated = false;
            document.getElementById('run').style.setProperty('--before-width', '0');
            creatingWalls.currNum = 0;
            creatingStartingPoint.currNum = 0;
            creatingEndingPoints.currNum = 0;
        }
    }
}

// Clears everything except walls in the grid.
function clearExceptWalls(){
    for (let i = 0; i < numberOfRows; i++){
        for (let j = 0; j < numberOfColumns; j++){
            if(matrixOfNodes[i][j] != -1){
                matrixOfNodes[i][j] = 0;
                document.querySelector(`#grid .grid-item:nth-child(${indexToChildNumber([i,j])})`).style.backgroundColor = 'rgb(0, 0, 0, 0.1)';
                startNode = [-1, -1];
                endNode = [-1, -1];
                document.getElementById('stepsBox').style.display = 'flex';
                document.getElementById('resultBox').style.display = 'none';
                startPointHasBeenCreated = false;
                endPointHasBeenCreated = false;
                document.getElementById('run').style.setProperty('--before-width', '0');
                creatingStartingPoint.currNum = 0;
                creatingEndingPoints.currNum = 0;
            }
            previousNode[i][j] = 0;
            nodeReached[i][j] = 0;
        }
    }
}

export {numberOfRows,
        numberOfColumns,
        handleHover,
        toggleStates,
        startPointHasBeenCreated,
        endPointHasBeenCreated,
        startNode,
        endNode,
        matrixOfNodes,
        previousNode,
        nodeReached,
        clearEverything,
        clearExceptWalls};