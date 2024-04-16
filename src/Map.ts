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
    let ressultData = [];
    for (const city in objData) {
      // for each city, create household obj (with people obj stored in it) and the clinic obj
      // push the IBlock obj into its block position as index in the ressultData array
      // in this case I just define first 6 index as Burnaby the next 6 index as Vancouver, and so on
    }

    return new Map(ressultData);
  }

  printMap(): Promise<void> {
    let result = [];
    for (const block of this._mapData) {
      // base on the this._map:
      // if the block is household (without fall vacc) print H
      // if full vacc print F
      // if clinic print C
      // if empty print X
    }
  };

  //registerForShots();
}
