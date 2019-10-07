function TheCat() {
    let tiredness = 10;
    let hunger = 10;
    let lonliness = 100;
    let happiness = 0;
    this.feed = function () {
        hunger += 20;
        if (hunger > 100) {
            hunger = 100;
        }
    }
    this.sleep = function () {
        tiredness -= 20;
        if (tiredness < 0) {
            tiredness = 0;
        }
    }
    this.pet = function () {
        if (happiness < 10) {
            let rand = Math.random().toFixed(1);
            if (rand < 0.5) {
                console.log("Your cat doesn't want to be petted! Try again later.");
            } else {
                lonliness -= 10;
                happiness += 10;
                if (lonliness < 0) {
                    lonliness = 0;
                }
                if (happiness > 100) {
                    happiness = 100;
                }
            }
        }
    }
    this.status = function () {
        if (tiredness < 20) {
            console.log("Your cat is very sleepy, need to go to sleep.", `Tiredness = ${tiredness}`);
        } else {
            console.log(`Tiredness = ${tiredness}`);
        }
        if (hunger < 20) {
            console.log("Your cat is hungry, please feed it.", `Hunger = ${hunger}`);
        } else {
            console.log(`Hunger = ${hunger}`)
        }
        if (lonliness < 20) {
            console.log("Your cat is happily!", `Lonliness = ${lonliness}`);
        } else if (happiness < 20) {
            console.log("Your cat is lonely!", `Happiness = ${happiness}`);
        }
    }
    this.feedAmount = function (amount) {
        hunger += amount;
        if (hunger > 100) {
            hunger = 100;
        }
    }
    this.sleepAmount = function (amount) {
        tiredness -= amount;
        if (tiredness < 0) {
            tiredness = 0;
        }
    }

    this.lonlinessAmount = function (amount) {
        lonliness += amount;
        happiness -= amount;
        if (lonliness > 100) {
            lonliness = 100;
        }
        if (happiness < 0) {
            happiness = 0;
        }
    }
    this.happinessAmount = function (amount) {
        lonliness -= amount;
        happiness += amount;
        if (lonliness < 0) {
            lonliness = 0;
        }
        if (happiness > 100) {
            happiness = 100;
        }
    }

}

let myCat = new TheCat();