const { arch, platform, cpus, totalmem, tmpdir } = require("os");
const rl = require("./rl");

const systemInfos = () => {
    rl.question("Tapez le nom de la caractéristique de votre système d'exploitation (arch, platform, cpu, memory, tempdir ou 'exit' pour quitter)", (input) => {
    if (input.toLowerCase() === "exit") {
        return rl.close();
    }
    switch(input) {
        case "arch":
            console.log(arch());
            break;
        case "platform":
            console.log(platform());
            break;
        case "cpu":
            console.table(cpus());
            break;
        case "memory":
            console.log(totalmem());
            break;
        case "tempdir":
            console.log(tmpdir());
            break;
        default:
            console.log("Vérifiez votre orthographe !");
        }
        systemInfos();
    });
}
systemInfos();