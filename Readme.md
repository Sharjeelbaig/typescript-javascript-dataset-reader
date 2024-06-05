# Read Dataset 🖥💻

This module reads a CSV file and returns an array of objects. Each object represents a row in the CSV file. The keys of the object are the headers of the CSV file and the values are the values of the row.

## Usage 🚀

```javascript
const readDataset = require("dataset-reader");

const path = "data.csv";

readDataset(path)
  .then((dataset) => {
    console.log(dataset);
  })
  .catch((error) => {
    console.error(error);
  });
```

# License ©

MIT

# Author 👩‍💻

[Sharjeel Baig](https://sharjeelbaig.github.io/)
