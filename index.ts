// const fs = require("fs").promises;
import { promises as fs } from "fs";
interface Dataset {
  [key: string]: string;
}

const readDataset = async (path: string): Promise<Dataset[]> => {
  console.log("Reading dataset from", path);
  try {
    const csvString = await fs.readFile(path, "utf-8");
    const [headerLine, ...lines] = csvString.split("\n");
    const headers = headerLine.split(",");

    return lines.map((line: string) => {
      const values = line.split('","').map((value) => value.replace(/"/g, ""));
      return headers.reduce((obj, header, index) => {
        obj[header.trim()] = values[index].trim();
        return obj;
      }, {});
    });
  } catch (error) {
    throw new Error(`Error reading dataset: ${error.message}`);
  }
};

// module.exports = readDataset;
export default readDataset;
