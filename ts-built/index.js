import { ScrumMaster } from "./ScrumMaster.js";
import promptSync from "prompt-sync";
async function runSelection() {
    const currentMaster = getCurrentMaster().toLowerCase();
    const props = {
        currentMaster: currentMaster,
    };
    const scrumMaster = new ScrumMaster(props);
    const value = await scrumMaster.generateRandomValue();
    const possibleScrumMasters = scrumMaster.getValidNames();
    console.log(possibleScrumMasters[value]);
}
function getCurrentMaster() {
    const prompt = promptSync();
    const name = prompt("What is your name? ");
    return name;
}
runSelection();
