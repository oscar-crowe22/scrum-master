// make list of names
// get random number from api based on list length
// display result
import fetch from "node-fetch";
class ScrumMaster {
    currentMaster;
    names;
    constructor(props) {
        this.currentMaster = props.currentMaster;
        this.names = this.getNames();
    }
    getNames() {
        return ["roman", "jant", "romano", "tony"];
    }
    async generateRandomValue(names) {
        const length = names.length;
        const requestBody = {
            jsonrpc: "2.0",
            method: "generateIntegers",
            params: {
                apiKey: "b2b17124-7289-4dfa-be4a-ba3eae856978",
                n: 1,
                min: 0,
                max: length,
            },
            id: 42,
        };
        const response = await fetch("https://api.random.org/json-rpc/2/invoke", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
        });
        let jsonObject = (await response.json());
        console.log(jsonObject.result.random.data);
        return 1;
    }
}
const props = {
    currentMaster: "oscar",
};
const scrumMaster = new ScrumMaster(props);
scrumMaster.generateRandomValue(scrumMaster.names);
