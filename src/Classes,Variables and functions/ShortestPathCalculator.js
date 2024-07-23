import minHeap from './MinHeapClass';
import {numberOfRows, numberOfColumns} from './VariablesAndFunctions';

// Converts child number into corresponding grid index.
function childNumberToIndex(childNumber){
    let x = Math.floor((childNumber-1) / numberOfColumns);
    let y = (childNumber - 1) % numberOfColumns;
    return [x, y];
}

// Converts grid index to child number
function indexToChildNumber(index){
    return (numberOfColumns * index[0]) + index[1] + 1;
}

function calculateShortestPath(startNode, endNode, matrixOfNodes, numberOfRows, numberOfColumns, previousNode, nodeReached){

    let promisesArray = [];

    let maximumPossibleDistance = numberOfRows * numberOfColumns + 3;

    // Setting distance of all nodes from start-node Infinity (in this case we have taken a big number which is out of possible distances range).
    for (let i = 0; i < numberOfRows; i++) {
      for (let j = 0; j < numberOfColumns; j++) {
          if (matrixOfNodes[i][j] != -1) matrixOfNodes[i][j] = maximumPossibleDistance;
      }
    }

    // Cheacks whether index of a cell is valid for the grid or not.
    function isInsideTheDomain(a,b) {
        return (a >= 0 && a < numberOfRows && b >= 0 && b < numberOfColumns);
    }

    // Changes color of grid cells.
    function changeColor(index, distance){
      let myPromiseToChangeColor = new Promise((resolve, reject) => {
          setTimeout(() => {
              var child = document.querySelector(`#grid .grid-item:nth-child(${index})`);  
              child.style.backgroundColor = 'rgb(255, 167, 50)';
              resolve();
          }, distance * 100);
      });
      promisesArray.push(myPromiseToChangeColor);
    }

    // Calculates shortest path from start-node to end-node
    function runForShortestPath(matrixOfNodes, previousNode, nodeReached, startNode, endNode) {
      

        previousNode[startNode[0]][startNode[1]] = 5;
        matrixOfNodes[startNode[0]][startNode[1]] = 0;

        let heapArray = [];
        let myMinHeap = new minHeap(heapArray);

        myMinHeap.insert([0, indexToChildNumber(startNode)]);

        let minimumDistanceToEndNode = -1;

        let nodeWithMinimumDistanceInHeap = [-1, -1];


        while (!myMinHeap.isEmpty()) {

            nodeWithMinimumDistanceInHeap = myMinHeap.delete();
            if(!(indexToChildNumber(startNode) == nodeWithMinimumDistanceInHeap[1] || indexToChildNumber(endNode) == nodeWithMinimumDistanceInHeap[1])){
                changeColor(nodeWithMinimumDistanceInHeap[1], nodeWithMinimumDistanceInHeap[0]);
            }

            let indexOfNodeWithMinimumDistance = childNumberToIndex(nodeWithMinimumDistanceInHeap[1]);
            
            let x = indexOfNodeWithMinimumDistance[0];
            let y = indexOfNodeWithMinimumDistance[1];
            
            nodeReached[x][y] = 1;
            let neighbours = [[x + 1, y], [x, y - 1], [x - 1, y], [x, y + 1]];

            for (let i = 0; i < neighbours.length; i++) {
                let m = neighbours[i][0];
                let n = neighbours[i][1];
                if (isInsideTheDomain(m, n) && matrixOfNodes[m][n] != -1) {
                    if (nodeReached[m][n] == 1) continue;
                    if (matrixOfNodes[m][n] > matrixOfNodes[x][y] + 1) {
                        if (matrixOfNodes[m][n] == maximumPossibleDistance) myMinHeap.insert([matrixOfNodes[x][y] + 1, indexToChildNumber([m,n])]);
                        else myMinHeap.adjust( indexToChildNumber([m,n]), matrixOfNodes[x][y] + 1 );
                        matrixOfNodes[m][n] = matrixOfNodes[x][y] + 1;
                        previousNode[m][n] = Math.abs(x - m) * Math.floor(2 - (x - m)) + Math.abs(y - n) * Math.floor(3 + (y - n));
                    }
                }
            }
            
            if (nodeReached[endNode[0]][endNode[1]] == 1) {
                minimumDistanceToEndNode = matrixOfNodes[endNode[0]][endNode[1]];
                break;
            }
        }

        async function displayResult(){
            await Promise.all(promisesArray);
            return minimumDistanceToEndNode;
        }

        return displayResult();
    }

    return runForShortestPath(matrixOfNodes, previousNode, nodeReached, startNode, endNode);
}

export default calculateShortestPath;

export {indexToChildNumber, childNumberToIndex};
