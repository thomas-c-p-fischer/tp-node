const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const askName = () => {
    rl.question("Quel est votre nom ? (tapez 'exit' pour sortir)", (name) => {
        if(name.toLowerCase() === 'exit') {
            console.log("Au revoir !");
            rl.close();    
        } else {
            console.log(`Bonjour ${name} !`);
            askName();
        }
    });
};
askName();