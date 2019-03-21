export class When{

  constructor(
    public year?: string,
    public month?: string,
    public date?: string,
    public hour?: string,
    public minute?: string,
  ) {
    if(!year && !month && !date && !hour && !minute) {
      const now = new Date();

      this.hour = String(now.getHours()).padStart(2, '0');
      this.minute = String(now.getMinutes()).padStart(2, '0');
      this.date = String(now.getDate()).padStart(2, '0');
      this.month = String(now.getMonth() + 1).padStart(2, '0');
      this.year = String(now.getFullYear()).padStart(4, '0');
    }
  }

  get dateString(): string {
    return `${this.year}-${this.month}-${this.date}`;
  }
  set dateString(s: string) {
    this.year = s.substring(0, 4);
    this.month = s.substring(5, 7);
    this.date = s.substring(8, 10);
  }

  get timeString(): string {
    return `${this.hour}:${this.minute}`;
  }
  set timeString(s: string) {
    this.hour = s.substring(0, 2);
    this.minute = s.substring(3, 5);
  }

  get timeStringURL(): string {
    return `${this.hour}${this.minute}`;
  }

  static get currentDateString(): string {
    const now = new Date();

    const date = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = String(now.getFullYear()).padStart(4, '0');
    return `${year}-${month}-${date}`;
  }

  static get currentTimeString(): string {
    const now = new Date();

    const hour = String(now.getHours()).padStart(2, '0');
    const minute = String(now.getMinutes()).padStart(2, '0');
    return `${hour}:${minute}`;
  }

}
