// make list of names

// get random number from api based on list length

// display result
import fetch from "node-fetch";

export interface ScrumMasterProps {
  currentMaster: string;
}

export class ScrumMaster {
  currentMaster: string;
  names: string[] = ["roman", "jant", "romano", "tony", "oscar"];

  constructor(props: ScrumMasterProps) {
    this.currentMaster = props.currentMaster;
  }

  getValidNames(): string[] {
    const validNames = this.names.filter((name) => name !== this.currentMaster);
    return validNames;
  }

  async generateRandomValue(): Promise<number> {
    const length = this.names.length - 1;
    const requestBody = {
      jsonrpc: "2.0",
      method: "generateIntegers",
      params: {
        apiKey: "b2b17124-7289-4dfa-be4a-ba3eae856978",
        n: 1,
        min: 0,
        max: length - 1,
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
    let jsonObject = (await response.json()) as {
      result: { random: { data: number[] } };
    };
    return jsonObject.result.random.data[0];
  }
}
