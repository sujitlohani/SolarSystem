import * as readline from 'readline';
const max_planet = 100;

class Planet {
    private name: string;
    private color: string;
    private composition: string;
    private radius: number;
    private mass: number;
    private rotationspeed: number;

    constructor(
        name: string = "",
        color: string = "",
        composition: string = "",
        radius: number = 0,
        mass: number = 0,
        rotationspeed: number = 0
    ){
        this.name = name;
        this.color = color;
        this.composition = composition;
        this.radius = radius;
        this.mass = mass;
        this.rotationspeed = rotationspeed;
    }
    display_planetinfo(): void {
        console.log ("Name: " + this.name);
        console.log ("Color: " + this.color);
        console.log ("Composition: " + this.composition);
        console.log ("Radius: " + this.radius + " km");
        console.log ("Mass: " + this.mass + " kg");
        console.log ("Rotation speed: " + this.rotationspeed + " degrees per second\n");
        

    }
    set_details(
        name: string,
        color: string,
        composition: string,
        radius: number,
        mass: number,
        rotationSpeed: number
    ): void {
        this.name = name;
        this.color = color;
        this.composition = composition;
        this.radius = radius;
        this.mass = mass;
        this.rotationspeed = rotationSpeed;
    }
}

class GasGiant extends Planet {
    private gas_type: string;  

    constructor(
        name: string = "",
        color: string = "", 
        radius: number = 0, 
        mass: number = 0, 
        rotationSpeed: number = 0, 
        gas_type: string = ""
        ){
        super(name, color, "Gas", radius, mass, rotationSpeed);
        this.gas_type = gas_type;  
        }

   display_info(): void {
        super.display_planetinfo();  // Call the parent class method to display basic planet info
        console.log("Gas Type: " + this.gas_type);
    }
}



class solar_system {
    private planets: Planet[];
    private planet_count: number;

    constructor(){
        this.planets = [];
        this.planet_count = 0;
    }

    add_planet(new_planet: Planet): void {

        if (this.planet_count < max_planet) {

            this.planets.push(new_planet);
            this.planet_count++;

            console.log("Planet added successfully!");
        } else {
            console.log("Solar system is full! Cannot add more planets.");
        }
    }

    view_planets(): void {
        if (this.planet_count === 0) {
            console.log("Solar System has no planets!");
            return;
        }

        console.log("Planets in the Solar System:");

        for (const planet of this.planets) {
            if (planet instanceof GasGiant) {  
                (planet as GasGiant).display_info();  
            } else {
                planet.display_planetinfo();  // Correct call on the instance
            }
        }
    }
    }



const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query: string): Promise<string> {
    return new Promise((resolve) => rl.question(query, resolve));
}

async function main(){

    const solarSystem = new solar_system();
    let pick:number;

    do{
        console.log ("Solar System Management");
        console.log ("1. Add a new planet");
        console.log ("2. Add a new Gas Giant");
        console.log ("3. View existing planets");
        console.log ("4. Exit");
    

        pick = parseInt(await askQuestion("Welcome! Enter your choice: ") || "4");
        

        switch (pick){
            
            case 1:{
                const name = await askQuestion("Enter name of new planet: ") || "";
                const color = await askQuestion("Enter color of new planet: ") || "";
                const composition = await askQuestion ("Enter composition of new planet: ") || "";
                const radius = parseFloat(await askQuestion ("Enter radius of new planet: ") || "0");
                const mass = parseFloat(await askQuestion ("Enter mass for new planet: ") || "0");
                const rotationspeed = parseFloat(await askQuestion ("Enter rotation speed of new planet: ") || "0");

                const new_planet = new Planet (name, color, composition, radius, mass, rotationspeed);
                solarSystem.add_planet(new_planet);
                break;
            }

            case 2: {
                const name = await askQuestion("Enter name of new Gas Giant: ") || "";
                const color = await askQuestion("Enter color of new Gas Giant: ") || "";
                const radius = parseFloat(await askQuestion("Enter radius of new Gas Giant: ") || "0");
                const mass = parseFloat(await askQuestion("Enter mass for new Gas Giant: ") || "0");
                const rotationspeed = parseFloat(await askQuestion("Enter rotation speed of new Gas Giant: ") || "0");
                const gas_type = await askQuestion("Enter type of gas (e.g., Hydrogen, Helium): ") || "";

                const new_gas_giant = new GasGiant(name, color, radius, mass, rotationspeed, gas_type);
                solarSystem.add_planet(new_gas_giant);
                break;
            }

            case 3:
                solarSystem.view_planets();
                break; 

            case 4:
                console.log("Exiting Program...");
                break;
    
            default:
                console.log ("Invalid choice. Please try again.");
        }
    } while (pick !== 4);
}

main();
                
