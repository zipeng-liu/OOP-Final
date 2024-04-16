import { Map }from "./Map";
import path from "path";

async function main() {
  const filePath = path.join(__dirname, "data", "data.json");
  const map = await Map.create(filePath);
  map.printMap();
  console.log("---End of Map---")
  map.registerForShots();
  const report = new ReportMaker(new ComplexReport(map));
  report.printDetails();
  console.log("---End of Report---")
  map.printMap();
  console.log("---End of Map---")
}

main();