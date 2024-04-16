export class People {
  private _healthNumber: string;
  private _fullname: string;
  private _vaccinationStatus: boolean;

  constructor(number: string, name: string, status: boolean) {
    this._healthNumber = number;
    this._fullname = name;
    this._vaccinationStatus = status;
  }

  get healthNumber(): string {
    return this._healthNumber;
  }

  get fullname(): string {
    return this._fullname;
  }

  get vaccinationStatus(): boolean {
    return this._vaccinationStatus;
  }
}