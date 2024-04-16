import { People } from "./People";


export class WaitlistQueue<People> {
  private items: People[];

  constructor() {
    this.items = [];
  };

  enqueue(item: People): void {
    this.items.push(item);
  }

  dequeue(): People | undefined {
    return this.items.shift();
  }

  size(): number {
    return this.items.length;
  }
}