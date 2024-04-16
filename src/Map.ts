import { readFile } from "fs/promises";
import { People } from "./People";
import { Clinic } from "./Clinic";
import { WaitlistQueue } from "./WaitlistQueue";
import { IBlock } from "./IBlock";
import { Household } from "./Household";

export class Map {
  private _mapData: IBlock[];
  private _map: [];

  private constructor(data: IBlock[]) {
    this._mapData = data;
    this._map = [];
  }

  public static async create(filePath: string): Promise<Map> {
    const data = await readFile(filePath, { encoding: 'utf8' });
    const objData = JSON.parse(data);

    for (const city in objData) {
      city.households.
    }


    return new Map();
  }

  printMap(): Promise<void> {
    for (const block of this._mapData) {
      if (typeof(block) === Household) {

      }
    }
  };

  //registerForShots();
}
