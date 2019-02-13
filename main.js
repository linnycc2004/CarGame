// Variables
let car = {
    make: "Ferrari",
    model: "Ferrari",
    color: "white",
    mileage: 0,
    isWorkking: true,
      
    driveToWork(){
        alert(`Old Mileage: ${this.mileage}`);
        this.mileage = this.mileage + 10;
        alert(`New Mileage: ${this.mileage}`);
    }
}

// Functions
// Logs all our car's current stats to the console
const rewriteStats()=>{

}

// Main Process
// Captures keyboard input. Depending on the letter pressed it will "call" (execute) different functions
const document.onkeyup(event)=>{

    //Captures the key press, converts it to lowercase, and saves it to variable
    let letter = String.fromCharCode(event.keyCode).toLowerCase();

    if (letter = "d"){
        car.driveToWork();
        rewriteStats();
    }


}