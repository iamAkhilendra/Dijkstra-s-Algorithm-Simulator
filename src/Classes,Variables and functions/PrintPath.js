import {startNode, endNode, previousNode, numberOfColumns} from './VariablesAndFunctions';


// Once the shortest path between start-node and end-node is calculate, we have to render the obtained shortest path between these two nodes.
// Following function randers the shortest path between start and end node with green color.
function printPath(){
    var x = endNode[0];
    var y = endNode[1];
    while (true){
        if (previousNode[x][y] == 1) x += 1;
        else if (previousNode[x][y] == 2) y -= 1;
        else if (previousNode[x][y] == 3) x -= 1;
        else if (previousNode[x][y] == 4) y += 1;
        else if (previousNode[x][y] == 5) break;
        if (x != startNode[0] || y != startNode[1]){
            var childNumber = (numberOfColumns * x) + y + 1;
            var child = document.querySelector(`#grid .grid-item:nth-child(${childNumber})`);
            child.style.backgroundColor = 'rgb(15, 109, 15)';
        }
    }
}

export default printPath