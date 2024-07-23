class minHeap{
    constructor(arrayRepresentation){
        // Array representation of the heap.
        this.arrayRepresentation = arrayRepresentation;

        // To track index of a element in the array representation of the heap.
        this.indexTracker = new Map();
    }

    // Returns true if heap is empty, otherwise false.
    isEmpty() {
        return this.arrayRepresentation.length == 0;
    }

    // Swaps two elements in the array representation of heap.
    swap(index1, index2){
        [this.arrayRepresentation[index1], this.arrayRepresentation[index2]] = [this.arrayRepresentation[index2], this.arrayRepresentation[index1]];
    }

    // Inserts and element in heap.
    // Here element = [ditance of child from start-node, Chid-number].
    insert(element){
        this.arrayRepresentation.push(element);

        this.indexTracker.set(element[1], this.arrayRepresentation.length - 1);

        let index = this.arrayRepresentation.length-1;
        let parent = Math.floor((index-1)/2);
        while(parent >= 0){
            if (this.arrayRepresentation[parent][0] < this.arrayRepresentation[index][0]) break;
            this.swap(parent, index);
            this.indexTracker.set(this.arrayRepresentation[parent][1], parent);
            this.indexTracker.set(this.arrayRepresentation[index][1], index);
            index = parent;
            parent = Math.floor((index-1)/2);
        }
    }

    // Pops and returns top element in the heap.
    delete(){
        if(this.isEmpty()) return -1;

        let output = this.arrayRepresentation[0];
        let last = this.arrayRepresentation.length-1;
        
        this.swap(0, last);
        this.arrayRepresentation.splice(last,1);

        let index = 0;
        let left = 2*index+1;
        let right = 2*index+2;

        while(left < last){
            let indexToBeSwapped = left;
            if (right < last && this.arrayRepresentation[right][0] < this.arrayRepresentation[left][0]) indexToBeSwapped = right;
            if (this.arrayRepresentation[indexToBeSwapped][0] < this.arrayRepresentation[index][0]){
                this.swap(index, indexToBeSwapped);
                this.indexTracker.set(this.arrayRepresentation[indexToBeSwapped][1], indexToBeSwapped);
                this.indexTracker.set(this.arrayRepresentation[index][1], index);
                index = indexToBeSwapped;
                left = 2*index+1;
                right = 2*index+2;
            }
            else break;
        }
        return output;
    }

    // If ditance of any node in the heap is changed, we have to adjust its position in heap as well to maintain the order of heap.
    // Following function updates the distance of a child and replaces it at its correct position in the heap.
    adjust(childNumber, distance) {
        var index = this.indexTracker.get( childNumber );

        this.arrayRepresentation[index][0] = distance;

        var parent = Math.floor((index-1)/2);
        while(parent >= 0){
            if (this.arrayRepresentation[parent][0] < this.arrayRepresentation[index][0]) break;
            this.swap(parent, index);
            this.indexTracker.set(this.arrayRepresentation[parent][1], parent);
            this.indexTracker.set(this.arrayRepresentation[index][1], index);
            index = parent;
            parent = Math.floor((index-1)/2);
        }
    }
}

export default minHeap;