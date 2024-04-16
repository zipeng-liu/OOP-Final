import { WaitlistQueue } from "./WaitlistQueue";
import { People } from "./People";
import { IBlock } from "./IBlock";

export class Clinic implements IBlock{
  clinicName: string;
  numberOfStaff: number;
  blockNumber: string;
  waitlist: WaitlistQueue<People>;

  constructor(clinicName: string, numberOfStaff: number, blockNumber: string) {
    this.clinicName = clinicName;
    this.numberOfStaff = numberOfStaff
    this.blockNumber = blockNumber;
    this.waitlist = new WaitlistQueue();
  }
}