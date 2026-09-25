const fs = require('fs').promises;


async function readFiles() {
  try {
      console.log("Starting file operations...");

      const data1 = await fs.readFile('file1.txt', 'utf8');
      console.log("File1 content:", data1);

      const data2 = await fs.readFile('file2.txt', 'utf8');
      console.log("File2 content:", data2);

      const data3 = await fs.readFile('file3.txt', 'utf8');
      console.log("File3 content:", data3);

      console.log("File operations completed...");
  } catch (err) {
      console.error("Error reading files:", err);
  }
}

readFiles();