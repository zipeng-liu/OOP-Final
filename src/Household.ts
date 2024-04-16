import { IBlock } from "./IBlock";
import { People } from "./People";

export class Household implements IBlock{
  cityName: string;
  blockNumber: string;
  people: People[];
  

  constructor(cityName: string, blockNumber: string, people: People[]) {
    this.cityName = cityName;
    this.blockNumber = blockNumber;
    this.people = people;
  }
}