import { ScrumMaster, ScrumMasterProps } from "./ScrumMaster.js";
import promptSync from "prompt-sync";

async function runSelection() {
  const currentMaster = getCurrentMaster().toLowerCase();
  const props: ScrumMasterProps = {
    currentMaster: currentMaster,
  };
  const scrumMaster = new ScrumMaster(props);
  const value = await scrumMaster.generateRandomValue();
  const possibleScrumMasters = scrumMaster.getValidNames();
  console.log("New ScrumMaster:", possibleScrumMasters[value]);
}

function getCurrentMaster(): string {
  const prompt = promptSync();
  const name = prompt("What is your name? ");
  return name;
}

runSelection();
