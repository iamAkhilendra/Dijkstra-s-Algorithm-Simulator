class minHeap{
    constructor(arrayRepresentation){
        this.arrayRepresentation = arrayRepresentation;
    }

    isEmpty() {
        return this.arrayRepresentation.length == 0;
    }

    swap(index1, index2){
        [this.arrayRepresentation[index1], this.arrayRepresentation[index2]] = [this.arrayRepresentation[index2], this.arrayRepresentation[index1]];
    }

    insert(element){
        this.arrayRepresentation.push(element);

        let index = this.arrayRepresentation.length-1;
        let parent = Math.floor((index-1)/2);
        while(parent >= 0){
            if (this.arrayRepresentation[parent][0] < this.arrayRepresentation[index][0]) break;
            this.swap(parent, index);
            index = parent;
            parent = Math.floor((index-1)/2);
        }
    }

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
                index = indexToBeSwapped;
                left = 2*index+1;
                right = 2*index+2;
            }
            else break;
        }
        return output;
    }
}

export default minHeap;