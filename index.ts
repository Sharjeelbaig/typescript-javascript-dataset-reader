const fs = require("fs").promises;

interface Dataset {
  [key: string]: string;
}

const readDataset = async (path: string): Promise<Dataset[]> => {
  try {
    const csvString = await fs.readFile(path, "utf-8");
    const [headerLine, ...lines] = csvString.split("\n");
    const headers = headerLine.split(",");

    return lines.map((line) => {
      const values = line.split(",");
      return headers.reduce((obj, header, index) => {
        obj[header.trim()] = values[index].trim();
        return obj;
      }, {});
    });
  } catch (error) {
    throw new Error(`Error reading dataset: ${error.message}`);
  }
};

module.exports = readDataset;
