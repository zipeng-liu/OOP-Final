const fs = require("fs/promises")
const path =require("path")

async function main() {
  const filePath = path.join(__dirname, "data", "data.json");
  const data = await fs.readFile(filePath, { encoding: 'utf8' })
  const newData = JSON.parse(data);
  console.log(newData)
  console.log(typeof newData)
}

main();