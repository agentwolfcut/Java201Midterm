// 5. 
// Instruction: - Create class Elevator with the following specifications: 
// Class Elevator: 
// Constructor 
// • Constructor(maxFloor, minFloor): This initializes the properties 
// 'maxFloor', 'minFloor' and set 'currentFloor' to 0 
// Properties 
// • currentFloor: The floor where the elevator currently is. , type number 
// • maxFloor: The highest floor the elevator can go to. , type number 
// • minFloor: The lowest floor the elevator can go to , type number 
// // Methods 
// • goUp(): Increases currentFloor by 1, but not above maxFloor. 
// • goDown(): Decreases currentFloor by 1, but not below minFloor. 
// • goToFloor(floor): Takes a floor number and sets currentFloor to that 
// f
//  loor if it's within range. 
// • displayFloor(): Prints the current floor to the console.

class Elevator {
    constructor(maxFloor, minFloor) {
        this.currentFloor = 0;
        this.maxFloor = maxFloor;
        this.minFloor = minFloor;
    }

    goUp() {
        if (this.currentFloor < this.maxFloor) {
            this.currentFloor++;
        }
    }

    goDown() {
        if (this.currentFloor > this.minFloor) {
            this.currentFloor--;
        }
    }

    goToFloor(floor) {
        if (floor >= this.minFloor && floor <= this.maxFloor) {
            this.currentFloor = floor;
        }
    }

    displayFloor() {
        console.log(`Current Floor: ${this.currentFloor}`);
    }
}
